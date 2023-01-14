import { useEffect } from "react";


import { TableUsers } from "./components";
import { ResponseUsers } from "./interface";
import { Paginate } from "../../../../components";
import { UsersContainer } from "./styled-components";
import { useAxios, usePaginate } from "../../../../hooks";
import { SpinnerStyled } from "../../../../styled-components";


const UsersPage = () => {
    const paginate = usePaginate();
    const {isLoading, response: users, request } = useAxios<ResponseUsers>({} as ResponseUsers, {
        url: `/admin/users?page=${paginate.actualPage}`,
        method: 'GET',
        enable: false
    });

    useEffect(() => {
        request();
    }, [paginate.actualPage]);

    if(isLoading) {
        return <SpinnerStyled />
    }

    return (
        <UsersContainer>
            <TableUsers users={users.data} />
            <Paginate
                propsPaginate={paginate}
                next={users.nextPage}
                previous={users.previousPage}
            />
        </UsersContainer>
    );
}

export default UsersPage