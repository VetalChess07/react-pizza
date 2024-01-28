import React from 'react'
import style from './PayBlock.module.scss'

const PayTable = ({items, totalPrice, totalCount}) => {
 
  return (
//    <table>
//     <thead>
//       <tr>
//           <th>Id</th>
//           <th>Картинка</th>
//           <th>Название пиццы</th>
//           <th>Размер</th>
//           <th>Тип теста</th>
//           <th>Кол-во штук</th>
//           <th>Цена за штуку</th>  
//           <th>Общас стоимость</th>
//       </tr>
//     </thead>
//     <tbody>
//        {
//     items.map(item => 
//     <tr>  
//       <div> {item.id}</div>
//       <div> <img src={item.imageUrl} alt={item.title} /></div>
//       <div>{item.title}</div>
//       <div>{item.sizes}</div>
//       <div>{item.type}</div>
//       <div>{item.count}</div>
//       <div>{item.price}</div>
//       <div>{item.price * item.count}</div>
//     </tr> 
//     )
//    }
//     </tbody>
  
//   <tfoot>
//     <tr >
//     <div colspan="2">Итого:</div>
//     <div colspan="3"> Стоимость заказа: {totalPrice} p </div>
//     <div colspan="3"> Общее кол-во пицц: {totalCount} шт </div>
    
//    </tr>
//   </tfoot>
   
 
 
  
   
//  </table>
<>
<div className={style.table}>
   <div className={style.item}>Id</div>
   <div className={style.item}>Картинка</div>
   <div className={style.item}>Название</div>
   <div className={style.item}>Размер</div>
   <div className={style.item}>Тип теста</div>
   <div className={style.item} >Кол-во штук</div>
   <div className={style.item} >Цена за штуку</div>  
   <div className={style.item}>Cтоимость</div>
  {items.map(item => 
   <>
      <div className={style.item}> 
        {item.id}
      </div>
      <div className={style.item}>
         <img src={item.imageUrl} alt={item.title} />
      </div>
      <div className={style.item}>
        {item.title}
      </div>
       <div className={style.item}>
        {item.sizes}
      </div>
      <div className={style.item}>
        {item.type}
      </div>  
      <div className={style.item}>{item.count}</div>   
         <div className={style.item}>{item.price}</div>
       <div className={style.item}>{item.price * item.count}</div>  
      
   </>
      
   )    }
    
  </div>
  <div className={style.result}>
     <h2>Итог:</h2> <br />
  <p>Кол-во пицц: <span>{totalCount}</span> </p>
  <p>Сумма заказа: <span>{totalPrice}</span></p>
  </div>
 
</>
  
  )
}

export default PayTable