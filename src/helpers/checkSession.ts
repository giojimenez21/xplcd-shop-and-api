import { axiosClient } from "../clients/axios.client"
import { ResponseLogin } from "../clients/interface";

export const checkSession = async() => {
    const response = await axiosClient.get<ResponseLogin>('/auth/renew');
    localStorage.setItem('token', response.data.token);
    return response.data.user;
}