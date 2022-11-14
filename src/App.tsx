import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./router/AppRouter";

import { theme } from "./theme";
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
