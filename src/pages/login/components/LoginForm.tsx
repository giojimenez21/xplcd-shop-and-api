import * as Yup from "yup";
import { FC, useContext } from "react";
import { Formik, Form } from "formik";
import { Box, Text } from "@chakra-ui/react";

import { ButtonCustom, Logo } from "../../../components";
import { InputStyled } from "../../../styled-components";
import { axiosClient } from "../../../clients/axios.client";
import { ResponseLogin } from "../../../clients/interface";
import { AuthContext } from "../../../context";
import { Link } from "react-router-dom";

const LoginForm: FC = () => {
    const { dispatchUser } = useContext(AuthContext);

    return (
        <>
            <Logo style={{ margin: "0 auto", boxSize: "250px" }} />
            <Text as="h1" fontWeight="bold" textAlign="center" fontSize="2rem">
                Iniciar sesión
            </Text>
            <Box
                width="25px"
                height="5px"
                margin="1rem auto"
                backgroundColor="primary"
            />
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={async (values) => {
                    const response = await axiosClient.post<ResponseLogin>("/auth/login",values);
                    localStorage.setItem("token", response.data.token);
                    dispatchUser({type: "login",payload: response.data.user});
                }}
                validationSchema={Yup.object({
                    email: Yup.string().email("Debe ingresar un correo con el formato adecuado.")
                    .required("Debe ingresar un correo."),
                    password: Yup.string().required("Debe ingresar una contraseña"),
                })}
            >
                {(formik) => (
                    <Form noValidate>
                        <InputStyled placeholder="Correo electrónico" name="email" />
                        <InputStyled
                            placeholder="Contraseña"
                            name="password"
                            type="password"
                        />
                        <Box display="flex" justifyContent="center" gap="1rem">
                            <Link to="/register">
                                <ButtonCustom
                                    text="Crear cuenta"
                                    styles={{ backgroundColor: "primary" }}
                                />
                            </Link>

                            <ButtonCustom
                                text="Ingresar"
                                type="submit"
                                styles={{ backgroundColor: "secondary" }}
                            />
                        </Box>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default LoginForm;
