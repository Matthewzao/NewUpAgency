import { Button, Flex, Image } from "@chakra-ui/react";

export default function Header() {
    return (
        <Flex alignItems="center" gap="200px" justifyContent="center" border="1px solid red" w="100%" h="100px" >
            <Flex alignItems="center" gap="40px">
                <Flex><Image width="150px" height="30px" src='https://www.upagencybrasil.com.br/assets/logos/LOGO%20FINA.svg' alt='Dan Abramov' /></Flex>
                <Button bg="#none" _hover={{ bg: "none" }}>Pagina Inicial</Button>
                <Button bg="#none" _hover={{ bg: "none" }}>Serviços</Button>
                <Button bg="#none" _hover={{ bg: "none" }}>Clientes</Button>
                <Button bg="#none" _hover={{ bg: "none" }}>Contato</Button>
                <Button bg="#none" _hover={{ bg: "none" }}>Pagina Inicial</Button>
            </Flex>
            <Flex gap="50px">
                <Button w="170px" color="white" bg="#00DEB6">Fale Conosco</Button>
            </Flex>
        </Flex>

    )
}