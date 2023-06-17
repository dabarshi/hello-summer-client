import { useQuery } from '@tanstack/react-query'

const useAllUser = () => {
    const { isLoading, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/users`)
            return response.json();

        },
    })

    return [users, isLoading]
};

export default useAllUser;