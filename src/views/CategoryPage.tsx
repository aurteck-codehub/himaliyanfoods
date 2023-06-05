"use client";
import Card from "@/components/ProductCard";
import Qoutation from "@/components/Qoutation";
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
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";

export default function CategoryPage({ result }: any) {
  const colorModeValue = useColorModeValue("light", "dark");
  return (
    <>
      <Flex
        w={"full"}
        h={"60vh"}
        className="bg-gradient-to-r from-black bg-opacity-60 via-transparent to-transparent"
        backgroundImage={result.category.imageSrc}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}>
        <VStack w={"full"} justify={"center"} px={{ base: 4, md: 8 }}>
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={{ base: "3xl", md: "4xl" }}>
              {result.category.name}
            </Text>
            <Stack direction={"row"}>
              <Button
                bg={"red.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}>
                Ask For Qoutation
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <Box>
        <Wrap spacing="30px" justify="center" marginX={10}>
          {result.products?.map((product: any, index: number) => {
            return (
              <>
                <WrapItem key={index}>
                  <Center>
                    <Card
                      key={index}
                      name={product.name}
                      code={product.id}
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      price={product.price}
                    />
                  </Center>
                </WrapItem>
              </>
            );
          })}
        </Wrap>
      </Box>
    </>
  );
}
