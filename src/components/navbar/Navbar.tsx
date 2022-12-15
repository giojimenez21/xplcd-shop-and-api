import { BiSearchAlt } from "react-icons/bi";
import { Box, Input, InputGroup, InputRightAddon, Text } from "@chakra-ui/react";

import Logo from "../ui/Logo";
import { itemsNavbar } from "./constants/itemsNavbar";
import { NavbarContainer, NavbarItems } from "./styled-components";

const Navbar = () => {
    return (
        <NavbarContainer>
            <Box
                display="flex"
                color="white"
                fontWeight="bold"
                alignItems="center"
                gap="0.5rem"
            >
                <Logo style={{ width: "70px" }} />
                <Text>LCD Factory</Text>
            </Box>
            {/* <InputGroup width="3xl">
                <Input type="search" placeholder="Buscar productos" backgroundColor="white"/>
                <InputRightAddon children={<BiSearchAlt size="1.5rem"/>} />
            </InputGroup> */}
            <NavbarItems itemsNavbar={itemsNavbar} />
        </NavbarContainer>
    );
};

export default Navbar;
