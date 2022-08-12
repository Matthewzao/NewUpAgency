import { Flex, Text } from "@chakra-ui/react";


export default function WeGoHigh() {
    return (
        <Flex alignItems="center" justifyContent="center" w="100%" h="300px">
            <Flex gap="20px" direction="column">
                <Text textAlign="center" fontWeight="bold" fontSize="40px">We go High</Text>
                <Text color="gray" fontSize="20px">Vamos juntos alcançar o resultado desejado para o seu negocio?</Text>
            </Flex>
        </Flex>
    )
}