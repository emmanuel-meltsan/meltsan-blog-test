import * as React from "react";
import { Box, Container, Typography } from "@mui/material";

const Banner = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: 250,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#004e89"
            }}
        >
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h3" sx={{ color: "white", fontWeight: "bold" }}>
                    Centro de Conocimiento
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "white", mt: 1 }}>
                    Análisis experto, guías prácticas y tendencias en cumplimiento regulatorio AML/PLD
                </Typography>
            </Container>
        </Box>
    );
};
export default Banner;