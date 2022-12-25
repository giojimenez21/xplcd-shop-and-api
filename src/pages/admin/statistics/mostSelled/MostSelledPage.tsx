import { useAxios } from "../../../../hooks";
import { ResponseMostSelled } from "./interface";
import { ContainerStyled, SpinnerStyled } from "../../../../styled-components";

const MostSelledPage = () => {
    const { isLoading, response: products } = useAxios<ResponseMostSelled[]>([],{
        url: "/admin/getMostSelleDProducts",
    });

    if (isLoading) {
        return <SpinnerStyled />;
    }

    return (
        <ContainerStyled margin="2rem auto">
            <ol>
                {products.map((product) => (
                    <li key={product.id} style={{marginBottom:"1rem"}}>
                        <p>
                            <strong>Nombre:</strong> {product.display_name}
                        </p>
                        <p>
                            <strong>Vendidos:</strong> {product.quantity}
                        </p>
                    </li>
                ))}
            </ol>
        </ContainerStyled>
    );
};

export default MostSelledPage;
