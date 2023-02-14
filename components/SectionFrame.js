import React from 'react';
import { Typography, Grid, Box, Divider } from '@mui/material';
import ShowCode from './ShowCode';

export default function SectionFrame(props) {
    console.log(props.code);
    return (
        <Box my={2} pt={1} backgroundColor="grey.300" sx={{ borderRadius: "10px" }}>
            <Typography backgroundColor="grey.300" my={0} py={2} textAlign={"center"} color={"asmoP.main"} variant="h4" gutterBottom component="div">
                <b>{props.title}</b>
            </Typography>
            <Divider />
            <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="center"
                style={{ minHeight: '40vh' }}
                backgroundColor="grey.200"
            >
                <Grid px={2} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} item sx={{ marginTop: '20px' }} xs={8}>
                    {props.content}
                </Grid>
                <Divider orientation="vertical" sx={{ mr: "-1px" }} flexItem />
                <Grid px={2} item xs={4} display="flex"
                    justifyContent="center"
                    alignItems="center">
                    {props.render}
                </Grid>
            </Grid>
            <Divider />
            <ShowCode code={props.code} />
        </Box>
    )
}