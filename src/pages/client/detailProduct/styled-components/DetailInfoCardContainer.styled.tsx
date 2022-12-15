import { Box } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

interface IProps {
    children: ReactNode | ReactNode[];
}

const DetailInfoCardContainer:FC<IProps> = ({children}) => {
    return (
        <Box
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)"
            gap="1rem"
        >
            {children}
        </Box>
    )
}

export default DetailInfoCardContainer