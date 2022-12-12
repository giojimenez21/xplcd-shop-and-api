import { GiHamburgerMenu } from "react-icons/gi";
import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Button,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";

import { AuthContext } from "../../../context";
import { ItemNavbar } from "../constants/ItemsByRole";

interface IProps {
    itemsNavbar: ItemNavbar[];
}

const NavbarItems: FC<IProps> = ({ itemsNavbar }) => {
    const { userState, dispatchUser } = useContext(AuthContext);
    const { user } = userState;

    const handleLogout = () => {
        localStorage.clear();
        dispatchUser({ type: "logout" });
    };

    return (
        <>
            <Box
                display={["none", "none", "flex"]}
                gap="0.6rem"
                flexWrap="wrap"
            >
                {itemsNavbar
                    .filter((item) => item.role.includes(user.role))
                    .map((item, i) => (
                        <Link to={`${item.path}`} key={i}>
                            <Button
                                backgroundColor="primary"
                                color="white"
                                _hover={{ color: "gray.200" }}
                            >
                                {item.name}
                            </Button>
                        </Link>
                    ))}
                <Button onClick={handleLogout}>Cerrar sesión</Button>
            </Box>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<GiHamburgerMenu />}
                    variant="outline"
                    color="white"
                    _hover={{ color: "secondary", backgroundColor: "white" }}
                    display={["flex", "flex", "none"]}
                />
                <MenuList>
                    {itemsNavbar
                        .filter((item) => item.role.includes(user.role))
                        .map((item, i) => (
                            <MenuItem key={i}>
                                <Link to={`${item.path}`} >
                                    {item.name}
                                </Link>
                            </MenuItem>
                        ))}
                        <MenuItem onClick={handleLogout}>
                            Cerrar sesión
                        </MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};

export default NavbarItems;
