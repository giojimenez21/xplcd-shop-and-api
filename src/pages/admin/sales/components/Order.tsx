import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { Sale } from "../../../../context";

interface IProps {
    order: Sale;
}

const Order: FC<IProps> = ({ order }) => {
    return (
        <Box
            width="100%"
            border="1px"
            borderColor="gray.200"
            rounded="md"
            marginBottom="1rem"
        >
            <Box
                width="100%"
                backgroundColor="gray.100"
                color="gray.600"
                padding="1rem"
                fontSize="sm"
                display="flex"
                justifyContent="space-between"
            >
                <p>
                    PEDIDO REALIZADO POR: {order.user.name} <br /> Email: {order.user.email}
                </p>
                <p>
                    Metodo de pago: {order.payment_method === "CASH" ? "Efectivo" : "Tarjeta"}
                    <br /> Total: ${order.total}
                </p>
            </Box>
            <Box padding="1rem 2rem">
                {order.products_of_sales.map((product) => (
                    <>
                        <h2>{product.name}</h2>
                        <p>Precio: ${product.price}</p>
                        <p>Cantidad: {product.quantity}</p>
                    </>
                ))}
            </Box>
        </Box>
    );
};

export default Order;
