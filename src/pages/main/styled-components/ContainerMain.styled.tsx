import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface IProps {
    children: ReactNode | ReactNode[];
}

const ContainerMainStyled:FC<IProps> = ({ children }) => {
    return (
        <Box
            display="grid"
            gap="1rem"
            gridTemplateColumns="repeat(12, 1fr)"
            rowGap="5rem"
        >
            { children }
        </Box>
    )
}

export default ContainerMainStyled;