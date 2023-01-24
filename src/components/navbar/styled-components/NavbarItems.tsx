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
import { ItemNavbar } from "../constants/itemsNavbar";

interface IProps {
    itemsNavbar: ItemNavbar[];
}

const NavbarItems: FC<IProps> = ({ itemsNavbar }) => {
    const {
        userState: { user },
        dispatchUser,
    } = useContext(AuthContext);
    console.log(user);
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
                    .filter(
                        (item) =>
                            item.role.includes(user.role) ||
                            item.role.includes("ALL")
                    )
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
                {user.id > 0 && (
                    <Button onClick={handleLogout}>Cerrar sesión</Button>
                )}
            </Box>
            {user.id > 0 && (
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<GiHamburgerMenu />}
                        variant="outline"
                        color="white"
                        _hover={{
                            color: "secondary",
                            backgroundColor: "white",
                        }}
                        display={["flex", "flex", "none"]}
                    />
                    <MenuList>
                        {itemsNavbar
                            .filter(
                                (item) =>
                                    item.role.includes(user.role) ||
                                    item.role.includes("ALL")
                            )
                            .map((item, i) => (
                                <MenuItem key={i}>
                                    <Link to={`${item.path}`}>{item.name}</Link>
                                </MenuItem>
                            ))}
                        {user.id > 0 && (
                            <MenuItem onClick={handleLogout}>
                                Cerrar sesión
                            </MenuItem>
                        )}
                    </MenuList>
                </Menu>
            )}
        </>
    );
};

export default NavbarItems;
