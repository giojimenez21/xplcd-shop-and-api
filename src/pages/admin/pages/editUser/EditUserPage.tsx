import { useParams } from "react-router-dom"
import { useAxios } from "../../../../hooks"
import { ContainerStyled, SpinnerStyled } from "../../../../styled-components"
import { CardEditUser } from "./components";
import { ResponseUser } from "./interface";

const EditUserPage = () => {
    const { id } = useParams();
    const {isLoading, response: userData} = useAxios<ResponseUser>({} as ResponseUser, { 
        url: `/admin/userById/${id}` 
    });

    if(isLoading) {
        return <SpinnerStyled />
    }

    return (
        <ContainerStyled margin="2rem auto">
            <CardEditUser user={userData}/>
        </ContainerStyled>
    )
}

export default EditUserPage