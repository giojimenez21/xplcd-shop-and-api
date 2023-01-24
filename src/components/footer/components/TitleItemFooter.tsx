import { FC, ReactNode } from "react";
import { Text } from "@chakra-ui/react";

interface IProps {
    children: ReactNode | ReactNode[];
}

const TitleItemFooter: FC<IProps> = ({ children }) => {
    return (
        <Text as="h4" fontSize="2xl" fontWeight="bold" fontFamily="Helvetica">
            {children}
        </Text>
    );
};

export default TitleItemFooter;
