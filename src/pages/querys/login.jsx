/* eslint-disable react/jsx-filename-extension */
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Heading,
  FormHelperText,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

// import { login } from "../../redux/reduxSlices/auth";
import { clearMessage } from "../../redux/reduxSlices/message";

function SignINForm() {
  const message = useSelector((mystate) => mystate.message.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const showToast = () => {
    toast({
      position: "top",
      title: "Logged In Successfully..",
      status: "success",
      duration: 2500,
      isClosable: true,
    });
  };

  const onSubmit = handleSubmit(async (mydata, e) => {
    e?.preventDefault();
    setLoading(true);
    setLoading(false);
    reset();
    showToast();
    navigate("/home");
  });

  /* 
    const onSubmit = handleSubmit(async (mydata, e) => {
    e?.preventDefault();
    setLoading(true);

    // eslint-disable-next-line prefer-destructuring
    const username = mydata.username;
    // eslint-disable-next-line prefer-destructuring
    const password = mydata.password;

    dispatch(login(username, password))
      .unwrap()
      .then(() => {
        setLoading(false);
        reset();
        showToast();
        navigate("/home");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  });
  
  */

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Stack
        bg="gray.200"
        rounded={6}
        spacing={4}
        w="90%"
        maxW="sm"
        boxShadow="lg"
        p={6}
        my={12}
      >
        <form onSubmit={onSubmit}>
          <Heading
            color="orange.400"
            fontSize={{ base: "3xl", md: "4xl" }}
            pt={{ base: "1%", md: "0%" }}
            textAlign="center"
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            Login
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
          <FormControl textAlign="center" pb={{ base: "4.6%", md: "4.5%" }}>
            <Button
              size={{ base: "md", md: "md" }}
              w="full"
              mt="5%"
              colorScheme="white"
              id="submitBtn"
              color="white"
              type="submit"
              bg="orange.400"
              _hover={{ bg: "teal", color: "white" }}
              variant="ghost"
              isLoading={loading}
              loadingText="Logging In"
            >
              Login
            </Button>

            <Link id="SignUp" to="/register">
              <Button
                size={{ base: "md", md: "md" }}
                w="full"
                mt="5%"
                colorScheme="white"
                color="gray.900"
                bg="#CBD5E0"
                _hover={{ bg: "#CBD5E0", color: "#FF5F0F" }}
                variant="ghost"
              >
                Register
              </Button>
            </Link>
          </FormControl>
        </form>
      </Stack>
    </Flex>
  );
}
export default SignINForm;
