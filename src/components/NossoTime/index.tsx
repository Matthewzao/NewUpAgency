import { Flex, Text, Button } from "@chakra-ui/react";
import { FiShoppingCart } from 'react-icons/fi';
import { BsDisplay } from 'react-icons/bs';
import { GoPencil } from 'react-icons/go';


export default function NossoTime() {
    return (
        <Flex gap="60px" alignItems="center" justifyContent="center" direction="column" bg="black" w="100%" h="1300px" borderBottomRadius="10px">
            <Text color="gray.100" fontSize="60px" fontWeight="bold">Nosso time é o seu</Text>
            <Flex gap="20px" alignItems="center" direction="column">
                <FiShoppingCart color="gray" size="40px" />
                <Text color="gray.100" fontWeight="bold" fontSize="50px">Marketing</Text>
                <Text fontSize="20px" color="gray">Acreditamos em uma visão de mundo<br></br>
                    colaborativa, onde nós criamos juntos</Text>
            </Flex>
            <Flex gap="20px" alignItems="center" direction="column">
                <BsDisplay color="gray" size="40px" />
                <Text color="gray.100" fontWeight="bold" fontSize="50px">Suporte</Text>
                <Text fontSize="20px" color="gray">Acreditamos em uma visão de mundo<br></br>
                    colaborativa, onde nós criamos juntos</Text>
            </Flex>
            <Flex gap="20px" alignItems="center" direction="column">
                <GoPencil color="gray" size="40px" />
                <Text color="gray.100" fontWeight="bold" fontSize="50px">Design</Text>
                <Text fontSize="20px" color="gray">Acreditamos em uma visão de mundo<br></br>
                    colaborativa, onde nós criamos juntos</Text>
            </Flex>
            <Button shadow={"lg"} w="170px" color="white" bg="#00DEB6">Fale Conosco</Button>
        </Flex>
    )
}