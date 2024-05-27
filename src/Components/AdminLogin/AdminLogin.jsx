import { useFormik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack
} from "@chakra-ui/react";
import { signInWithEmailAndPassword,  } from "firebase/auth";
import Swal from "sweetalert2";
import { auth } from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

    const navigation = useNavigate();
    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
          rememberMe: false
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            const {email, password} = values ;
            console.log(email, password);
            if(email, password){
              signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            localStorage.setItem("token", user.stsTokenManager.accessToken);
            localStorage.setItem("user", JSON.stringify(user));
            Swal.fire({
              position: "center",
              icon: "success",
              title: "LogIn Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigation("/") ;
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              position: "center",
              icon: "error",
              title: error,
              showConfirmButton: false,
              timer: 1500,
            });
          });
            }else{
              Swal.fire({
                position: "center",
                icon: "error",
                title: "email password not found",
                showConfirmButton: false,
                timer: 1500,
              });
            }
        }
    });
      return (
        <Flex bg="gray.100" align="center" justify="center" h="100vh">
          <Box bg="green.200" p={6} rounded="md">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </FormControl>
                <Checkbox
                  id="rememberMe"
                  name="rememberMe"
                  onChange={formik.handleChange}
                  isChecked={formik.values.rememberMe}
                  colorScheme="green"
                >
                  Remember me?
                </Checkbox>
                <Button type="submit" colorScheme="green" width="full">
                  Login
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
    );
};

export default AdminLogin;