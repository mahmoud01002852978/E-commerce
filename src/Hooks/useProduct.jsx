import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function useProduct() {

  function getproduct() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products');
  }

  let productinfo = useQuery({
    queryKey: ["recquary"],
    queryFn: getproduct,
    staleTime: 10000,
    gcTime: 4000,

  });

  return productinfo


}