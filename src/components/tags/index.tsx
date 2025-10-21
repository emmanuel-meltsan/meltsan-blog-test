import * as React from "react"
import { PersonOutline, CalendarMonthOutlined, ScheduleOutlined } from '@mui/icons-material';
import { Grid, Chip } from "@mui/material";

type Props = {
    tags: string[];
};

const TagsChips = ({ tags }: Props) => {
    return (
        <Grid spacing={1} container direction="row" wrap="nowrap" alignItems="center" >
            {tags.map((tag, index) => (
                <Grid key={index}>
                    <Chip label={tag} variant="outlined" />
                </Grid>
            ))}
        </Grid>
    );
};

export default TagsChips;
