import React, { useEffect, useState } from 'react';
import Product from './components/Product';
import axios from 'axios';
import { Iproduct } from './models';

function App() {
  const [products, setProducts] = useState<Iproduct[]>([])

  async function fetchProducts(){
    const response = await axios.get<Iproduct[]>('https://fakestoreapi.com/products?limit=5')
    setProducts(response.data)
  }

  useEffect(()=>{
    fetchProducts();
  }, [])

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {products.map(product=> <Product product={product} key={product.id}/>)}
    </div>
  )
}

export default App;
