import { useId } from "react";
import { Box, Image, Text } from "@chakra-ui/react";

import { itemsFooter } from "./constants";
import logo from "../../assets/headerxp.png";
import { ItemsFooter, TitleItemFooter } from "./components";
import { FooterContainerStyled } from "./styled-components";

const Footer = () => {
    return (
        <FooterContainerStyled>
            <Image
                src={logo}
                width="200px"
                gridColumn={["span 10", "span 10", "span 2"]}
                display="block"
                margin="auto"
            />
            {itemsFooter.map((item) => (
                <ItemsFooter itemFooter={item} key={useId()} />
            ))}
            <Box
                gridColumn={["span 10", "span 5", "span 2"]}
                textAlign="center"
            >
                <TitleItemFooter> ¿Necesitas ayuda? </TitleItemFooter>
                <Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    dolores facere?
                </Text>
            </Box>
        </FooterContainerStyled>
    );
};

export default Footer;
