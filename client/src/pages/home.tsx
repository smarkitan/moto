import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import {hdlogo} from "../assets";

const home = () => {
  return (
    <Box>
    <Typography fontSize={25} fontWeight={700} color="#11142D">
       
    </Typography>
    <Typography fontSize={25} fontWeight={700} color="#11142d">
                My passion
                </Typography>

    <Stack
                mt="25px"
                width="100%"
                direction={{ xs: "column", lg: "row" }}
                gap={4}
            >
            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
              <div style={{ maxWidth: '200px', maxHeight: '200px' }}>
              <img src={hdlogo} alt="HD Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </div>
              </Box>
       </Stack>
    </Box>
  )
}

export default home