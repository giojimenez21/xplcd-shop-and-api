import { FC } from "react";
import { useField, ErrorMessage } from "formik";
import { Alert, AlertIcon, AlertTitle, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";

interface IProps {
    name: string;
    min: number;
    max: number;
    defaultValue: number;
}

const NumberInputStyled: FC<IProps> = ({...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <>
            <NumberInput
                {...field}
                {...props}
                onChange={(value, valueAsNumber) => (helpers.setValue(valueAsNumber))}
            >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <ErrorMessage name={props.name}>
                {(msg) => (
                    <Alert status="warning" marginTop="0.5rem">
                        <AlertIcon />
                        <AlertTitle>{msg}</AlertTitle>
                    </Alert>
                )}
            </ErrorMessage>
        </>
    );
};

export default NumberInputStyled;
