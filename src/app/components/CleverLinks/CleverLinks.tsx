"use client";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Paper } from "@mui/material";
import Link from "next/link";

const CleverLinks: React.FC<{ links: string[] }> = ({ links }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Конвертируем GET параметры обратно в строку (если они есть)
    const queryString = searchParams.toString();
    const querySuffix = queryString ? `?${queryString}` : "";

    return (
        <>
            {links.map(el => {
                const sanitizedLink = el
                    ?.split(" ") // Разбиваем по пробелам
                    .map(word => word.replace(/\b\w/g, char => char.toUpperCase()))
                    .join("")
                    .replace(/[\?']/g, "");
                return (
                    <Paper
                        sx={{ p: 2, width: "80%", margin: "0 auto 10px", fontSize: 25, textAlign: "center" }}
                        key={sanitizedLink}
                    >
                        <Link href={`${pathname}/${sanitizedLink}${querySuffix}`} passHref>
                            {el}
                        </Link>
                    </Paper>
                );
            })}
        </>
    );
};

export default CleverLinks;
