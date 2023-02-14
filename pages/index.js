import SectionFrame from '../components/SectionFrame';
import ButtonUI from '../components/ButtonUI';
import SelectUI from '../components/SelectUI';
import { Container, createTheme, ThemeProvider, Typography } from '@mui/material';
import TopBar from '../components/TopBar';

export default function Home() {
	const { primaryColor, secondaryColor, customColor, render } = TopBar();
	const { buttonRender, buttonShowcase, buttonCode} = ButtonUI();
	const { selectRender, selectShowcase, selectCode } = SelectUI();
	const theme = createTheme({
		palette: {
			primary: {
				main: primaryColor,
			},
			secondary: {
				main: secondaryColor,
			},
			custom: {
				main: customColor,
			},
			asmoP: {
				main: '#e79115',
			},
			asmoS: {
				main: '#2D2928',
			}
		},
	})
	return (
		<ThemeProvider theme={theme}>
			{render}
			<Container>
				<SectionFrame title={"Button"} content={buttonRender} render={buttonShowcase} code={buttonCode}/>
				<SectionFrame title={"Select"} content={selectRender} render={selectShowcase} code={selectCode}/>
			</Container>
		</ThemeProvider>
	)
}
