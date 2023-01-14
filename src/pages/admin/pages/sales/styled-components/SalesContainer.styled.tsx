import { Box } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

interface IProps {
    children: ReactNode | ReactNode[];
}

const SalesContainer:FC<IProps> = ({children}) => {
    return (
        <Box
            width={["100%", "90%", "60%"]}
            margin="1rem auto"
            padding="0.5rem"
            maxWidth="1200px"
        >
            {children}
        </Box>
    )
}

export default SalesContainer