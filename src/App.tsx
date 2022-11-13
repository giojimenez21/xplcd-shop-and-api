import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./router/AppRouter";

import { theme } from "./theme";
import { AuthProvider } from "./context";

const App = () => {
    return (
        <AuthProvider>
            <ChakraProvider theme={theme}>
                <AppRouter />
            </ChakraProvider>
        </AuthProvider>
    );
};

export default App;
