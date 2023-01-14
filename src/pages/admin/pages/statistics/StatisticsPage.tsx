import { Text } from "@chakra-ui/react"

import { ReportsList } from "./components"
import { ContainerStyled } from "../../../../styled-components"


const StatisticsPage = () => {
    return (
        <ContainerStyled margin="2rem auto">
            <Text fontSize="xl" fontWeight="bold" marginBottom="1rem">
                Seleccione el reporte que desea consultar.
            </Text>
            <ReportsList />
        </ContainerStyled>
    )
}

export default StatisticsPage