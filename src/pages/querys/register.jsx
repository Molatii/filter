/* eslint-disable react/jsx-filename-extension */
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Heading,
  FormHelperText,
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { registerUser } from "../../redux/reduxSlices/auth";
import { clearMessage } from "../../redux/reduxSlices/message";

function SignUpForm() {
  const message = useSelector((mystate) => mystate.message.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (mydata, e) => {
    e?.preventDefault();
    setLoading(true);
    // eslint-disable-next-line prefer-destructuring
    const username = mydata.username;
    // eslint-disable-next-line prefer-destructuring
    const password = mydata.password;

    dispatch(registerUser(username, password));
    reset();
    setLoading(false);
  });

  return (
    <Flex mt="-50px" minH="100vh" align="center" justify="center">
      <Stack
        bg="gray.200"
        rounded={6}
        spacing={4}
        w="90%"
        maxW="sm"
        boxShadow="lg"
        mt={{ base: "20%", md: "9%" }}
        pb={{ base: "2%", md: "3%" }}
        pt={{ base: "1%", md: "2%" }}
        p={{ base: "2", md: "4" }}
        my={12}
      >
        <form onSubmit={onSubmit}>
          <Heading
            color="orange.400"
            textAlign="center"
            fontFamily="sans-serif"
            fontWeight="bold"
            fontSize={{ base: "3xl", md: "4xl" }}
            pt={{ base: "1%", md: "1%" }}
          >
            Register
          </Heading>
          <FormControl>
            <FormHelperText
              pb={{ base: "5%", md: "5%" }}
              textAlign="center"
              fontFamily="sans-serif"
              fontWeight="semi-bold"
              color="red"
            >
              {message}
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>UserName</FormLabel>
            <Input
              type="text"
              id="username"
              placeholder="UserName"
              {...register("username", { required: true })}
            />
            <FormHelperText color="red">
              {errors.username?.type === "required" && "Username is required"}
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              aria-describedby="password-helper-text"
              {...register("password", {
                required: true,
              })}
            />
            <FormHelperText color="red">
              {errors.password?.type === "required" && "Password is required"}
            </FormHelperText>
          </FormControl>
          <FormControl>
            <Button
              size={{ base: "md", md: "md" }}
              w="full"
              mt="5%"
              colorScheme="white"
              color="white"
              type="submit"
              bg="orange.400"
              _hover={{ bg: "teal", color: "white" }}
              variant="ghost"
              isLoading={loading}
              loadingText="Creating Account"
            >
              Register
            </Button>

            <Link to="/login">
              <Button
                size={{ base: "md", md: "md" }}
                w="full"
                mt="5%"
                colorScheme="white"
                color="gray.900"
                bg="#CBD5E0"
                _hover={{ bg: "#CBD5E0", color: "#FF5F0F" }}
                variant="ghost"
                type="submit"
              >
                Login
              </Button>
            </Link>
          </FormControl>
        </form>
      </Stack>
    </Flex>
  );
}
export default SignUpForm;
