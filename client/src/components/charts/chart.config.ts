import { ApexOptions } from 'apexcharts';

export const TotalRevenueSeries = [
  {
    name: 'Forecast',
    data: [95, 84, 72, 44, 108, 108, 47, 137],
  },
  {
    name: 'Actuals',
    data: [83, 124, 115, 85, 143, 143, 96, 112],
  },
];

export const TotalRevenueOptions: ApexOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: ['#475BE8', '#CFC8FF'],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: '55%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ['transparent'],
    width: 4,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  },
  yaxis: {
    title: {
      text: '€ (thsnd.)',
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return `€ ${val} thsnd.`;
      },
    },
  },
};