import Product from './components/Product';
import useProducts from './hooks/products';

function App() {
  const {products, error, loading} = useProducts()
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <div>Loading...</div>}
      {error && <div className='text-center text-red-600 font-bold'>{error}</div>}
      {products.map(product=> <Product product={product} key={product.id}/>)}
    </div>
  )
}

export default App;
