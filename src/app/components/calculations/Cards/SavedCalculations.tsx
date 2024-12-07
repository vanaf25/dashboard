import React, { useEffect, useState } from 'react';
import Card, {CardProps} from "./Card/Card";
import { Typography } from "@mui/material";

const SavedCalculations: React.FC = () => {
    const [cards, setCards] = useState<CardProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(process.env.NEXT_PUBLIC_BASE_URL ?? '')
            .then((res) => res.json())
            .then((res) => {
                console.log('res:', res);
                setCards(res);
                setIsLoading(false);
            })
            .catch(() => console.log('Error: Failed to fetch data'));
    }, []);

    return (
        <div>
            {isLoading ? (
                <Typography variant={"h4"} sx={{ color: "#fff" }}>
                    Loading...
                </Typography>
            ) : (
                cards.map((card) => <Card key={card._id} {...card} />)
            )}
        </div>
    );
};

export default SavedCalculations;
