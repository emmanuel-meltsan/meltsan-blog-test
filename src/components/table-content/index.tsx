import * as React from "react";
import { useState, useEffect } from "react";

import { Box, Typography } from "@mui/material";

type Props = {
    tableOfContents?: string;
};

const TableOfContents = ({ tableOfContents }: Props) => {
    if (!tableOfContents) return null;


    return (
        <Box
            sx={{
                backgroundColor: "grey.50",
                borderRadius: 2,
                boxShadow: 2,
                position: "sticky",
                top: 100,
                width: "90%"
            }}
        >
            <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "text.primary", paddingTop: 2, paddingLeft: 2 }}
            >
                Contenido
            </Typography>

            <Box
                component="nav"
                dangerouslySetInnerHTML={{ __html: tableOfContents }}
                sx={{
                    scrollBehavior: "smooth",
                    "& ul": {
                        listStyle: "none",
                        padding: 2,
                    }, "& ul ul": {
                        padding: 0,
                        margin: 0,
                    },
                    "& a": {
                        textDecoration: "none",
                        color: "text.secondary",
                        "&:hover": {
                            color: "primary.main",
                        },
                    },
                }}
            />
        </Box>
    );
};

export default TableOfContents;

