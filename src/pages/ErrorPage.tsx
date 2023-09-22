import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar.tsx";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box textAlign="center">
        <Heading marginBottom={10}>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "404 This page does not exist."
            : "An unexpected error occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
