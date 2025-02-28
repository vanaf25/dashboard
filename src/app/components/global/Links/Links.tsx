"use client";
import React from "react";
import { Paper } from '@mui/material';
import Link from 'next/link';
interface LinksProps {
  links: string[];
  to: string;
}

const Links: React.FC<LinksProps> = ({ links, to }) => {
  return (
      <div>
        {links.map(el => {
          return (
              <Paper
                  sx={{ p: 2, width: "80%", margin: "0 auto 10px", fontSize: 25, textAlign: "center" }}
                  key={el}
              >
                <Link href={`/${to}/${el?.replace(/[\s?'’]/g, '')}`} passHref>
                  {el}
                </Link>
              </Paper>
          );
        })}
      </div>
  );
};
export default Links;
