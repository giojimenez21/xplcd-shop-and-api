import { ButtonProps } from "@chakra-ui/react";
import { FC } from "react";
import { generateXLSX } from "../../helpers/generateXlsx";
import ButtonCustom from "./ButtonCustom";

interface IProps {
    nameToFile: string;
    disabled?: boolean;
    dataRef: any;
    styles?: ButtonProps;
}

const ExportToXLSX:FC<IProps> = ({ disabled, dataRef, nameToFile, styles }) => {
    return (
        <ButtonCustom
            text="Exportar a excel"
            styles={{
                display: "block",
                marginLeft: "auto",
                backgroundColor: "secondary",
                fontSize: "lg",
                ...styles
            }}
            disabled={disabled}
            onClick={() => generateXLSX(dataRef.current, nameToFile)}
        />
    );
};

export default ExportToXLSX;
