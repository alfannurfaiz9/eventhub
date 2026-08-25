import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { color } from "chart.js/helpers";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const labels = ["Mar", "Apr", "May", "Jun", "Jul", "Aug"];
const value = [21, 38, 34, 56, 29, 48];

const data = {
  labels,
  datasets: [
    {
      label: "# of Votes",
      data: value,
      backgroundColor: "#ff5f22",
      borderRadius: 7,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const OrganizerChart = () => {
  return <Bar data={data} options={options} />;
};

export default OrganizerChart;
