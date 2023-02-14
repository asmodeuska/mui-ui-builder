import { React, useState, useEffect } from 'react';
import { Button, Box, Modal, Fade, Backdrop, Container, Toolbar, Typography } from '@mui/material';
import { ChromePicker } from 'react-color';
import Cookies from 'universal-cookie';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function useColorPicker() {
    const cookies = new Cookies();
    const colorWidth = "7vh";
    const colorHeight = "2vh";

    useEffect(() => {
        if (cookies.get('primaryColor') != null)
            setPrimaryColor(cookies.get('primaryColor'));
        else
            cookies.set('primaryColor', primaryColor, { path: '/' });

        if (cookies.get('secondaryColor') != null)
            setSecondaryColor(cookies.get('secondaryColor'));
        else
            cookies.set('secondaryColor', secondaryColor, { path: '/' });

        if (cookies.get('customColor') != null)
            setCustomColor(cookies.get('customColor'));
        else
            cookies.set('customColor', customColor, { path: '/' });
    }, []);

    const [primaryColor, setPrimaryColor] = useState('#e79115');
    const [secondaryColor, setSecondaryColor] = useState('#e79115');
    const [customColor, setCustomColor] = useState('#e79115');

    const [open, setOpen] = useState(false);
    const [type, setType] = useState('');
    const [color, setColor] = useState('');

    const openModal = (type) => {
        setOpen(true);
        setType(type);
    }

    const modalColorChanger = (color) => {
        setColor(color.hex);
        switch (type) {
            case 'primary':
                setPrimaryColor(color.hex);
                cookies.set('primaryColor', color.hex, { path: '/' });
                break;
            case 'secondary':
                setSecondaryColor(color.hex);
                cookies.set('secondaryColor', color.hex, { path: '/' });
                break;
            case 'custom':
                setCustomColor(color.hex);
                cookies.set('customColor', color.hex, { path: '/' });
                break;
            default:
                break;
        }
    }

    return {
        primaryColor,
        secondaryColor,
        customColor,
        render: (
            <Box my={1} back display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"flex-end"} className={"boxShadow"}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "asmoS" }}>
                    <b>Color Picker</b>
                </Typography>
                <Box p={1} pt={0} display={"flex"} justifyContent={"flex-end"} >
                    <Container fixed disableGutters sx={{ mx: 1, width: colorWidth, height: colorHeight, bgcolor: primaryColor }} onClick={() => openModal("primary")}>
                    </Container>
                    <Container fixed disableGutters sx={{ mx: 1, width: colorWidth, height: colorHeight, bgcolor: secondaryColor }} onClick={() => openModal("secondary")}>
                    </Container>
                    <Container fixed disableGutters sx={{ mx: 1, width: colorWidth, height: colorHeight, bgcolor: customColor }} onClick={() => openModal("custom")}>
                    </Container>
                </Box>
                <Box>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={() => setOpen(false)}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <Box style={style}>
                                <ChromePicker color={color} onChange={(color) => modalColorChanger(color)} />
                            </Box>
                        </Fade>
                    </Modal>
                </Box>
            </Box>


        )
    }
}