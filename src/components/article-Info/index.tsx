import * as React from "react"
import { Box, Chip, Grid, Typography } from '@mui/material'
import { PersonOutline, CalendarMonthOutlined, ScheduleOutlined } from '@mui/icons-material';

type Props = {
    author: string;
    postDate: string;

    readingTime: number;

};

const ArticleInfo = ({ author, postDate, readingTime }: Props) => {

    return (
        <Grid container spacing={1} alignItems="center">

            <PersonOutline />
            <Typography variant="caption" fontWeight="bold">
                {author}
            </Typography>
            <CalendarMonthOutlined />
            <Typography variant="caption">{postDate}</Typography>
            <ScheduleOutlined />
            <Typography variant="caption">{readingTime} min</Typography>
        </Grid>

    );
}

export default ArticleInfo;