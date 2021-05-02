import React from "react";
import { Box, Heading, Text, Button, Checkbox, Flex, Icon, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";

export default function UserList(){
  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        px="6"
      >
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          bgColor="gray.800"
          p="8"
        >
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Button 
              as="a"
              size="sm"
              fontSize="small"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
            >
              Criar Usuário
            </Button>
          </Flex>          
        
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gustavo Cauzzi</Text>
                    <Text fontSize="small" color="gray.300">gustavocauzzi@gmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  13/04/2021
                </Td>
                <Td>
                  <Button 
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}