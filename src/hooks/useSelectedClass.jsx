import { useQuery } from '@tanstack/react-query'

const useSelectedClass = () => {
    const { isLoading, data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch(`https://b7a12-summer-camp-server-side-dabarshi.vercel.app/users`)
            return response.json();
        },
    })

    return [users, refetch, isLoading]
};

export default useSelectedClass;