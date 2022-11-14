import { Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react"
import { axiosClient } from "../../clients/axios.client";
import { ResponseProducts } from "../../clients/interface";
import { ProductContext } from "../../context";
import ProductCard from "./component/ProductCard"
import ProductsContainer from "./styled-components/ProductsContainer.styled"

const Products = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { productState, dispatchProduct } = useContext(ProductContext);

    useEffect(() => {
        axiosClient.get<ResponseProducts>('/products')
            .then((response) => {
                setIsLoading(false);
                dispatchProduct({type: 'getAllProducts', payload: response.data.phones});
            })
            .catch(() => setIsLoading(false));
    }, []);

    if(isLoading) {
        return <Spinner />
    }
    
    return (
        <ProductsContainer>
            {productState.products.map((product) => (
                <ProductCard product={product} key={product.id}/>
            ))}
        </ProductsContainer>
    );
}

export default Products;