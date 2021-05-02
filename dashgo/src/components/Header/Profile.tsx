import { Text, Avatar, Box, Flex } from "@chakra-ui/react";
import React from "react";

export function Profile(){
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gustavo Cauzzi</Text>
        <Text color="gray.300" fontSize="small">
          gustavocauzzi@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Gustavo Cauzzi" src="https://github.com/gustavo-cauzzi.png"/>
    </Flex>
  );
}