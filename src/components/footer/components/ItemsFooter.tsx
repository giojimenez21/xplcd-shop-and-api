import { FC, useId } from "react";
import { Box, Link } from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";

import TitleItemFooter from "./TitleItemFooter";
import { ItemFooter } from "../interfaces/footer.interface";

interface IProps {
    itemFooter: ItemFooter;
}

const ItemsFooterComponent: FC<IProps> = ({ itemFooter }) => {
    return (
        <Box gridColumn={["span 10", "span 5", "span 2"]} textAlign="center">
            <TitleItemFooter> {itemFooter.title} </TitleItemFooter>

            {itemFooter.items.map((item) =>
                item.isExternal ? (
                    <Link
                        key={useId()}
                        display="block"
                        href={item.path}
                        isExternal={item.isExternal}
                        margin="1rem"
                    >
                        {item.name}
                    </Link>
                ) : (
                    <Link
                        key={useId()}
                        display="block"
                        as={LinkRouter}
                        to={item.path}
                        margin="1rem"
                    >
                        {item.name}
                    </Link>
                )
            )}
        </Box>
    );
};

export default ItemsFooterComponent;
