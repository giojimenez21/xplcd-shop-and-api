import { BiSearchAlt } from "react-icons/bi";
import { Input, InputGroup, InputLeftAddon, InputRightAddon } from "@chakra-ui/react";

import Logo from "../ui/Logo";
import { itemsNavbar } from "./constants/ItemsByRole";
import { NavbarContainer, NavbarItems } from "./styled-components";

const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo style={{ boxSize: "40px" }} />
            <InputGroup width="3xl">
                <Input type="search" placeholder="Buscar productos" backgroundColor="white"/>
                <InputRightAddon children={<BiSearchAlt size="1.5rem"/>} />
            </InputGroup>
            <NavbarItems itemsNavbar={itemsNavbar} />
        </NavbarContainer>
    );
};

export default Navbar;
