import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "./theme";
import { AppRouter } from "./router";
import { AuthProvider, ProductProvider } from "./context";

const App = () => {
    return (
        <AuthProvider>
            <ProductProvider>
                <ChakraProvider theme={theme}>
                    <AppRouter />
                </ChakraProvider>
            </ProductProvider>
        </AuthProvider>
    );
};

export default App;
