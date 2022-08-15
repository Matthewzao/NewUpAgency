import { Flex, Image } from "@chakra-ui/react";
import Chart from 'react-apexcharts'

// const options = {

// };

// const series = [
//     { name: 'series1', data: [44, 108, 506, 90] }
// ]





export default function Grafico() {
    return (
        <Flex justifyContent="center" w="100%" h="400px">
            <Image src="https://img.freepik.com/vetores-premium/icone-do-grafico-de-pizza-ilustracao-em-vetor-plana-grafico-de-pizza-para-infografico-interface-do-usuario-apresentacao-de-negocios_547674-449.jpg?w=740" />
            <Image src="https://img.freepik.com/vetores-premium/icone-do-grafico-de-pizza-ilustracao-em-vetor-plana-grafico-de-pizza-para-infografico-interface-do-usuario-apresentacao-de-negocios_547674-449.jpg?w=740" />
            {/* <Chart options={options} series={series} type="area" width="1700px" height="500px" /> */}
        </Flex>
    )
}