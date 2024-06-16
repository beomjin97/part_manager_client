import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

const Footer = () => {
    return <Box
    component="footer"
    sx={{
      mt: 'auto',
      textAlign: 'center'
    }}
  >
    <Container maxWidth="sm">
      <Typography variant="body2">
        Copyright © {new Date().getFullYear()}, NPR IT
      </Typography>
    </Container>
  </Box>
}

export default Footer