import { useId } from "react";
import { Box, Image, Text } from "@chakra-ui/react";

import { itemsFooter } from "./constants";
import logo from "../../assets/headerxp.png";
import { ItemsFooter, TitleItemFooter } from "./components";
import { FooterContainerStyled } from "./styled-components";

const Footer = () => {
    return (
        <FooterContainerStyled>
            <Box
                alignItems="center"
                backgroundColor="white"
                borderRadius="50%"
                display="flex"
                gridColumn={["span 10", "span 10", "span 2"]}
                height="200px"
                justifyContent="center"
                margin="auto"
                padding="1.5rem"
                width="200px"
            >
                <Image src={logo}/>
            </Box>
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
