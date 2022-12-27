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
import { useMemo, useState } from "react";
import type { IItems } from "../../pages/price";

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
export const Graphic = () => {
  const [Items, setItems] = useState<IItems[]>([]);
  const [currentItem, setCurrentItem] = useState<IItems>();

  const initialData = {
    datasets: [],
    labels: [""],
  };
  const data = useMemo(() => {
    if (currentItem)
      return {
        labels: Object.keys(currentItem.shortHistoric),
        datasets: [
          {
            fill: true,
            label: "Preço",
            data: Object.values(currentItem.shortHistoric),
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      };
  }, [currentItem]);

  console.log(currentItem, "items");
  return (
    <Flex>
      {currentItem && <Line options={options} data={data ?? initialData} />}
    </Flex>
  );
};
