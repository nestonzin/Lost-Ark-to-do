import { Flex, Heading } from "@chakra-ui/react";
import type { ITask } from "./data/tasks";
import { TaskCheckboxList } from "./TaskCheckboxList";

interface IProps {
  taskList: ITask[];
  type: string;
}

export const TaskListWrapper: React.FC<IProps> = ({
  taskList,
  type,
}: IProps) => {
  return (
    <Flex direction="column">
      <Heading>{type}</Heading>
      <TaskCheckboxList tasks={taskList} type={type} />
    </Flex>
  );
};
