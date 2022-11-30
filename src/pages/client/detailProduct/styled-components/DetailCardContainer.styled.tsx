import { Box } from "@chakra-ui/react"
import { FC, ReactElement } from "react"

interface IProps {
    children: ReactElement | ReactElement[];
}

const DetailCardContainer:FC<IProps> = ({children}) => {
    return (
        <Box
            gridColumn={["1 / 13", "3 / 11", "4 / 10", "5 / 9"]}
            boxShadow="xl"
            padding="1rem"
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
            marginY="1rem"
            display="flex"
            flexDirection="column"
            gap="1rem"
        >
            {children}
        </Box>
    )
}

export default DetailCardContainer