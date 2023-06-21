import React, {useContext} from 'react'
import DataContext from './context/notes/dataContect'
import AddBalance from './addBalance';


export default function Transfer(props) {
  const context = useContext(DataContext);
  const {data} = context;
   
  return (
    <>
            <div className="my-3">    
                    
               <h1 className='text-center my-3'>Transfer Money To</h1>
                {data.map((data)=>{
                   return <AddBalance key={data._id} data={data}/>;
                })}
            </div>
    </> 
  )
}
