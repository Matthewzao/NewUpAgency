import { Button, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import desktop from "../../../public/desktop.png"
export default function GerandoResultados() {
    return (
        <Flex alignItems="center">
            <Image src={desktop} />
            <Flex direction="column" justifyContent="center" marginLeft="300px" w="700px" position="absolute">
                <Text fontSize="60px" fontWeight="bold" fontFamily="sans-serif">Gerando resultados</Text>
                Agencia Full-Service para quem sonha em ter um negocio
                <Flex marginTop="60px">
                    <Button shadow={"lg"} w="170px" color="white" bg="#00DEB6">Fale Conosco</Button>
                </Flex>
            </Flex>
        </Flex >
    )
}

