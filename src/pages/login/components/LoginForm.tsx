import * as Yup from "yup";
import { FC, useContext } from "react";
import { Formik, Form } from "formik";
import { Box, Button, Text } from "@chakra-ui/react";

import { Logo } from "../../../components";
import { Input } from "../../../styled-components";
import { axiosClient } from "../../../clients/axios.client";
import { ResponseLogin } from "../../../clients/interface";
import { AuthContext } from "../../../context";


const LoginForm:FC = () => {
    const { dispatchUser } = useContext(AuthContext)

    return (
        <>
            <Logo style={{margin:"0 auto", boxSize:"250px" }}/>
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
                onSubmit={async(values) => {
                    const response = await axiosClient.post<ResponseLogin>('/auth/login', values);
                    localStorage.setItem('token', response.data.token);
                    dispatchUser({type: 'login', payload: response.data.user});
                }}
                validationSchema={Yup.object({
                    email: Yup.string().email('Debe ingresar un correo con el formato adecuado.').required('Debe ingresar un correo.'),
                    password: Yup.string().required('Debe ingresar una contraseña')
                })}
            >
                {(formik) => (
                    <Form noValidate>
                        <Input placeholder="Correo electrónico" name="email" />
                        <Input
                            placeholder="Contraseña"
                            name="password"
                            type="password"
                        />
                        <Button
                            type="submit"
                            backgroundColor="secondary"
                            color="white"
                            fontSize="1.5rem"
                            _hover={{ color: "gray.200" }}
                            margin="0.2rem auto"
                            display="block"
                        >
                            Ingresar
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default LoginForm