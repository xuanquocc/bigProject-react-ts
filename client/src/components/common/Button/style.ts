import ButtonMaterialUI from "@mui/material/Button";
import { styled } from "@mui/material/styles";


const ButtonMui = styled(ButtonMaterialUI)(({ theme }) => ({
  width: '100%',
  display: 'inline-block',
  fontSize: '16px',
  borderRadius: '12px',
  cursor: 'pointer',
  gap: '8px',
  textAlign: 'center',
  border: 'none',
  outline: 'none',
  '&.primary': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  '&.outlined': {
    border: 1 + 'px solid ' + theme.palette.primary.main,
  },
  '&.disabled': {
   opacity : 0.5
  }
}));

export default ButtonMui
