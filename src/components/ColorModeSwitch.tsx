import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const iconSize = 25;

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {colorMode === "dark" ? (
        <MdLightMode size={iconSize} />
      ) : (
        <MdDarkMode size={iconSize} />
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
