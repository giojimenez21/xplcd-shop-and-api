import { Box, Button } from "@chakra-ui/react";
import { FC, useContext } from "react";
import { Link } from "react-router-dom";
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
        <Box display="flex" gap="0.6rem" flexWrap="wrap">
            {itemsNavbar
                .filter((item) => item.role === user.role)
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
    );
};

export default NavbarItems;
