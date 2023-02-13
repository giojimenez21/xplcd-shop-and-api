import { FC, useContext } from "react";
import { Box } from "@chakra-ui/react";

import OrderItem from "./OrderItem";
import { useAxios } from "../../../../../hooks";
import { ButtonCustom } from "../../../../../components";
import { ProductContext, Sale } from "../../../../../context";


interface IProps {
    order: Sale;
}

const Order: FC<IProps> = ({ order }) => {
    const { dispatchProduct } = useContext(ProductContext);
    const { request } = useAxios({}, {
        url: `/products/changeStatusSale/${order.id}`,
        method: 'POST',
        enable: false
    });

    const changeStatusOrder = () => {
        request();
        order.status === "OPEN"
            ? dispatchProduct({ type: "closeOrder", payload: order })
            : dispatchProduct({ type: "openOrder", payload: order });
    };

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
                flexWrap="wrap"
            >
                <p>
                    PEDIDO REALIZADO POR: {order.user.name} <br /> Email: {order.user.email}
                </p>
                <p>
                    Metodo de pago: {order.payment_method === "CASH" ? "Efectivo" : "Tarjeta"}
                    <br /> Total: ${order.total}
                </p>
                <ButtonCustom 
                    text={order.status === 'OPEN' ? 'Cerrar pedido' : 'Reabrir pedido'}
                    styles={{backgroundColor: "primary"}}
                    onClick={changeStatusOrder}
                />
            </Box>
                {order.products_of_sales.map((product) => (
                    <OrderItem product={product} key={product.id + product.name}/>                 
                ))}
        </Box>
    );
};

export default Order;
