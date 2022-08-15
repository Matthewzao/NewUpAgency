import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image"
import Artboard1 from "../../../public/Artboard1.png"


export default function Visao() {
    return (

        <Flex gap="20px" w="100%" h="500px" justifyContent="center"  >
            <Flex direction="column">
                <Text fontWeight="bold" fontSize="64px">Visão</Text>
                <Text fontSize="20px" fontWeight="hairline" color="gray">Acreditamos em uma visão de mundo<br></br>
                    colaborativa, onde nós criamos juntos. O<br></br>
                    que buscamos é de maneira positiva criar<br></br>
                    uma solição pratica ne assertiva para o seu Negócio</Text>
            </Flex>
            <Image height="600px" width="700px" src={Artboard1} />
        </Flex>
    )
}