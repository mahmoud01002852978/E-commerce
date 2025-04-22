import React from "react";
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function useCategory(){

 function getproduct() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/categories');
  }

  let productinfo = useQuery({
    queryKey : ["recquary"],
    queryFn: getproduct,
    staleTime :10000,
    gcTime : 4000,

  });

return productinfo


}