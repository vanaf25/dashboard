import React, {useState, useEffect} from 'react';
import { Grid } from "@mui/material";
import BlankCard from "@/app/components/shared/BlankCard";
import CalculationValues from "@/app/components/CalculationValues/CalculationValues";
import {ActionTableType, TablesPropertiesIntegrated} from "@/app/types/tablesTypes";
import Button from "@mui/material/Button";
import calculateTotalAmount from "@/app/utils/calculateTotalAmount";
import getActualTableData from "@/app/utils/getActualTableData";
import {MeasurementsType} from "@/app/types/measurementsTypes";
import measurementsApi from "@/app/apis/measurementApi";
import { useMutation } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import {useSupabaseSession} from "@/app/hooks/useSupabaseSession";
import Alert from "@mui/material/Alert";

interface TablesSummaryProps {
    tables: ActionTableType[];
    clientOnly?: boolean;
    type?: MeasurementsType;
    setCalculation: (params:Record<string,number>)=>void;
    properties:TablesPropertiesIntegrated[]
}
interface TotalValues{
    key:string,
    header:string
    value:any,
}
const transformTotalValues = (values: TotalValues[],isKey?:boolean): Record<string, any> => {
    return values.reduce((acc, curr) => {
        acc[isKey ? curr.key: curr.header] = curr.value;
        return acc;
    }, {} as Record<string, any>);
};
const TablesSummary: React.FC<TablesSummaryProps> = ({ tables, clientOnly
                                                         , type,
                                                         setCalculation,properties
}) => {
    const [totalValues, setTotalValues] = useState<TotalValues[]>([]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const { session, loading: sessionLoading } = useSupabaseSession();
    const customerId = searchParams.get('customerId');
    const { mutate: createMeasurement, isPending } = useMutation({
        mutationFn: async (tablesData: any) => {
            if (!type || !session?.user?.id || !customerId) {
                throw new Error('Missing required data');
            }
            console.log('tables:',tablesData);
            const measurementData = {
                type,
                userId: session.user.id,
                customerId,
                tables: tablesData
            };

            return measurementsApi.createMeasurement(measurementData);
        },
        onSuccess: (data) => {
            router.push(`/measurements/${data.id}`);
        },
        onError: (error) => {
            console.error('Error creating measurement:', error);
        }
    });
    const calculateTotals = () => {
        let newTotals: TotalValues[] = [];
        tables.forEach(table => {
            table.columns.forEach(column => {
                if (column.field && column.headerName !== 'Actions') {
                    const totalAmount = calculateTotalAmount(table.ref, column.field);
                    const curValue=newTotals.find(el=>el.key===column.field)
                    if(curValue){
                        const value = curValue.value + totalAmount;
                        console.log('value:',value);
                        newTotals=newTotals.map(el=>{
                            if(el.key===curValue.key) return {...el,value}
                            return el
                        })
                    }
                    else {
                        newTotals.push({key:column.field,header:column.headerName || "",value:totalAmount})
                    }
                }
            });
        });
        console.log('newTotals:',newTotals);
        setTotalValues(newTotals);
    };
    const cellValueChangedHandler = (param: any) => {
        console.log('param:',param);
        const key = param.colDef.field;
        const difference = param.newValue - param.oldValue;
        setTotalValues(prevState=>prevState.map(el=>{
            if(el.key===key) return {...el,value:el.value+difference}
            return el
        }))
        /*
        setTotalValues(prevState => ({ ...prevState, [key]: prevState[key] + difference }));
*/
    };
    useEffect(() => {
        const interval = setInterval(() => {
            const allApisReady = tables.every(table =>
                table.ref.current && table.ref.current.api
            );
            if (allApisReady) {
                clearInterval(interval);
                tables.forEach(table => {
                    const api = table.ref.current.api;
                    api.addEventListener('cellValueChanged', cellValueChangedHandler);
                    api.addEventListener('modelUpdated', calculateTotals);
                });
                calculateTotals();
            }
        }, 100);

        return () => {
            clearInterval(interval);
            tables.forEach(table => {
                if (table.ref.current?.api) {
                    const api = table.ref.current.api;
                    api.removeEventListener('cellValueChanged', calculateTotals);
                    api.removeEventListener('rowDataUpdated', calculateTotals);
                    api.removeEventListener('rowDataChanged', calculateTotals);
                    api.removeEventListener('modelUpdated', calculateTotals);
                }
            });
        };
    }, [tables]);
    const saveMeasurementsHandle = () => {
        if (clientOnly && !sessionLoading  && type && customerId && session?.user?.id) {
            console.log('tables:',tables);
            const tablesWithActualData = tables.map(el => ({
                ...el,
                properties:properties.find(p=>{
                 return p.tableId===el.id
                })?.properties.map(p=>{
                    return {name:p.name,value:p.value}}),
                rows: getActualTableData(el.ref),
                ref: undefined,
                id: undefined,
                columns: el.columns.map(column => ({
                    field: column.field,
                    headerName: column.headerName
                }))
            }));
            console.log('tables:',tablesWithActualData)
            createMeasurement(tablesWithActualData);
        }
    };
    const resetTableHandle = () => {
        tables.forEach(table => {
            const gridApi = table.ref.current?.api;
            console.log('table.ref.current:',gridApi);
            if (gridApi) {
                try {
                    const emptyRows = Array(6).fill(null).map((_, index) => {
                        const emptyRow: Record<string, any> = { id: index + 1 };
                        table.columns.forEach(column => {
                            if (column.field && column.headerName !== 'Actions') {
                                emptyRow[column.field] = (column.type === 'number') ? 0 : '';
                            }
                        });
                        return emptyRow;
                    });
                    if (typeof gridApi.setRowData === 'function') {
                        gridApi.setRowData(emptyRows);
                    }
                    else if (typeof gridApi.applyTransaction === 'function') {
                        gridApi.applyTransaction({ update: emptyRows });
                    }
                    // Last resort: Directly access rowData through gridOptions
                    else {
                        console.warn('Could not find setRowData or applyTransaction methods');
                        if (table.ref.current?.gridOptions) {
                            table.ref.current.gridOptions.rowData = emptyRows;
                            gridApi.refreshCells();
                            gridApi.redrawRows();
                        }
                    }

                    // Refresh the grid
                    gridApi.refreshCells({ force: true });
                    gridApi.sizeColumnsToFit();

                } catch (error) {
                    console.error('Error resetting table:', table.name, error);
                }
            } else {
                console.warn(`Grid API not available for table: ${table.name}`);
            }
        });
        calculateTotals();
    };
    return (
        <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ maxWidth: 700, mx: "auto",mt:2 }}
        >
            <Grid item xs={12} sm={6}>
                <BlankCard sx={{ p: 2, width: "100%" }}>
                    <CalculationValues values={transformTotalValues(totalValues)} />
                </BlankCard>
            </Grid>
            <Grid item xs={12} sm={6}>
                {/*<BlankCard sx={{ p: 2, mb: 2, width: "100%" }}>
                    <Button
                        fullWidth
                        component={Link}
                        href={`/system99/calculators/ExteriorSiding/calculators?wallLength=${totalValues.length}&wallHeight=${totalValues.height}&cornerQuantity=${totalValues.corners12FeetAndUnder}`}
                        size="large"
                    >
                        SHOW CALCULATIONS
                    </Button>
                </BlankCard>*/}
                <BlankCard sx={{ p: 2, mb: 2, width: "100%" }}>
                    <Button onClick={()=>setCalculation(transformTotalValues(totalValues,true))} fullWidth size={"large"} >
                        CALCULATE
                    </Button>
                </BlankCard>
                {clientOnly && (
                    <BlankCard sx={{ p: 2, width: "100%" }}>
                        {!customerId && clientOnly ? <Alert sx={{mb:2}} severity="info">To save measurement
                            need select a customer
                            from main page</Alert>:<></>}
                        <Button
                            onClick={saveMeasurementsHandle}
                            fullWidth
                            size="large"
                            disabled={isPending || !customerId}
                        >
                            {isPending ? 'SAVING...' : 'SAVE MEASUREMENTS'}
                        </Button>
                    </BlankCard>
                )}
                {/*<Button onClick={resetTableHandle} fullWidth size={"large"} color={"error"} >
                    RESET TABLES
                </Button>*/}
            </Grid>
        </Grid>
    );
};

export default TablesSummary;