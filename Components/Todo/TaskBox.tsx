import {
  WrapItem,
  Flex,
  Image,
  Text,
  Checkbox,
  CheckboxGroup,
  useCheckbox,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import type { ITask } from "./data/tasks";

export const TaskBox: React.FC<ITask> = ({ title, icon }: ITask) => {
  const { colorMode } = useColorMode();
  const checkboxId = `${title
    .toLocaleLowerCase()
    .split(" ")
    .join("-")}-checkbox`;
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const isChecked = localStorage.getItem(checkboxId) === "true";
    setChecked(isChecked);
  }, [checkboxId, setChecked]);
  const { getCheckboxProps } = useCheckbox();
  const toggleChecked = () => setChecked((val) => !val);
  const onClick = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem(checkboxId, `${!checked}`);
    }
    toggleChecked();
  };
  return (
    <WrapItem aria-label="Task" p="1rem">
      <Flex
        p={2}
        w="max-content"
        alignItems={"center"}
        borderRadius={8}
        opacity={checked ? "45%" : "100%"}
        cursor="pointer"
        onClick={onClick}
        {...getCheckboxProps()}
      >
        <CheckboxGroup colorScheme="yellow">
          <Checkbox
            isChecked={checked}
            id={checkboxId}
            pr="2px"
            onChange={onClick}
          />
        </CheckboxGroup>
        <Image src={icon} width="16px" height="16px" pr="4px" />
        <Text
          tabIndex={0}
          mr={2}
          fontSize="xs"
          fontWeight="semibold"
          textDecoration={checked ? "line-through" : "none"}
        >
          {title}
        </Text>
      </Flex>
    </WrapItem>
  );
};
