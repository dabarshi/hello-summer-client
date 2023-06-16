import { useQuery } from '@tanstack/react-query'
// import { useContext } from 'react';
// import { AuthContext } from '../providers/AuthProvider';

const usePopularClasses = () => {
    // const {user} = useContext(AuthContext);

    const { isLoading, data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/classes`)
            return response.json();

        },
    })

    return [classes, isLoading]
};

export default usePopularClasses;