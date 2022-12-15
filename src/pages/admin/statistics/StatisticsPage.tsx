import { Link, Text } from "@chakra-ui/react"
import { Link as LinkRouter } from "react-router-dom"
import { ContainerStyled } from "../../../styled-components"


const StatisticsPage = () => {
    return (
        <ContainerStyled margin="2rem auto">
            <Text fontSize="xl" fontWeight="bold" marginBottom="1rem">
                Seleccione el reporte que desea consultar.
            </Text>

            <Link as={LinkRouter} to="stock-diario" display="block">
                Stock 
            </Link>
            <Link as={LinkRouter} to="productos-mas-vendidos" display="block">
                10 productos más vendidos
            </Link>
        </ContainerStyled>
    )
}

export default StatisticsPage