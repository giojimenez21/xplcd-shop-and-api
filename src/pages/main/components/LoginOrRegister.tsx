import { Link as LinkRouter } from "react-router-dom";
import { Box, Image, Link, Text } from "@chakra-ui/react";

import { ButtonCustom } from "../../../components";
import celphone from "../../../assets/celphone.png";

const LoginOrRegister = () => {
    return (
        <>
            <Image
                src={celphone}
                gridColumn="span 4"
                width="100%"
                maxWidth="400"
                marginLeft="auto"
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
                <Text fontSize="2xl" fontWeight="bold" marginBottom="5rem">
                    Registrate para obtener novedades y exclusivas.
                </Text>

                <Link
                    as={LinkRouter}
                    to="login"
                    _hover={{
                        textDecoration: "none",
                    }}
                >
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
                </Link>
                <Link
                    as={LinkRouter}
                    to="login"
                    _hover={{
                        textDecoration: "none",
                    }}
                >
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
                </Link>
            </Box>
        </>
    );
};

export default LoginOrRegister;
