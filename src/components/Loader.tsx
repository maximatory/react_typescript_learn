import { ReactNode } from "react";

interface LoaderProps {
    children: ReactNode
}

const Loader = ({children}: LoaderProps)=>{
    return(
        <div className='text-center text-red-600 font-bold'>{children}</div>
    )
}

export default Loader;