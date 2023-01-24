import { useContext, useEffect, useState } from "react";
import { axiosClient } from "../clients/axios.client";
import { ResponseLogin } from "../clients/interface";
import { AuthContext } from "../context";

export const useRenew = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { userState: { user }, dispatchUser } = useContext(AuthContext);

    useEffect(() => {
        axiosClient
            .get<ResponseLogin>("/auth/renew")
            .then(({ data }) => {
                localStorage.setItem("token", data.token);
                dispatchUser({ type: "login", payload: data.user });
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error); 
                setIsLoading(false);
            });
    }, []);

    return { isLoading, user };
};
