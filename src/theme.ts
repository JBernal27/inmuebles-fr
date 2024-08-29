import {
	experimental_extendTheme as materialExtendTheme,
  } from '@mui/material/styles';
  import { extendTheme as joyExtendTheme } from '@mui/joy/styles';
  
  // Define the structure for the theme options including color schemes
  declare module '@mui/material/styles' {
		interface Theme {
			colorSchemes: {
			light: ThemeOptions;
			dark: ThemeOptions;
			};
		}
		interface ThemeOptions {
			colorSchemes?: {
			light: ThemeOptions;
			dark: ThemeOptions;
			};
		}
  }
  
const materialTheme = materialExtendTheme(
		{
			colorSchemes: {
				light: {
				palette: {
					primary: {
					main: "#243a69",
					},
					secondary: {
					main: "#000",
					},
					success: {
					main: "#13cd4a",
					},
					warning: {
					main: "#ffab07",
					},
					error: {
					main: "#fc1a1a",
					},
					background: {
					paper: "#d4cdc5",
					default: "#ededed",
					},
				},
				}
			},
			typography: {
				fontFamily: ["Yaldevi", "sans-serif"].join(","),
				h1: {
					fontFamily: "Yaldevi",
					fontWeight: 700,
					fontSize: "60px",
					lineHeight: 1.5,
				},
				h2: {
					fontFamily: "Yaldevi",
					fontWeight: 700,
					fontSize: "42px",
					lineHeight: 1.5,
				},
				h3: {
					fontFamily: "Yaldevi",
					fontWeight: 700,
					fontSize: "35px",
					lineHeight: 1.5,
				},
				subtitle1: {
					fontFamily: "Yaldevi",
					fontWeight: 400,
					fontSize: "18px",
					lineHeight: 1.5,
				},
				subtitle2: {
					fontFamily: "Yaldevi",
					fontWeight: 400,
					fontSize: "16px",
					lineHeight: 1.5,
				},
				body1: {
					fontFamily: "Yaldevi",
					fontWeight: 400,
					fontSize: "14px",
					lineHeight: 1.5,
				},
				body2: {
					fontFamily: "Yaldevi",
					fontWeight: 400,
					fontSize: "12px",
					lineHeight: 1.5,
				},
			},
			components: {
				MuiTextField: {
					styleOverrides: {
						root: {
							borderRadius: "10px",
							borderWidth: "2px",
							borderColor: "#302E49",
							size: "small",
							"& label.Mui-focused": {
								color: "#302E49",
							},
							"& .MuiInput-underline:after": {
								borderBottomColor: "#B2BAC2",
							},
							"& .MuiInputBase-formControl-root":{ 
								borderColor: "#E0E3E7",
							},
							"& .MuiOutlinedInput-root": {
								"& fieldset": {
									borderColor: "#E0E3E7",
								},
								"&:hover fieldset": {
									borderColor: "#B2BAC2",
								},
								"&.Mui-focused fieldset": {
									borderColor: "#302E49",
								},
							},
						},
					},
				},
				MuiSelect: {
					styleOverrides: {
						root: {
							color: "#302E49",
							"& fieldset": {
								borderColor: "#E0E3E7",
							},
							"&:hover fieldset": {
								borderColor: "#B2BAC2",
							},
							"&.Mui-focused fieldset": {
								borderColor: "#302E49",
							},
						},
					},
				},
				MuiSnackbarContent: {
					styleOverrides: {
						root: {
							'&.notistack-MuiContent-success': {
								backgroundColor: '#4caf50', // Color para el éxito
							},
							'&.notistack-MuiContent-error': {
								backgroundColor: '#f49110', // Color para el error
							},
							'&.notistack-MuiContent-info': {
								backgroundColor: '#2196f3', // Color para la información
							},
							'&.notistack-MuiContent-warning': {
								backgroundColor: '#ff9800', // Color para la advertencia
							},
						},
					},
				},
				MuiOutlinedInput: {	
					styleOverrides: {
						root: {
							color: "#302E49",
							"& fieldset": {
								borderColor: "#E0E3E7",
							},
							"&:hover fieldset": {
								borderColor: "#B2BAC2",
							},
							"&.Mui-focused fieldset": {
								borderColor: "#302E49",
							},
						}
					}
				}
			},
		}
	);
  
  const joyTheme = joyExtendTheme(
		{
			colorSchemes: {
				light: {
					palette: {
						primary: {
							500: "#243a69"
						},
						neutral: {
							500: "#000"
						},
						success: {
							500: "#13cd4a",
						},
						warning: {
							500: "#ffab07",
						},
						danger: {
							500: "#fc1a1a",
						},
						background: {
							body : "#d4cdc5",
						}
					},
				},
			},
		}
	);

  
  export { materialTheme, joyTheme };
  

