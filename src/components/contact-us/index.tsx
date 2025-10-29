import React from "react"
import { Card, CardContent, Typography, Stack, Button } from "@mui/material"
import { Message, Phone } from "@mui/icons-material"



const ContacUs = () => {
    return (
        <Card
            sx={{
                p: 4,
                mt: 2,
                border: "2px solid",
                borderColor: "grey.300",
                textAlign: "center",

            }}
        >
            <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    ¿Listo para optimizar tu cumplimiento?
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    Descubre cómo AML Meltsan® puede transformar tus procesos de cumplimiento regulatorio
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
                    <Button
                        variant="contained"
                        startIcon={<Message />}
                        size="large"
                        onClick={() => window.location.href = "mailto:info@meltsan.us"}
                    >
                        Solicitar Demo
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<Phone />}
                        size="large"
                        onClick={() => window.location.href = "tel:+52 55 5504 7801"}
                    >
                        Hablar con Experto
                    </Button>
                </Stack>
            </CardContent>
        </Card >
    )
}

export default ContacUs;
