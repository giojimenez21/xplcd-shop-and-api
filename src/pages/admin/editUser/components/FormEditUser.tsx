import { FC } from "react";
import { Form, Formik } from "formik";

import { roles } from "../constants";
import { ButtonCustom } from "../../../../components";
import { SelectStyled } from "../../../../styled-components";
import { axiosClient } from "../../../../clients/axios.client";
import { useNavigate } from "react-router-dom";

interface IProps {
    valuesForm: { id: number; role: string };
}

const FormEditUser: FC<IProps> = ({ valuesForm }) => {
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={valuesForm}
            onSubmit={(values) => {
                axiosClient
                    .put("/admin/changeAccessListUser", values)
                    .then(() => navigate("/usuarios"));
            }}
        >
            {({ values: { role }, touched }) => (
                <Form noValidate>
                    <SelectStyled name="role" value={role} label="Rol">
                        {roles.map((role) => (
                            <option key={role.value} value={role.value}>
                                {role.name}
                            </option>
                        ))}
                    </SelectStyled>
                    <ButtonCustom
                        text="Actualizar"
                        styles={{
                            margin: "auto",
                            backgroundColor: "primary",
                            display: "block",
                        }}
                        type="submit"
                        disabled={touched.role ? false : true}
                    />
                </Form>
            )}
        </Formik>
    );
};

export default FormEditUser;
