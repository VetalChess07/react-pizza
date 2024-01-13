import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchPizzas } from '../redux/slices/pizzasSlice'

const FullPizza = () => {

   const {id} = useParams()
   const navigate = useNavigate()

   const [fullPizza, setFullPizza] = useState()

   useEffect(()=>{
      const fetchPizzas = async () =>{
         try{
             const {data} = await ( axios.get(`https://6592cf5bbb12970719901142.mockapi.io/pizzas/${id}`)) 
     setFullPizza(data)
     console.log(`https://6592cf5bbb12970719901142.mockapi.io/pizzas/6`)
     
         }
         catch(err){
            alert(`ошибка при получение пиицы. Такой пицц нет(. Мы вернем вас на главную.`)
            navigate('/')
         }
         }
         fetchPizzas()
    
   }, [])

   console.log(fullPizza)
   
   

  return (
    <div>
     {!fullPizza 
      ? <h1>Загрузка...</h1>
      :( <>
         <img className='pizza-block__image' src={fullPizza.imageUrl} alt="" />
         <h1>{fullPizza.title}</h1>
         <h4>{fullPizza.price} p</h4>
      </>)
   }
      
    </div> 
  )
}

export default FullPizza