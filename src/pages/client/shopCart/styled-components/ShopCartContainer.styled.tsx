import { FC, ReactNode } from "react"
import { Box } from "@chakra-ui/react"

interface IProps {
    children: ReactNode | ReactNode[]
}

const ShopCartContainer:FC<IProps> = ({children}) => {
    return (
        <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gap="1rem"
            width={["95%", "90%","70%"]}
            margin="2rem auto"
        >
            {children}
        </Box>
    )
}

export default ShopCartContainer