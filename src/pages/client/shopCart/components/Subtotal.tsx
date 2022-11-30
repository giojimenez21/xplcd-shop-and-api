import { Box, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { ProductContext } from "../../../../context";
import { calculateTotal } from "../helpers/calculateTotal";

const Subtotal = () => {
    const { productState: { cart } } = useContext(ProductContext);
    const { subtotal, totalQuantity } = calculateTotal(cart);
    return (
        <Box
            gridColumn={["1 / 13", "1 / 13", "9 / 13"]}
            padding="1rem"
            fontSize="2xl"
            display="flex"
            gap="1rem"
            flexDirection="column"
            shadow="lg"
            rounded="lg"
        >
            <Text>Total: {subtotal}</Text>
            <Text>Cantidad de productos: {totalQuantity}</Text>
            <Text>Elegir método de pago:</Text>
        </Box>
    )
}

export default Subtotal