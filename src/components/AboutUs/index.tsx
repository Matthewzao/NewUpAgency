import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image"
import artboard from "../../../public/artboard.png"
import { FaBeer } from 'react-icons/ri';

export default function AboutUs() {
    return (
        <Flex gap="100px" w="100%" h="700px" justifyContent="center">
            <Box p="10px" borderRadius="5" shadow="dark-lg" border="1px solid gray" w="400px" h="500px" >
                <Image width="50px" height="50px" src={artboard} />
            </Box>
            <Flex direction="column">
                <Text fontSize="64" fontWeight="bold">Quem somos</Text>
            </Flex>
        </Flex>
    )
}