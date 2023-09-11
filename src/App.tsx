import React, { useEffect, useState } from 'react';
import Product from './components/Product';
import axios from 'axios';
import { Iproduct } from './models';

function App() {
  const [products, setProducts] = useState<Iproduct[]>([])
  const [loading, setLoading] = useState(false);

  async function fetchProducts(){
    setLoading(true)
    const response = await axios.get<Iproduct[]>('https://fakestoreapi.com/products?limit=5')
    setProducts(response.data)
    setLoading(false)
  }

  useEffect(()=>{
    fetchProducts();
  }, [])

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && 
        <div>Loading...</div>
      }
      {products.map(product=> <Product product={product} key={product.id}/>)}
    </div>
  )
}

export default App;
