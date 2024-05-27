import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useColorMode, Button, Box, Text } from "@chakra-ui/react";

const Home = () => {
  const navigation = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();

  const token = localStorage?.token;
  const user = localStorage?.user;
  if (token && user) {
    window.location.reload();
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
    <div>
      <h1 className="text-3xl text-center underline uppercase ">
        <Box textAlign="center" py={10} px={6}>
          <Text
            fontSize="3xl"
            className="text-3xl text-center underline uppercase"
          >
            Welcome to Home
          </Text>
          <Button onClick={toggleColorMode} mt={4}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </Box>
      </h1>
    </div>
  );
};

export default Home;
