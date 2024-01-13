import React from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom'

import style from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
   const navigate = useNavigate()
   const goBack =()=>  navigate(-1)
   
  return (
    <div className={style.root}>
      <h1>404</h1>
      <br />
      <span>
         Страница не найдена! <br />
         Вернитесь на предыдущую страницу</span>
      <br />
      <button className={style.btn} onClick={goBack}>назад</button>
    </div>
    

  )
}

export default NotFoundBlock