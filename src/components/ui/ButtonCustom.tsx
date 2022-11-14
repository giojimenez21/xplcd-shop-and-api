import { Button, ButtonProps } from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
    text: string;
    type?: "button" | "reset" | "submit" | undefined;
    styles?: ButtonProps;
}

const ButtonCustom:FC<IProps> = ({text,type = "button",styles}) => {
    return (
        <Button
            color="white"
            fontSize="1.5rem"
            _hover={{ color: "gray.200" }}
            {...styles}
            type={type}
        >
            {text}
        </Button>
    );
};

export default ButtonCustom;
