import { Flex, Link, Text } from "@chakra-ui/react";
import { FaHandsHelping } from 'react-icons/fa';
import { TbStairsUp } from 'react-icons/tb';


export default function Diferencial() {
    return (

        <Flex gap="70px" direction="column" alignItems="center" w="100%" h="500px" bg="black" justifyContent="center" borderTopRadius="10px">
            <Text fontSize="50px" color="white">Diferencial</Text>
            <Flex gap="700px">
                <Flex gap="40px">
                    <FaHandsHelping color="#00DEB6" size="70px" />
                    <Flex gap="10px" direction="column">
                        <Text color="white" fontWeight="bold" fontSize="20px">Colaboração</Text>
                        <Text color="gray">acreditamos em uma visão<br></br>
                            de mundo colaborativa,<br></br>
                            onde nós criamos juntos<br></br>
                            <Link color="white">Clique aqui > </Link></Text>
                    </Flex>
                </Flex>
                <Flex gap="40px">
                    <TbStairsUp color="#00DEB6" size="70px" />
                    <Flex gap="10px" direction="column">
                        <Text color="white" fontWeight="bold" fontSize="20px">Escalonamento</Text>
                        <Text color="gray">acreditamos em uma visão<br></br>
                            de mundo colaborativa,<br></br>
                            onde nós criamos juntos<br></br>
                            <Link color="white">Clique aqui > </Link></Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex gap="700px">
                <Flex gap="40px">
                    <FaHandsHelping color="#00DEB6" size="70px" />
                    <Flex gap="10px" direction="column">
                        <Text color="white" fontWeight="bold" fontSize="20px">Colaboração</Text>
                        <Text color="gray">acreditamos em uma visão<br></br>
                            de mundo colaborativa,<br></br>
                            onde nós criamos juntos<br></br>
                            <Link color="white">Clique aqui > </Link></Text>
                    </Flex>
                </Flex>
                <Flex gap="40px">
                    <FaHandsHelping color="#00DEB6" size="70px" />
                    <Flex gap="10px" direction="column">
                        <Text color="white" fontWeight="bold" fontSize="20px">Colaboração</Text>
                        <Text color="gray">acreditamos em uma visão<br></br>
                            de mundo colaborativa,<br></br>
                            onde nós criamos juntos<br></br>
                            <Link color="white">Clique aqui > </Link></Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}