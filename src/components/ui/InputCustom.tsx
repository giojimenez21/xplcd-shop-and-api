import { FC } from "react";
import { useField, ErrorMessage } from "formik";
import {
    Input,
    InputProps,
    Alert,
    AlertIcon,
    AlertTitle,
} from "@chakra-ui/react";

interface IProps {
    [x: string]: any;
    name: string;
    placeholder: string;
    styles?: InputProps;
    type?: string;
}

const InputCustom: FC<IProps> = ({ label, ...props }) => {
    const [field] = useField(props);
    return (
        <>
            <Input
                borderRadius="2px"
                padding="6px 8px"
                margin="0.5rem auto"
                size="lg"
                autoComplete="off"
                {...field}
                {...props}
            />
            <ErrorMessage name={props.name}>
                {(msg) => (
                    <Alert status="warning">
                        <AlertIcon />
                        <AlertTitle>{msg}</AlertTitle>
                    </Alert>
                )}
            </ErrorMessage>
        </>
    );
};

export default InputCustom;
