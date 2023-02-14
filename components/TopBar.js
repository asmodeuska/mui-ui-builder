import { React, useState } from 'react'
import { Toolbar, Typography, Button, IconButton, Box, AppBar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import useColorPicker from './ColorPicker';
export default function TopBar() {
    const { primaryColor, secondaryColor, customColor, render } = useColorPicker();
    return {
        primaryColor,
        secondaryColor,
        customColor,
        render: (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar color='asmoP' position="static">
                    <Toolbar>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            <b>MUI Builder</b>
                        </Typography>
                        {render}
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
}
