import { Flex } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useMemo } from "react";
import { ICurrentItem } from "../../pages/price";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Preço semanal",
    },
  },
};
export const Graphic: React.FC<ICurrentItem> = (prop: ICurrentItem) => {
  const initialData = {
    datasets: [],
    labels: [""],
  };
  const data = useMemo(() => {
    if (prop.currentItem)
      return {
        labels: Object.keys(prop.currentItem.shortHistoric),
        datasets: [
          {
            fill: true,
            label: "Preço",
            data: Object.values(prop.currentItem.shortHistoric),
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      };
  }, [prop.currentItem]);

  console.log(prop.currentItem, "items");
  return (
    <Flex>
      {prop.currentItem && (
        <Line options={options} data={data ?? initialData} />
      )}
    </Flex>
  );
};
