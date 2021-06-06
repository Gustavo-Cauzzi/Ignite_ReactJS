import { Text, Avatar, Box, Flex } from "@chakra-ui/react";
import React from "react";

interface IProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: IProfileProps){
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gustavo Cauzzi</Text>
          <Text color="gray.300" fontSize="small">
            gustavocauzzi@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Gustavo Cauzzi" src="https://github.com/gustavo-cauzzi.png"/>
    </Flex>
  );
}
