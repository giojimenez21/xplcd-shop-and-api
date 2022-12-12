import { useEffect } from "react";

import { useAxios } from "../../hooks"
import { prepareLists } from "./helpers";
import { TableLists } from "./components";
import { ResponseLists } from "./interface"
import { ContainerStyled, SpinnerStyled } from "../../styled-components"

const ListPage = () => {
    const { isLoading, response: lists } = useAxios<ResponseLists[]>([], {
        url: '/lists/getLists'
    });
    

    if(isLoading) {
        return <SpinnerStyled />
    }

    return (
        <ContainerStyled margin="1rem auto">
            <TableLists lists={prepareLists(lists)}/>
        </ContainerStyled>
    )
}

export default ListPage