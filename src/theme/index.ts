import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    semanticTokens: {
        colors: {
            error: 'red.500',
            success: 'green.500',
            primary: '#EB5B27',
            secondary: '#523D91',
        },
    },
    styles: {
        global: {
            body: {
                fontSize: "lg"
            }
        }
    }
})
