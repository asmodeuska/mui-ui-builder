import { React, useState } from 'react';
import { Box, FormLabel, Input, Switch, Select, Radio, RadioGroup, FormGroup, FormControlLabel, MenuItem, FormControl, InputLabel } from '@mui/material';

export default function SelectUI(props) {

    const [color, setColor] = useState("primary");
    const [component, setComponent] = useState('button');
    const [variant, setVariant] = useState('filled');
    const [isDisabled, setIsDisabled] = useState(false);
    const [isReadOnly, setIsReadOnly] = useState(false);
    const [text, setText] = useState('Button');
    const [size, setSize] = useState('medium');
    const [isRequired, setIsRequired] = useState(false);
    const [isAutoWidth, setIsAutoWidth] = useState(false);
    const [fullWidth, setFullWidth] = useState(false);
    const [options, setOptions] = useState([]);
    const [defaultValue, setDefaultValue] = useState('');
    const selectCode = 
`<FormControl variant="${variant}" required="${isRequired}"> 
    <Select defaultValue="${defaultValue}" color="${color}" size="${size}" readOnly="${isReadOnly}" disabled="${isDisabled}" fullWidth="${fullWidth}" autoWidth="${isAutoWidth}"> 
        {options.map((option, index) => { 
            return <MenuItem key={index} value={option}>{option}</MenuItem> 
        })} 
    </Select> 
</FormControl>`

    return {
        selectRender: (
            < Box >
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} my={1}>
                    <FormControl>
                        <InputLabel color={"asmoP"}>Options</InputLabel>
                        <Input color={"asmoP"} id="outlined-basic" placeholder='split by comma' label="Options" variant="outlined" onKeyUp={(event) => setOptions(event.target.value.split(','))} />
                    </FormControl>
                </Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} my={1}>
                    <FormControl>
                        <FormLabel >Variant</FormLabel>
                        <RadioGroup row defaultValue="filled" onChange={(event) => setVariant(event.target.value)}>
                            <FormControlLabel value="filled" control={<Radio color={"asmoP"} />} label="Filled" />
                            <FormControlLabel value="standard" control={<Radio color={"asmoP"} />} label="Standard" />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} my={1}>
                    <FormControl display={"flex"} alignItems={"center"} justifyContent={"center"}>
                        <FormLabel >Size</FormLabel>
                        <RadioGroup row defaultValue="medium" onChange={(event) => setSize(event.target.value)}>
                            <FormControlLabel value="small" control={<Radio color={"asmoP"} />} label="Small" />
                            <FormControlLabel value="medium" control={<Radio color={"asmoP"} />} label="Medium" />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} my={1}>
                    <FormGroup fullWidth row>
                        <FormControlLabel control={<Switch color={"asmoP"} onChange={(event) => setIsDisabled(event.target.checked)} />} label="Disabled?" />
                        <FormControlLabel control={<Switch color={"asmoP"} onChange={(event) => setFullWidth(event.target.checked)} />} label="Full width?" />
                        <FormControlLabel control={<Switch color={"asmoP"} onChange={(event) => setIsRequired(event.target.checked)} />} label="Required?" />
                    </FormGroup>
                </Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} my={1}>
                    <FormGroup fullWidth row>
                        <FormControlLabel control={<Switch color={"asmoP"} onChange={(event) => setIsReadOnly(event.target.checked)} />} label="Read only?" />
                        <FormControlLabel control={<Switch color={"asmoP"} onChange={(event) => setIsAutoWidth(event.target.checked)} />} label="Auto width?" />
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
            </Box >
        ),
        selectShowcase: (
            < FormControl variant={variant} required={isRequired} >
                <Select defaultValue={defaultValue} color={color} size={size} readOnly={isReadOnly} disabled={isDisabled} fullWidth={fullWidth} autoWidth={isAutoWidth}>
                    {options.map((option, index) => {
                        return <MenuItem key={index} value={option}>{option}</MenuItem>
                    })}
                </Select>
            </FormControl >
        ),
        selectCode

    }
}