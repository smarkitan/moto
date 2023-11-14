import ReactApexChart from "react-apexcharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ArrowCircleUpRounded from "@mui/icons-material/ArrowCircleUpRounded";

import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";

const TotalRevenue = () => {
    return (
        <Box
            p={4}
            flex={1}
            bgcolor="#fcfcfc"
            id="chart"
            display="flex"
            flexDirection="column"
            borderRadius="15px"
        >
            <Typography fontSize={25} fontWeight={700} color="#11142D">
                OPEX YTD
            </Typography>

            <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
                <Typography fontSize={25} fontWeight={700} color="#11142d">
                € 1,2 mill.
                </Typography>
                <Stack direction="row" alignItems="center" gap={1}>
                    <ArrowCircleUpRounded
                        sx={{ fontSize: 25, color: "#475be8" }}
                    />
                    <Stack>
                        <Typography fontSize={15} color="#475be8">
                            5.8%
                        </Typography>
                        <Typography fontSize={12} color="#808191">
                            FC8+4 vs Actuals
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            <ReactApexChart
                series={TotalRevenueSeries}
                type="bar"
                height={310}
                options={TotalRevenueOptions}
            />
        </Box>
    );
};

export default TotalRevenue;