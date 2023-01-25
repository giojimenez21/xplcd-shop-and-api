import { Box, Image, Text } from "@chakra-ui/react";
import celphone from "../../../assets/celphone.png";
import { ButtonCustom } from "../../../components";

const LoginOrRegister = () => {
    return (
        <>
            <Image
                src={celphone}
                gridColumn="span 4"
                width="100%"
                maxWidth="400"
                margin="auto"
                display={["none", "none", "initial"]}
            />
            <Box
                gridColumn={["span 12", "span 12", "span 8"]}
                textAlign="center"
            >
                <Text
                    fontSize="6xl"
                    fontWeight="bold"
                    fontStyle="italic"
                    color="primary"
                >
                    Inicia Sesión
                </Text>
                <Box
                    width="25px"
                    height="5px"
                    margin="auto"
                    backgroundColor="primary"
                />
                <Text fontSize="2xl" fontWeight="bold" marginBottom="3rem">
                    Registrate para obtener novedades y exclusivas.
                </Text>
                <ButtonCustom
                    text="Entrar"
                    styles={{
                        display: "block",
                        margin: "1rem auto",
                        backgroundColor: "secondary",
                        width: "100%",
                        maxWidth: "300px",
                        letterSpacing: "0.5rem",
                    }}
                />
                <ButtonCustom
                    text="Registrarse"
                    styles={{
                        display: "block",
                        margin: "1rem auto",
                        backgroundColor: "secondary",
                        width: "100%",
                        maxWidth: "300px",
                        letterSpacing: "0.5rem",
                    }}
                />
            </Box>
        </>
    );
};

export default LoginOrRegister;
