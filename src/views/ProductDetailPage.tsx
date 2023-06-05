"use client";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";

export default function ProductDetailPage({ product }: any) {
  const colorModeValue = useColorModeValue("light", "dark");
  return (
    <Container maxW={"7xl"}>
      <Image
        rounded={"md"}
        alt={product.imageAlt}
        src={`@assets/${product.imageSrc}`}
        fit={"cover"}
        align={"center"}
        w={"100%"}
        h={{ base: "100%", sm: "400px", lg: "500px" }}
      />
      <SimpleGrid
        columns={{ base: 1 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}>
              {product.name}
            </Heading>
            <Text
              color={colorModeValue ? " gray.900" : "gray.400"}
              fontWeight={300}
              fontSize={"2xl"}>
              {product.pcode}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={<StackDivider />}>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"2xl"} fontWeight={"300"}>
                {product.short_description}
              </Text>
              <Text fontSize={"lg"}>{product.description}</Text>
            </VStack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
