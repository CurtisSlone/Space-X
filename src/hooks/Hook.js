/*
Code base taken from https://github.com/sanjayrjs16/spaceX-dashboard-react/blob/master/src/hooks/useApiCall.ts

Reformatted for JS

Used as base to understand implementation of API call

*/
import axiosConfig from './axios'
import { useQuery } from 'react-query'

export default function useApiCall(baseUrl, resource, queryParams, string, method, key, options, query){
    const makeApiCall = async () => {
        let data
        data = await axiosConfig({
            url: baseUrl+resource+queryParams,
            method,
            data: {
                "query": {...query},
                "options": {...options}
            }
        })
        return await data.data
    }

    const { status, data, error, isFetching, isPreviousData, refetch } = useQuery(
        [key],
        () => makeApiCall(),
        {keepPreviousData: true, staleTime: 5000}
    )
    return { status, data, error, isFetching, isPreviousData, refetch}
}