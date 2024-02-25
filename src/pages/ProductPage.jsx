import React from "react";
import { useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

const ProductPage = () => {
  const { id } = useParams();

  return (
    <Box>
      <Text fontSize="2xl">Product Details</Text>
      <Text fontSize="lg">Product ID: {id}</Text>
      {/* Display product details here */}
    </Box>
  );
};

export default ProductPage;
