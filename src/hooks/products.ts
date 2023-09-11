import React, {useState, useEffect} from "react";
import { Iproduct } from "../models";
import axios, { AxiosError } from 'axios';

const useProducts = ()=>{
    const [products, setProducts] = useState<Iproduct[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  
    async function fetchProducts(){
      try{
        setError('')
        setLoading(true)
        const response = await axios.get<Iproduct[]>('https://fakestoreapi.com/products?limit=5')
        setProducts(response.data)
        setLoading(false)
      } catch(e: unknown){
        const error = e as AxiosError;
        setLoading(false)
        setError(error.message)
      }
    }
  
    useEffect(()=>{
      fetchProducts();
    }, [])
    
    return{
        products,
        loading,
        error
    }
}

export default useProducts;