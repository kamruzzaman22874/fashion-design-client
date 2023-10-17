import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const useProduct = () => {
    const { user } = useContext(AuthContext)
    const { data : products = [], refetch, isLoading } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`);
            return res.json()
        }
    })
    return [products, refetch, isLoading]
};

export default useProduct;