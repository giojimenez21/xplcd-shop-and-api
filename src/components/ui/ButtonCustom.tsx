import { Button, ButtonProps } from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
    [x: string]: any;
    text: string;
    type?: "button" | "reset" | "submit" | undefined;
    styles?: ButtonProps;
    disabled?: boolean;
    onClick?: () => void;
}

const ButtonCustom:FC<IProps> = ({text, type = "button", styles, onClick, ...props}) => {
    return (
        <Button
            color="white"
            fontSize="1.5rem"
            _hover={{ color: "gray.200" }}
            {...styles}
            {...props}
            type={type}
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

export default ButtonCustom;
