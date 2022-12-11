import { Box } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

interface IProps {
    children: ReactNode | ReactNode[];
}

const CardContainer:FC<IProps> = ({children}) => {
    return (
        <Box
            width={["100%", "80%", "60%"]}
            maxWidth="600px"
            borderRadius="md"
            boxShadow="lg"
            padding="1rem"
            margin="auto"
            display="flex"
            flexDirection="column"
            gap="1rem"
            fontSize="lg"
        >
            {children}
        </Box>
    )
}

export default CardContainer