import { BiSearchAlt } from "react-icons/bi";
import { useContext } from "react";
import { Box, Input, InputGroup, InputRightAddon, Text } from "@chakra-ui/react";

import { Logo } from "../ui";
import { LoginOrRegisterButton, NavbarItems } from "./components";
import { itemsNavbar } from "./constants/";
import { AuthContext } from "../../context";
import { NavbarContainer } from "./styled-components";

const Navbar = () => {
    const { userState: { user } } = useContext(AuthContext);

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
            {
                user.id > 0 
                    ? <NavbarItems itemsNavbar={itemsNavbar} /> 
                    : <LoginOrRegisterButton/>
            }
        </NavbarContainer>
    );
};

export default Navbar;
