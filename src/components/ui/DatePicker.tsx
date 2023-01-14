import { FC } from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Box } from "@chakra-ui/react";

import { ButtonCustom, InputCustom } from "..";

interface Dates {
    startDate: string;
    endDate: string;
    setStartDate: React.Dispatch<React.SetStateAction<string>>;
    setEndDate: React.Dispatch<React.SetStateAction<string>>;
}

interface IProps {
    propsDate: Dates;
}

const DatePicker: FC<IProps> = ({ propsDate: { startDate, endDate, setStartDate, setEndDate } }) => {
    
    return (
        <Formik
            initialValues={{ startDate, endDate }}
            onSubmit={(values) => {
                setStartDate(values.startDate);
                setEndDate(values.endDate);
            }}
        >
            {() => (
                <Form>
                    <Box
                        display="grid"
                        gridTemplateColumns="repeat(12, 1fr)"
                        columnGap="1rem"
                        alignItems="center"
                    >
                        <Box gridColumn={["span 12", "span 4", "span 2"]}>
                            <InputCustom
                                type="date"
                                placeholder="Fecha inicial"
                                name="startDate"
                            />
                        </Box>
                        <Box gridColumn={["span 12", "span 4", "span 2"]}>
                            <InputCustom
                                type="date"
                                placeholder="Fecha final"
                                name="endDate"
                            />
                        </Box>
                        <ButtonCustom
                            text="Buscar"
                            styles={{
                                backgroundColor: "primary",
                                gridColumn: ["span 12", "span 4", "span 2"],
                            }}
                            type="submit"
                        />
                    </Box>
                </Form>
            )}
        </Formik>
    );
};

export default DatePicker;
