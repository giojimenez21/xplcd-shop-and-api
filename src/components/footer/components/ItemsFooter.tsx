import { FC, useId } from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import { ItemFooter } from "../interfaces/footer.interface";
import TitleItemFooter from "./TitleItemFooter";

interface IProps {
    itemFooter: ItemFooter;
}

const ItemsFooterComponent: FC<IProps> = ({ itemFooter }) => {
    return (
        <Box gridColumn={["span 10", "span 5", "span 2"]} textAlign="center">
            <TitleItemFooter> {itemFooter.title} </TitleItemFooter>
            
            {itemFooter.items.map((item) => (
                <Link
                    key={useId()}
                    display="block"
                    href={item.path}
                    isExternal={item.isExternal}
                    margin="0.3rem"
                >
                    {item.name}
                </Link>
            ))}
        </Box>
    );
};

export default ItemsFooterComponent;
