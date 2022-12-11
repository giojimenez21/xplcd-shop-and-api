import { FC, ReactNode } from "react";
import { useField, ErrorMessage } from "formik";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    Select,
    SelectProps,
    Text,
} from "@chakra-ui/react";

interface IProps {
    [x: string]: any;
    name: string;
    label?:string;
    placeholder?: string;
    styles?: SelectProps;
    children: ReactNode | ReactNode[];
}

const SelectCustom: FC<IProps> = ({ label, children, ...props }) => {
    const [field] = useField(props);
    return (
        <>
            <Text as="label" fontSize="sm" fontWeight="semibold">{label}</Text>
            <Select
                borderRadius="2px"
                margin="0 auto 1rem auto"
                size="lg"
                autoComplete="off"
                {...field}
                {...props}
            >
                {children}
            </Select>
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

export default SelectCustom;
