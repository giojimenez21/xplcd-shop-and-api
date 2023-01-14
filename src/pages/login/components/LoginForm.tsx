import * as Yup from "yup";
import { Formik, Form } from "formik";
import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

import { AuthContext } from "../../../context";
import { ResponseLogin } from "../../../clients/interface";
import { axiosClient } from "../../../clients/axios.client";
import { ButtonCustom, InputCustom, Logo } from "../../../components";

const LoginForm: FC = () => {
    const { dispatchUser } = useContext(AuthContext);

    return (
        <>
            <Logo style={{ margin: "0 auto", width: "240px" }} />
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
                        <InputCustom placeholder="Correo electrónico" name="email" />
                        <InputCustom
                            placeholder="Contraseña"
                            name="password"
                            type="password"
                        />
                        <Box display="flex" justifyContent="center" gap="1rem" flexWrap="wrap">
                            <Link to="/register">
                                <ButtonCustom
                                    text="Crear cuenta"
                                    styles={{ backgroundColor: "primary" }}
                                />
                            </Link>

                            <ButtonCustom 
                                text="Ingresar"
                                type="submit"
                                styles={{ backgroundColor: "secondary"}}
                            />
                        </Box>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default LoginForm;
