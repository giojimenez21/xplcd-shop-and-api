import ProductCard from "./component/ProductCard"
import ProductsContainer from "./styled-components/ProductsContainer.styled"

const Products = () => {
    return (
        <ProductsContainer>
            <ProductCard name="Samsung S20" price={550}/>
            <ProductCard name="Samsung S20" price={550}/>
            <ProductCard name="Samsung S20" price={550}/>
            <ProductCard name="Samsung S20" price={550}/>
            <ProductCard name="Samsung S20" price={550}/>
            <ProductCard name="Samsung S20" price={550}/>
            <ProductCard name="Samsung S20" price={550}/>
        </ProductsContainer>
    )
}

export default Products