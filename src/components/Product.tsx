import { useState } from 'react';
import { Iproduct } from '../models';

interface ProductProps {
    product: Iproduct;
}

const Product = ({product}: ProductProps)=>{
    const [details, setDetails] = useState(false)
    const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400'
    const btnClasses = ['py-2 px-4 border', btnBgClassName]

    return(
        <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
            <img src={product.image} alt={product.title} className='w-1/6'/>
            <p className='mt-2' >{product.title}</p>
            <span className='font-bold'>{product.price}</span>
            <button 
                className={btnClasses.join(' ')}
                onClick={()=> setDetails(prev=>!prev)
                }>
                    {details ? 'hide details' : 'show details'}
                </button>
            {details &&
                <div>
                    <p>{product.description}</p>
                    <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
                </div>
            }
        </div>
    )
}

export default Product;