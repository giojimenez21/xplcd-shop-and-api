import axios, { AxiosError, AxiosResponse } from "axios";
import { createStandaloneToast } from "@chakra-ui/react";

const baseURL = import.meta.env.VITE_API_URL;
const { toast } = createStandaloneToast();

export const axiosClient = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosClient.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    req.headers!["x-token"] = token;
    return req;
});

axiosClient.interceptors.response.use(
    (res: AxiosResponse) => res,
    (error: AxiosError<{ msg: string }>) => {
        if (error.response?.status! > 201) {
            toast({
                title: error.response?.data.msg,
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "bottom-right",
            });
        }
    }
);
