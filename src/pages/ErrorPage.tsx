import { Box, Heading, Text } from '@chakra-ui/react';

import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Navbar from '../components/Navbar';

// ErrorPage is a page that shows an error message
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? 'This page does not exists'
            : 'Something went wrong'}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
