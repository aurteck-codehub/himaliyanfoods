"use client";

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Qoutation() {
  return (
    <Flex
      w={"full"}
      h={"60vh"}
      opacity={1}
      backgroundBlendMode={"darken"}
      backgroundImage={"/asserts/3.jpg"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}>
      <VStack w={"full"} justify={"center"} px={{ base: 4, md: 8 }}>
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            textShadow={"2xl"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={{ base: "3xl", md: "4xl" }}>
            Here goes the some content for
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
  );
}
