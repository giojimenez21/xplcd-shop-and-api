import { FindUs, LoginOrRegister } from "./components";
import { ContainerMainStyled } from "./styled-components";
import { ContainerStyled } from "../../styled-components";

const Main = () => {
    return (
        <ContainerStyled margin="4rem auto">
            <ContainerMainStyled>
                <LoginOrRegister />
                <FindUs />
            </ContainerMainStyled>
        </ContainerStyled>
    );
};

export default Main;
