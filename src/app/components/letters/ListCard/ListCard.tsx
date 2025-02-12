import React from "react"
import { Paper, List, ListItem, Typography } from "@mui/material";
interface ListCardProps{
    rows:{field:string,value:string | number }[]
}
const ListCard:React.FC<ListCardProps> = ({ rows }) => {
    return (
        <Paper sx={{ borderRadius: 2, p: 2, width: "100%" }}>
            <List>
                {rows.map((row, index) => (
                    <ListItem
                        key={row.field}
                        divider={index !== rows.length - 1} // Adds divider except for last item
                        sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                        <Typography variant="h6">{row.field}</Typography>
                        <Typography variant="h6" fontWeight="bold">{row.value}</Typography>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default ListCard;
