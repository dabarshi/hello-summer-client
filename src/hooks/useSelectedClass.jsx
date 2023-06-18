import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useSelectedClass = () => {
    const { user } = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { isLoading, data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        queryFn: async () => {
            const response = await axiosSecure(`/selectedClasses?email=${user?.email}`)
            return response.data;
        },
        // queryFn: async () => {
        //     const response = await fetch(`https://b7a12-summer-camp-server-side-dabarshi.vercel.app/selectedClasses?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return response.json();
        // },
    })

    return [selectedClasses, refetch, isLoading]
};

export default useSelectedClass;