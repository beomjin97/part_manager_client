import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FormEventHandler, ReactNode} from 'react';
import Divider from '@mui/material/Divider';
import Footer from '../common/Footer';

interface Props {
  handleSubmit: FormEventHandler<HTMLFormElement>
  children: ReactNode
}

const SigninStyled = ({handleSubmit, children}: Props) => {
  return (
    <Stack component="form" sx={{width: '280px', backgroundColor: '#fff', border: "1px solid skyblue" ,padding: "20px", margin: "150px auto", borderRadius: "12px" }} spacing={2} autoComplete='off' onSubmit={handleSubmit}> 
      <Typography sx={{textAlign:'center', fontWeight: '700', fontSize: '24px'}}>Welcome</Typography>
      {children}
      <Button variant="contained" type="submit">Login</Button>
      <Divider />
      <Footer />
    </Stack>
  )
}

export default SigninStyled;