import { React, useState } from 'react';

import { Grid, Tooltip, IconButton, Divider } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierPlateauDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function ShowCode(props) {

    const [display, setDisplay] = useState("none");

    return (

        <Grid container justifyContent={"flex-start"}>
            <Grid display={"inline-flex"} p={1} xs={1} item>
                {display === "none" ?
                    <Tooltip title="Show code">
                        <IconButton onClick={() => setDisplay("block")}>
                            <VisibilityIcon />
                        </IconButton>
                    </Tooltip>
                    :
                    <Tooltip title="Hide code">
                        <IconButton onClick={() => setDisplay("none")}><VisibilityOffIcon /></IconButton>
                    </Tooltip>
                }
                <Tooltip title="Copy to clipboard">
                    <IconButton onClick={() => navigator.clipboard.writeText(props.code)}><ContentCopyIcon /></IconButton>
                </Tooltip>
            </Grid>
            <Divider orientation="vertical" sx={{ mr: "-1px" }} flexItem />
            <Grid xs={11} px={2} item display={display}>
                <SyntaxHighlighter language="jsx" style={atelierPlateauDark}>
                    {props.code}
                </SyntaxHighlighter>
            </Grid>
        </Grid>
    )
}