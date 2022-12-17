import { Flex } from "@chakra-ui/react";
import tasks from "./data/tasks";
import { TaskListWrapper } from "./TaskListWrapper";

const taskData = [
  {
    type: "Dailies",
    list: tasks.dailies,
  },
  {
    type: "Weeklies",
    list: tasks.weeklies,
  },
];

export const Tasks = () => {
  return (
    <Flex flexDirection={"column"} p="3rem" gap="5rem">
      {taskData.map(({ type, list }) => (
        <TaskListWrapper key={type} type={type} taskList={list} />
      ))}
    </Flex>
  );
};
