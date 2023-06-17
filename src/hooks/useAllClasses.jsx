import { useQuery } from '@tanstack/react-query'

const useAllClasses = () => {
    const { isLoading, data: allClasses = [] } = useQuery({
        queryKey: ['allClasses'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/classes`)
            return response.json();

        },
    })

    return [allClasses, isLoading]
};

export default useAllClasses;