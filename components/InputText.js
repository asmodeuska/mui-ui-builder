import { React, useState } from 'react';
import { Box, Input, FormControl, InputLabel } from '@mui/material';

export default function InputText(props) {
    const [text, setText] = useState("");
    return {
        text,
        render: (
            <Box my={1}>
                <FormControl fullWidth>
                    <InputLabel color={"asmoP"}>{props.labelText}</InputLabel>
                    <Input color={"asmoP"} label={props.labelText} variant="outlined" onChange={(event) => setText(event.target.value)} />
                </FormControl>
            </Box>
        )
    };
}