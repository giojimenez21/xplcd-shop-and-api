import { RiUser3Fill } from "react-icons/ri";
import { Box, Icon, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";


const LoginOrRegisterButton = () => {
    return (
        <Link
            color="whiteAlpha.700"
            display="flex"
            alignItems="center"
            gap="0.3rem"
            as={RouterLink}
            to="login"
        >
            <Icon as={RiUser3Fill} fontSize="2xl" />
            <span>Ingresar / Registrarse</span>
        </Link>
    );
};

export default LoginOrRegisterButton;
