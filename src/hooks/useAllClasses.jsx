import { useQuery } from '@tanstack/react-query'

const useAllClasses = () => {
    const { isLoading, data: allClasses = [] } = useQuery({
        queryKey: ['allClasses'],
        queryFn: async () => {
            const response = await fetch(`https://b7a12-summer-camp-server-side-dabarshi.vercel.app/classes`)
            return response.json();

        },
    })

    return [allClasses, isLoading]
};

export default useAllClasses;