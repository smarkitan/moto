
import { useList } from "@refinedev/core";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
} from "components";


const home = () => {
  return (
    <Box>
    <Typography fontSize={25} fontWeight={700} color="#11142D">
       
    </Typography>
    <Typography fontSize={25} fontWeight={700} color="#11142d">
                My hobby.
                </Typography>
    <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>

    </Box>
    <Stack
                mt="25px"
                width="100%"
                direction={{ xs: "column", lg: "row" }}
                gap={4}
            >
                <TotalRevenue />
                <PropertyReferrals />
            </Stack>
    </Box>
  )
}

export default home