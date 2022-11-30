import { FC, ReactNode } from "react"
import { Box } from "@chakra-ui/react"

interface IProps {
    children: ReactNode | ReactNode[];
}

const UsersContainer:FC<IProps> = ({children}) => {
    return (
        <Box
            padding="1rem"
            width={["100%", "100%", "80%"]}
            margin="0 auto"
        >
            {children}
        </Box>
    )
}

export default UsersContainer