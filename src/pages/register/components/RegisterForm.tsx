import * as Yup from "yup";
import { FC, useContext } from "react";
import { Formik, Form } from "formik";
import { Box, Text } from "@chakra-ui/react";

import { ButtonCustom, Logo } from "../../../components";
import { InputStyled } from "../../../styled-components";
import { axiosClient } from "../../../clients/axios.client";
import { ResponseLogin } from "../../../clients/interface";
import { AuthContext } from "../../../context";

const RegisterForm: FC = () => {
    const { dispatchUser } = useContext(AuthContext);

    return (
        <>
            <Logo style={{ margin: "0 auto", width: "240px" }} />
            <Text as="h1" fontWeight="bold" textAlign="center" fontSize="2rem">
                Crear cuenta
            </Text>
            <Box
                width="25px"
                height="5px"
                margin="1rem auto"
                backgroundColor="primary"
            />
            <Formik
                initialValues={{ name:"", email: "", password: "" }}
                onSubmit={async(values) => {
                    const response = await axiosClient.post<ResponseLogin>('/auth/register', values);
                    localStorage.setItem("token", response.data.token);
                    dispatchUser({ type: "login", payload: response.data.user });
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('El nombre es obligatorio.'),
                    email: Yup.string().email("Debe ingresar un correo con el formato adecuado.")
                        .required("Debe ingresar un correo."),
                    password: Yup.string().required("Debe ingresar una contraseña"),
                })}
            >
                {(formik) => (
                    <Form noValidate>
                        <InputStyled placeholder="Nombre completo" name="name" />
                        <InputStyled placeholder="Correo electrónico" name="email" />
                        <InputStyled
                            placeholder="Contraseña"
                            name="password"
                            type="password"
                        />
                        <ButtonCustom
                            text="Crear cuenta"
                            type="submit"
                            styles={{ backgroundColor: "primary", margin: "0 auto", display: "block" }}
                        />
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default RegisterForm;
