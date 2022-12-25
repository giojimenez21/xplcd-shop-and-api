import { FC } from "react";
import { Box, Text } from "@chakra-ui/react";

import { ButtonCustom } from "../ui";



interface PropsPaginate {
    previousPage: () => void;
    nextPage: () => void;
    actualPage: number;
}

interface IProps {
    next: boolean;
    previous: boolean;
    propsPaginate: PropsPaginate;
}

const Paginate: FC<IProps> = ({
    propsPaginate: { previousPage, nextPage, actualPage },
    previous,
    next,
}) => {
    return (
        <Box display="flex" justifyContent="end" marginTop="1rem">
            <Box display="flex" alignItems="center" gap="1rem">
                <ButtonCustom
                    text="Anterior"
                    onClick={previousPage}
                    styles={{
                        backgroundColor: "primary",
                        size: "sm",
                    }}
                    disabled={!previous}
                />
                <Text
                    backgroundColor="primary"
                    color="white"
                    padding="4px 10px"
                    rounded="md"
                    fontWeight="bold"
                >
                    {actualPage}
                </Text>
                <ButtonCustom
                    text="Siguiente"
                    onClick={nextPage}
                    styles={{
                        backgroundColor: "primary",
                        size: "sm",
                    }}
                    disabled={!next}
                />
            </Box>
        </Box>
    );
};

export default Paginate;
