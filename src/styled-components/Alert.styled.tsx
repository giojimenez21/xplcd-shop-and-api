import { FC, ReactNode } from 'react'
import { Alert, AlertIcon } from '@chakra-ui/react'

interface IProps {
    children: ReactNode | ReactNode[];
    status: "error" | "info" | "warning" | "success" | "loading";
}

const AlertStyled:FC<IProps> = ({children, status}) => {
    return (
        <Alert status={status} padding="2rem" fontSize="lg" fontWeight="semibold">
            <AlertIcon />
            {children}
        </Alert>
    )
}

export default AlertStyled