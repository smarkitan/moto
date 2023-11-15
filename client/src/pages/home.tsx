import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


import {hdlogo} from "../assets";

const home = () => {
  return (
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', minHeight: '100vh' }}>
            <Typography fontSize={25} fontWeight={700} color="#11142d" style={{ textAlign: 'center' }}>
                My passion
            </Typography>

            <Box mt="25px">
                <img src={hdlogo} alt="HD Logo" style={{ maxWidth: '200px', maxHeight: '200px' }} />
            </Box>
        </div>
  )
}

export default home