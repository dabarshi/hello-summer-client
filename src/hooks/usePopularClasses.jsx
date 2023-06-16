import { useQuery } from '@tanstack/react-query'
// import { useContext } from 'react';
// import { AuthContext } from '../providers/AuthProvider';

const usePopularClasses = () => {
    // const {user} = useContext(AuthContext);

    const { isLoading, data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const response = await fetch(`https://b7a12-summer-camp-server-side-dabarshi-dabarshiroy-gmailcom.vercel.app/popularClasses`)
            return response.json();

        },
    })

    return [classes, isLoading]
};

export default usePopularClasses;