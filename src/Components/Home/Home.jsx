import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useColorMode,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex
} from "@chakra-ui/react";

const Home = () => {
  const navigation = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();

  const token = localStorage?.token;
  const user = localStorage?.user;
  if (token && user) {
    ("");
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "You Need to Login First",
      showConfirmButton: false,
      timer: 1500,
    });
    navigation("/login");
  }

  return (
    <div className="mx-10">
      <h1 className="text-3xl text-center  uppercase ">
        {/* dark and light button  */}
        <Button onClick={toggleColorMode} mt={4}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
        </h1>
        {/* Tab section  */}
        <Tabs variant="unstyled">
        <Flex mb={10} justifyContent="space-between">
          <TabList>
            <Tab _selected={{ color: "white", bg: "blue.500" }}>
              Active Sale Orders
            </Tab>
            <Tab _selected={{ color: "white", bg: "green.400" }}>
              Completed Sale Orders
            </Tab>
          </TabList>
          <Button colorScheme='green'>+ Sale Order</Button>
          </Flex>
          <TabPanels>
            {/* TabPanel 1  */}
            <TabPanel>
              <TableContainer>
                <Table variant="simple">
                  <TableCaption>
                    Imperial to metric conversion factors
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Index</Th>
                      <Th>Id</Th>
                      <Th>Customer Name</Th>
                      <Th isNumeric>Price</Th>
                      <Th isNumeric>Last Modified </Th>
                      <Th isNumeric>Edit /view</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td></Td>
                      <Td></Td>
                      <Td></Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            {/* TabPanel -2  */}
            <TabPanel>
              <TableContainer>
                <Table variant="simple">
                  <TableCaption>
                    Imperial to metric conversion factors
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>To convert</Th>
                      <Th>into</Th>
                      <Th isNumeric>multiply by</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>feet</Td>
                      <Td>centimetres (cm)</Td>
                      <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                      <Td>yards</Td>
                      <Td>metres (m)</Td>
                      <Td isNumeric>0.91444</Td>
                    </Tr>
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th>To convert</Th>
                      <Th>into</Th>
                      <Th isNumeric>multiply by</Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>

    </div>
  );
};

export default Home;
