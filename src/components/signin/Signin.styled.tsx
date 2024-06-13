import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

function SigninStyled () {
  return (
    <Stack component="form" sx={{width: '15vw', border: "1px solid", padding: "12px", textAlign:'center' }} spacing={2} autoComplete='off'> 
      <TextField id="admin" label="Administrator" size="small"/>
      <TextField id="password" label="Password" size="small" type='password' />
      <Button variant="contained" type="submit">Login</Button>
    </Stack>
  )
}

export default SigninStyled;