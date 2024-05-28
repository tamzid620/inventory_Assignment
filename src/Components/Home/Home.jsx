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
import { useQuery } from "@tanstack/react-query";
import customerQuery from "../../Hooks/customerQuery";
import { GoSun } from "react-icons/go";
import { FaRegMoon } from "react-icons/fa";

const Home = () => {


  const navigation = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();

  // token section ------------------------
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

  // query section --------------------------
  // query section --------------------------
  const { data, isLoading, error } = useQuery({
    queryKey: ['customer'],
    queryFn: customerQuery
  });
  console.log(data);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center">Error loading data</p>;


  return (
    <div className="mx-10">
      
        {/* dark and light button  */}
        <div className="flex justify-between items-center mt-4 mb-10">
        <h1 className="text-lgl text-center  uppercase  bg-green-200 p-2">Inverntory Task </h1>
        <Button colorScheme="yellow" onClick={toggleColorMode} >
          {colorMode === "light" ? <FaRegMoon className=" text-white"/> : <GoSun />}
        </Button>
        </div>
        
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
                      <Th>Customer Name</Th>
                      <Th isNumeric>Price</Th>
                      <Th isNumeric>Last Modified </Th>
                      <Th isNumeric>Edit /view</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                  {data.data && data.data.map((customer, index) => (
                    <Tr key={customer.id}>
                      <Td>{index + 1}</Td>
                      <Td>{customer.id}</Td>
                      <Td>{customer?.name}</Td>
                      <Td isNumeric>{customer.price}</Td>
                      <Td isNumeric>{customer.lastModified}</Td>
                      <Td isNumeric>
                        <Button colorScheme="blue" size="sm">Edit</Button>
                        <Button colorScheme="green" size="sm" ml={2}>View</Button>
                      </Td>
                    </Tr>
                  ))}
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
