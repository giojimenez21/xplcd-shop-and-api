import { FC } from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import { roles } from "../constants";
import { axiosClient } from "../../../../../clients/axios.client";
import { ButtonCustom, SelectCustom } from "../../../../../components";

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
                    <SelectCustom name="role" value={role} label="Rol">
                        {roles.map((role) => (
                            <option key={role.value} value={role.value}>
                                {role.name}
                            </option>
                        ))}
                    </SelectCustom>
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
