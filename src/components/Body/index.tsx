import { Flex, Img } from "@chakra-ui/react";

export default function GerandoResultados() {
    return (
        <Flex border="1px solid red">
            <Img w="300px" h="100px" src="./public/desktop.png" />
        </Flex>
    )
}



// import { Box, Flex } from “@chakra-ui/react”;
// import Image from ‘next/image’;
// import desktop from “./body/desktop.png”;
// export default function GerandoResultados() {
//     return (
//         <Box boxSize=“200px” > // ou size=200px
//             <Image src={desktop} alt=“Desktop” />
//         </Box>
//     )
// }