import { React, useState } from 'react';
import { Box, Container, FormLabel, Input, Divider, Switch, Button, Typography, Select, Radio, RadioGroup, FormGroup, FormControlLabel, MenuItem, Grid, FormControl, InputLabel } from '@mui/material';
import ShowCode from './ShowCode';

export default function ButtonUI(props) {

    const [color, setColor] = useState("primary");
    const [component, setComponent] = useState('button');
    const [variant, setVariant] = useState('contained');
    const [isDisabled, setIsDisabled] = useState(false);
    const [href, setHref] = useState('');
    const [text, setText] = useState('Button');
    const [size, setSize] = useState('medium');
    const [startIcon, setStartIcon] = useState('');
    const [endIcon, setEndIcon] = useState('');
    const [fullWidth, setFullWidth] = useState(false);
    const buttonCode = `<Button variant="${variant}" color="${color}" size="${size}" disabled="${isDisabled}" component="${component}" fullWidth="${fullWidth}"> `+text+` </Button>`;

    return {
        buttonRender: (
            <Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} my={1}>
                    <FormControl display={"flex"} alignItems={"center"} justifyContent={"center"} fullWidth>
                        <InputLabel color={"asmoP"} id="component-label">Button text</InputLabel>
                        <Input color={"asmoP"} id="outlined-basic" label="Button Text" variant="outlined" onChange={(event) => setText(event.target.value)} />
                    </FormControl>
                </Box>

                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} my={1}>
                    <FormControl display={"flex"} alignItems={"center"} justifyContent={"center"} fullWidth>
                        <FormLabel >Variant</FormLabel>
                        <RadioGroup row defaultValue="contained" onChange={(event) => setVariant(event.target.value)}>
                            <FormControlLabel value="contained" control={<Radio color={"asmoP"} />} label="Contained" />
                            <FormControlLabel value="outlined" control={<Radio color={"asmoP"} />} label="Outlined" />
                            <FormControlLabel value="text" control={<Radio color={"asmoP"} />} label="Text" />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} my={1}>
                    <FormControl display={"flex"} alignItems={"center"} justifyContent={"center"} fullWidth>
                        <FormLabel >Size</FormLabel>
                        <RadioGroup row defaultValue="medium" onChange={(event) => setSize(event.target.value)}>
                            <FormControlLabel value="small" control={<Radio color={"asmoP"} />} label="Small" />
                            <FormControlLabel value="medium" control={<Radio color={"asmoP"} />} label="Medium" />
                            <FormControlLabel value="large" control={<Radio color={"asmoP"} />} label="Large" />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} my={1}>
                    <FormGroup display={"flex"} alignItems={"center"} justifyContent={"center"} row>
                        <FormControlLabel control={<Switch color={"asmoP"} onChange={(event) => setIsDisabled(event.target.checked)} />} label="Disabled?" />
                        <FormControlLabel control={<Switch color={"asmoP"} onChange={(event) => setFullWidth(event.target.checked)} />} label="Full width?" />
                    </FormGroup>
                </Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} my={1}>
                    <FormControl>
                        <InputLabel id="color-label">Color</InputLabel>
                        <Select
                            defaultValue={"primary"}
                            label="Color"
                            onChange={(event) => setColor(event.target.value)}
                        >
                            <MenuItem value="primary"> <Box component={"span"} sx={{ color: "primary.main" }}> &#9632;</Box> Primary</MenuItem >
                            <MenuItem value="secondary"> <Box component={"span"} sx={{ color: "secondary.main" }}> &#9632; </Box> Secondary</MenuItem >
                            <MenuItem value="custom"> <Box component={"span"} sx={{ color: "custom.main" }}> &#9632; </Box> Custom</MenuItem >
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        ),
        buttonShowcase: (
            <Button variant={variant} color={color} size={size} disabled={isDisabled} component={component} fullWidth={fullWidth}>
                {text}
            </Button>
        ),
        buttonCode
    };
}