import { useEffect, useState } from 'react';
import ItemTable from '../ItemTable/ItemTable';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getAllTablesByType} from "@/app/apis/tablesApi";
interface Table{
  tableName:string,
  rows:any[]
}
const ItemsSection = () => {
  const [tables, setTables] = useState<Table[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchTables = async () => {
      setIsLoading(true); // Start loading
      try {
        const response=await getAllTablesByType("item");
        console.log('res:',response);
        if (Array.isArray(response)){
          setTables(response);
        }
      } catch (error) {
        console.error("Error fetching tables:", error);
      } finally {
        setIsLoading(false); // End loading
      }
    };

    fetchTables();
  }, []);
  return (
    <div>
      {isLoading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
          <CircularProgress />
        </Box>
      ) : (
        tables.map((table) => (
          <ItemTable key={table.tableName} tableName={table.tableName} rows={table.rows} />
        ))
      )}
    </div>
  );
};

export default ItemsSection;
