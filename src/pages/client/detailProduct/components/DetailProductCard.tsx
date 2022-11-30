import { useContext } from "react";
import { Form, Formik } from "formik";
import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react";

import { useAxios } from "../../../../hooks";
import { ButtonCustom } from "../../../../components";
import { SpinnerStyled } from "../../../../styled-components";
import { ResponseProductId } from "../../../../clients/interface";
import { ProductContext } from "../../../../context";
import DetailCardContainer from "../styled-components/DetailCardContainer.styled";

const DetailProductCard = () => {
    const { id } = useParams();
    const { dispatchProduct } = useContext(ProductContext);
    const { isLoading, response } = useAxios<ResponseProductId>(
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
            <Text as="h1" fontWeight="bold" fontSize="3xl">
                {response.name}
            </Text>
            <Text fontSize="xl">
                Descripción:
            </Text>
            <Text>
                Tipo: {response.type} <br/>
                Color: {response.color} <br/>
                Cantidad dispnible: {response.quantity}
            </Text>
            <Text as="span" fontSize="2xl">
                Precio: ${response.list_price}
            </Text>
            <Text as="span" fontSize="lg">
                Cantidad:
            </Text>
            <Formik
                initialValues={{
                    name: response.name,
                    price: response.list_price,
                    quantity: 1,
                }}
                onSubmit={(values) =>
                    dispatchProduct({
                        type: "addCar",
                        payload: { id: response.id, ...values },
                    })
                }
            >
                {(formik) => (
                    <Form noValidate>
                        <NumberInput
                            min={1}
                            max={response.quantity}
                            defaultValue={1}
                            onChange={(value) =>
                                (formik.values.quantity = parseInt(value))
                            }
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
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
