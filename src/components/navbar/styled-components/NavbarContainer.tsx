import { Box } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

interface IProps {
    children: ReactNode | ReactNode[]
}

const NavbarContainer:FC<IProps> = ({children}) => {
    return (
        <Box
            width="100%"
            backgroundColor="secondary"
            padding="1rem"
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
            alignItems="center"
        >
            {children}
        </Box>
    )
}

export default NavbarContainer