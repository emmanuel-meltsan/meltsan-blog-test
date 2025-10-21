import React from "react";
import { Box } from "@mui/material";

type Props = {
    path: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
};

const Image = ({ path, alt = "Imagen", width = 520, height = 520 }: Props) => {

    return (
        <Box>
            <img src={path} alt={alt} width={width} height={height} />
        </Box>

    )

}

export default Image;
