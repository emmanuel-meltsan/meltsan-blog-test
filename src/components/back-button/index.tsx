import * as React from "react"
import { Link } from "gatsby";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
    return (
        <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            component={Link}
            to="/"
            sx={{
                backgroundColor: "white",
                color: "black",
                "&:hover": { backgroundColor: "grey.100" },
            }}
        >
            Volver al Inicio
        </Button>
    );
};

export default BackButton;

