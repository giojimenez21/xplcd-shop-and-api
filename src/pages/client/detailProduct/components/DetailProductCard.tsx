import  * as Yup from 'yup';
import { useContext } from "react";
import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { Box, Text, useToast } from "@chakra-ui/react";

import { useAxios } from "../../../../hooks";
import { ProductImage } from "../../products";
import { ProductContext } from "../../../../context";
import { SpinnerStyled } from "../../../../styled-components";
import { ResponseProductId } from "../../../../clients/interface";
import { ButtonCustom, NumberInputCustom } from "../../../../components";
import { DetailCardContainer, DetailInfoCardContainer } from "../styled-components";

const DetailProductCard = () => {
    const toast = useToast();
    const { id } = useParams();
    const { dispatchProduct } = useContext(ProductContext);
    const { isLoading, response: product } = useAxios<ResponseProductId>(
        {} as ResponseProductId,
        {
            url: `/products/getProductById/${id}`,
            method: "GET",
        }
    );

    if (isLoading) {
        return <SpinnerStyled />;
    }

    return (
        <DetailCardContainer>
            <DetailInfoCardContainer>
                <Box gridColumn="1/2">
                    <Text as="h1" fontWeight="bold" fontSize="3xl">
                        {product.name}
                    </Text>
                    <Text fontSize="xl">Descripción:</Text>
                    <Text>
                        Pieza: {product.description} <br />
                        Calidad: {product.type} <br />
                        Color: {product.color} <br />
                    </Text>
                    <Text as="span" fontSize="2xl">
                        Precio: ${product.list_price}
                    </Text>
                </Box>
                <ProductImage image={product.image} gridColumn="2/4" />
            </DetailInfoCardContainer>
            <Formik
                initialValues={{
                    name: product.name,
                    price: product.list_price,
                    quantity: 0,
                }}
                validationSchema={Yup.object({
                    quantity: Yup.number().min(1, "La cantidad debe ser mayor a 0.")
                })}
                onSubmit={(values, { resetForm }) => {
                    dispatchProduct({type: "addCar", payload: { id: product.id, ...values }});
                    resetForm();
                }}
            >
                {(formik) => (
                    <Form noValidate>
                        <Text as="span" fontSize="lg">
                            Cantidad:
                        </Text>
                        <NumberInputCustom
                            name="quantity"
                            defaultValue={0}
                            min={0}
                            max={product.quantity}
                        />
                        <ButtonCustom
                            text="Agregar al carrito"
                            type="submit"
                            styles={{
                                backgroundColor: "primary",
                                margin: "1rem auto",
                                display: "block",
                            }}
                        />
                    </Form>
                )}
            </Formik>
        </DetailCardContainer>
    );
};

export default DetailProductCard;
