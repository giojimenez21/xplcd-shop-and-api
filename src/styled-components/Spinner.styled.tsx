import { Box, Spinner } from '@chakra-ui/react'

const SpinnerStyled = () => {
    return (
        <Box
            width="100vw"
            display="flex"
            justifyContent="center"
        >
            <Spinner size="xl" margin="4rem"/>
        </Box>
    )
}

export default SpinnerStyled