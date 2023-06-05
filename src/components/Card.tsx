import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Card({ name, src, code, alt }: any) {
  const link = "/category/" + code;
  return (
    <Center py={12}>
      <Link href={link}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"lg"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}>
          <Box rounded={"lg"} pos={"relative"} height={"230px"}>
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={src}
              alt={alt}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {name}
            </Heading>
            <Stack direction={"row"} align={"center"}></Stack>
          </Stack>
        </Box>
      </Link>
    </Center>
  );
}
