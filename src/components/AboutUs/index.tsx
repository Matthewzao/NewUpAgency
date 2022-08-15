import { Flex, Text, Image } from "@chakra-ui/react";
// import Image from "next/image"
// import artboard from "../../../public/artboard.png"
import { RiMoneyDollarBoxFill } from "react-icons/ri";

export default function AboutUs() {
    return (
        <Flex marginTop="100px" gap="400px" w="100%" h="700px" justifyContent="center">
            <Flex direction="column" alignItems="center" p="10px" borderRadius="10" shadow="dark-lg" border="1px solid gray" w="400px" h="500px" >
                <RiMoneyDollarBoxFill size="70px" color="#00DEB6" />
                <Text fontWeight="bold" fontSize="40px">Faturamento</Text>
                <Flex border="1px solid gray" w="370px"></Flex>
                <Image marginTop="20px" boxSize="400px" src="https://zen-marketing-documentation.s3.amazonaws.com/docs/en/Explore_bar_stacked.png" />
            </Flex>
            <Flex direction="column">
                <Text fontSize="64" fontWeight="bold">Quem somos</Text>
                <Text fontSize="20px" color="gray" fontWeight="hairline">A UP é uma agência digital especializada<br></br>
                    no nicho de moda feminina e acessórios.<br></br>
                    Trabalhamos como colaboradores da sua <br></br>
                    marca, buscando de maneira estratégica e <br></br>
                    efetiva alavancar seus resultados</Text>
            </Flex>
        </Flex>
    )
}