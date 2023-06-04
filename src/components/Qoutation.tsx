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
      className="bg-gradient-to-r from-black bg-opacity-60 via-transparent to-transparent"
      backgroundImage={
        "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}>
      <VStack w={"full"} justify={"center"} px={{ base: 4, md: 8 }}>
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
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
