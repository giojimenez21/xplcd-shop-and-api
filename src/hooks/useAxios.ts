import { useEffect, useState } from 'react';
import { axiosClient } from '../clients/axios.client';



interface Options {
    url: string;
    method?: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
    data?: any;
    enable?: boolean;
};

/**
 * Custom hook para poder realizar peticiones HTTP
 * @param initialState Estado inicial 
 * @param options url: url a la que se hara la peticion, method: verbo que se utilizara para la peticion ('GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'), data: valor que se retornara de la peticion, enable: activar la primera llamada, por defecto es true
 * @returns isLoading: estado que muestra si la peticion esta cargando, response: respuesta de la peticion
 */
export const useAxios = <T>(
    initialState: T,
    {
        url,
        method = 'GET',
        data,
        enable = true,
    }: Options
) => {

    const [ response, setResponse ] = useState<T>( initialState );
    const [ isLoading, setIsLoading ] = useState<boolean>( false );

    /**
     * Funcion para hacer la request
     * reqData = data a enviar
     * @param reqData 
     * @return retorna el estado de la llamada
     */
    const request = async ( reqData = data ) => {
        setIsLoading( true );
        if ( method === 'GET' || method === 'DELETE' ) {
            await axiosClient<T>({
                method,
                url
            })
            .then( data => setResponse( data.data ))
            .catch( error => console.log( error ));
            setIsLoading( false );
            return response;
        }

        await axiosClient<T>({
            method,
            data: reqData,
            url
        })
        .then( data => setResponse( data.data ))
        .catch( error => console.log( error ));
        setIsLoading( false );
        return response;
    }

    useEffect(() => {
        if ( enable ) {
            request();
        }
    }, []);

    return { response, isLoading, request };
}