import { Box } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

interface IProps {
    children: ReactNode | ReactNode[];
    width?: string | string[];
    margin?: string;
}

const Container:FC<IProps> = ({children, width=["100%","95%","80%"], margin="0 auto"}) => {
    return (
        <Box
            width={width}
            margin={margin}
            maxWidth="1500px"
        >
            {children}
        </Box>
    )
}

export default Container