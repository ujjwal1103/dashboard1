import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Client from './Client'
import './products.css'
import './card.css'

const ClientList = () => {

    const [client, setClient] = useState([])
    const [showClient,setShowClient] = useState(false)
    useEffect(() => {
        return () => {
            axios.get('https://dummyjson.com/users')
           .then((res) => {
            setClient(res.data.users)
            // console.log(res.data.users)
        },[client]) 
        }
    },)
  function fetchClients(){
    setShowClient(true)  
  }

  function fetchClients2(){
    setShowClient(false)
  }
    
  return (
    <div className='products'>
        {!showClient && <button onClick={fetchClients}>Show Clients</button>}

        {showClient &&<button onClick={fetchClients2}>Hide Clients</button>}

       
        <div className="clients">
        <div className="headings">
          <span className='id'>Id</span>
          <span className='name2'>Name</span>
          <span className='email'>Email</span>
          <span className='phone'>Phone No</span>
          <span className='rating'>Gender</span>
         </div> 
         {showClient && <Client data={client}/>}
            
        </div>
    </div>
  )
}

export default ClientList