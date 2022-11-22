import { useEffect, useState } from 'react';
import { axiosClient } from '../clients/axios.client';


interface Options {
    url: string;
    method?: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
    data?: any;
};

const controller = new AbortController();
/**
 * Custom hook para poder realizar peticiones HTTP
 * @param initialState Estado inicial 
 * @param options url: url a la que se hara la peticion, method: verbo que se utilizara para la peticion ('GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'), data: valor que se retornara de la peticion
 * @returns isLoading: estado que muestra si la peticion esta cargando, response: respuesta de la peticion
 */
export const useAxios = <T>(
    initialState: T,
    {
        url,
        method = 'GET',
        data
    }: Options
) => {

    const [ response, setResponse ] = useState<T>( initialState );
    const [ isLoading, setIsLoading ] = useState<boolean>( false );

    const request = async () => {
        if ( method === 'GET' || method === 'DELETE' ) {
            await axiosClient<T>({
                method,
                url,
            })
            .then( response => setResponse( response.data ))
            .catch( error => console.log( error ));

            return;
        }

        await axiosClient<T>({
            method,
            data,
            url,
        })
        .then( response => setResponse( response.data ))
        .catch( error => console.log( error ));
        return;
    }

    useEffect(() => {
        setIsLoading( true );
        request().then( () => setIsLoading( false ));
    }, []);

    return { response, isLoading };
}
