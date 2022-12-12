import { useAxios } from "../../../hooks";
import { ResponseAllUsers } from "./interface";
import { SpinnerStyled } from "../../../styled-components";
import { TableUsers } from "./components";

const UsersPage = () => {
    const {isLoading, response: users } = useAxios<ResponseAllUsers[]>([], {
        url: '/admin/users',
        method: 'GET'
    });

    if(isLoading) {
        return <SpinnerStyled />
    }

    return (
        <TableUsers users={users}/>
    )
}

export default UsersPage