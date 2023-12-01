import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const useProduct = () => {
    const { user, loading } = useContext(AuthContext)
    const token = localStorage.getItem("access-token")
    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['products', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products/${user?.email}`, {
                headers: { authorization: `bearer ${token}` }

            });
            const data = await res.json();
            return data;
        }
    })
    return [products, refetch, isLoading]
};

export default useProduct;