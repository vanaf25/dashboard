"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import TableName from "../../../../components/letters/TableName/TableName";
import Table from "../../../../components/letters/Table/Table";
import { getAllRowsByType } from "@/app/apis/tablesApi";
import getActualRowData from "../../../../utils/getActualRowData";
import numberParser from "../../../../utils/numberParser";
import TotalCalculationsTable from "../../../../components/letters/TotalCalculationsTable/TotalCalculationsTable";
import calculateTotalAmount from "../../../../utils/calculateTotalAmount";
import { Box, TextField } from "@mui/material";
import { ColDef, GridApi } from "ag-grid-community";

// Define type for rows
interface DoorRow {
    under40incheswide: number;
    between40and78inches: number;
    over78inches: number;
    id?: string;
}

// Define type for total data
interface TotalData {
    doorUnder40Inches: [number, number, number];
    doorBetween40And78Inches: [number, number, number];
    doorOver78Inches: [number, number, number];
    garageDoors: [number, number, number];
    doorBoardCount: [number, number, number];
}

const Doors = () => {
    const [garageDoorsValue, setGarageDoorsValue] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<any[]>([]);
    const [totalData, setTotalData] = useState<TotalData | null>(null);

    // Typing for the ref as an ag-Grid API
    const ref = useRef<GridApi | null>(null);

    const calculateTotalDoorData = useCallback(() => {
        if (data.length && ref.current) {
            // Calculate sums of each column
            const sumOfAllFirstColumn = calculateTotalAmount(ref, "under40incheswide");
            const sumOfAllSecondColumn = calculateTotalAmount(ref, "between40and78inches");
            const sumOfAllThirdColumn = calculateTotalAmount(ref, "over78inches");

            // Calculations for each category
            const doorUnder40Inches: [number, number, number] = [
                sumOfAllFirstColumn,
                208,
                sumOfAllFirstColumn * 208,
            ];
            const doorBetween40And78Inches: [number, number, number] = [
                sumOfAllSecondColumn,
                246,
                sumOfAllSecondColumn * 246,
            ];
            const doorOver78Inches: [number, number, number] = [
                sumOfAllThirdColumn,
                274,
                sumOfAllThirdColumn * 274,
            ];
            const garageDoors: [number, number, number] = [
                garageDoorsValue,
                400,
                garageDoorsValue * 400,
            ];

            // Door board count calculations
            const totalDoorsSum =
                sumOfAllFirstColumn + sumOfAllSecondColumn + sumOfAllThirdColumn + garageDoorsValue;
            const doorBoardCount: [number, number, number] = [
                totalDoorsSum,
                totalDoorsSum / 144,
                Math.ceil(totalDoorsSum / 144),
            ];

            // Set calculated totals
            setTotalData({
                doorUnder40Inches,
                doorBetween40And78Inches,
                doorOver78Inches,
                garageDoors,
                doorBoardCount,
            });
        }
    }, [data, garageDoorsValue]);

    useEffect(() => {
        if (data.length) calculateTotalDoorData();
    }, [data]);

    useEffect(() => {
        const func = async () => {
            setIsLoading(true);
            const res = await getAllRowsByType("doors");
            console.log("res:", res);
            if (Array.isArray(res)) setData(res);
            setIsLoading(false);
        };
        func();
    }, []);

    const onCellValueChanged = useCallback(
        async (params: { api: GridApi; node: any; data: DoorRow }) => {
            await getActualRowData(params.api, params.node.rowIndex, params.data.id || "");
            calculateTotalDoorData();
        },
        [calculateTotalDoorData]
    );

    const columns: ColDef[] = useMemo(
        () => [
            {
                headerName: "Under 40 inches wide",
                cellDataType: "number",
                cellEditor: "agNumberCellEditor",
                field: "under40incheswide",
                valueParser: numberParser,
                editable: true,
                flex: 1,
            },
            {
                headerName: 'Between 40" and 78 inches',
                cellDataType: "number",
                valueParser: numberParser,
                cellEditor: "agNumberCellEditor",
                field: "between40and78inches",
                editable: true,
                flex: 1,
            },
            {
                headerName: "Over 78 inches",
                cellDataType: "number",
                valueParser: numberParser,
                cellEditor: "agNumberCellEditor",
                field: "over78inches",
                editable: true,
                flex: 1,
            },
        ],
        []
    );

    const totalDoorData = useMemo(() => {
        return totalData
            ? [
                { label: "Door Under 40 Inches Wide (0)", value: totalData.doorUnder40Inches[0] },
                { label: "Door Under 40 Inches Wide (1)", value: totalData.doorUnder40Inches[1] },
                { label: "Door Under 40 Inches Wide (2)", value: totalData.doorUnder40Inches[2] },

                { label: 'Door Between 40" and 78 Inches (0)', value: totalData.doorBetween40And78Inches[0] },
                { label: 'Door Between 40" and 78 Inches (1)', value: totalData.doorBetween40And78Inches[1] },
                { label: 'Door Between 40" and 78 Inches (2)', value: totalData.doorBetween40And78Inches[2] },

                { label: "Door Over 78 Inches (0)", value: totalData.doorOver78Inches[0] },
                { label: "Door Over 78 Inches (1)", value: totalData.doorOver78Inches[1] },
                { label: "Door Over 78 Inches (2)", value: totalData.doorOver78Inches[2] },

                { label: "Garage Doors (0)", value: totalData.garageDoors[0] },
                { label: "Garage Doors (1)", value: totalData.garageDoors[1] },
                { label: "Garage Doors (2)", value: totalData.garageDoors[2] },

                { label: "Door Board Count (0)", value: totalData.doorBoardCount[0] },
                { label: "Door Board Count (1)", value: totalData.doorBoardCount[1] },
                { label: "Door Board Count (2)", value: totalData.doorBoardCount[2] },
            ]
            : [];
    }, [totalData]);

    const onGarageDoorsValueChanged = () => {
        calculateTotalDoorData();
    };

    return (
        <div>
            <TableName>Doors</TableName>
            <Table
                customRef={ref}
                onCellValueChanged={onCellValueChanged}
                columns={columns}
                rows={data}
            />
            {totalData && <TotalCalculationsTable tableName={"Door math"} rowData={totalDoorData} />}
            <Box>
                <TextField
                    label={"Enter a garage doors"}
                    onChange={(e) => setGarageDoorsValue(Number(e.target.value))}
                    value={garageDoorsValue}
                    onBlur={onGarageDoorsValueChanged}
                />
            </Box>
        </div>
    );
};

export default Doors;
