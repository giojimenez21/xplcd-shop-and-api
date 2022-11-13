import axios, { AxiosError, AxiosResponse } from "axios";
import { createStandaloneToast } from "@chakra-ui/react";

const baseURL = import.meta.env.VITE_API_URL;
const { toast } = createStandaloneToast();

export const axiosClient = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        "x-token": localStorage.getItem('token')
    },
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
