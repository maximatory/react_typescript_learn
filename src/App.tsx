import React, { useEffect, useState } from 'react';
import Product from './components/Product';
import axios, { AxiosError } from 'axios';
import { Iproduct } from './models';

function App() {
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

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <div>Loading...</div>}
      {error && <div className='text-center text-red-600 font-bold'>{error}</div>}
      {products.map(product=> <Product product={product} key={product.id}/>)}
    </div>
  )
}

export default App;
