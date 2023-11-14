
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
        OPEX MTD 
    </Typography>
    <Typography fontSize={25} fontWeight={700} color="#11142d">
                € 180 k
                </Typography>
    <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <PieChart
                    title="Rent (€)"
                    value={62000}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Maintenance (€)"
                    value={35000}
                    series={[60, 40]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Cleaning (€)"
                    value={28000}
                    series={[51, 49]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Electricity (€)"
                    value={53000}
                    series={[45, 55]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                                <PieChart
                    title="Other (€)"
                    value={2000}
                    series={[25, 75]}
                    colors={["#275be8", "#c4e8ef"]}
                />
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