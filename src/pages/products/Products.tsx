
import { useAxios } from "../../hooks";
import ProductCard from "./component/ProductCard"
import { SpinnerStyled } from "../../styled-components";
import { ResponseProduct } from "../../clients/interface";
import ProductsContainer from "./styled-components/ProductsContainer.styled"

const Products = () => {

    const { isLoading, response } = useAxios<ResponseProduct[]>([],{
        url: "/products",
        method: "GET"
    });

    if(isLoading) {
        return <SpinnerStyled />
    }
    
    return (
        <ProductsContainer>
            {response.map((product) => (
                <ProductCard product={product} key={product.id}/>
            ))}
        </ProductsContainer>
    );
}

export default Products;