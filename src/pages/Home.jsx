import React, {useState, useEffect,useContext, useRef} from 'react'
import axios from 'axios'
import qs from 'qs'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { BiSolidError } from "react-icons/bi";
import {selectFilter, setCategoryId, setCurrentPageCount, setFilters} from '../redux/slices/filterSlice'
import { fetchPizzas, selectPizza} from '../redux/slices/pizzasSlice'


import Category from "../components/Category/Category";
import Sort from "../components/Sort/Sort";
import {list} from "../components/Sort/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Sceleton from "../components/PizzaBlock/Skeleton";
import Pagination from '../components/Pagination/Pagination';

import {SearchContext} from '../App'

const Home = () => {
  const navigate = useNavigate() 
  const dispatch = useDispatch()
  const isSearch = useRef(false)
  const isMounted = useRef(false)
  const {categoryId, sort, currentPage, searchValue} = useSelector(selectFilter)
  const {items, status}= useSelector(selectPizza)   
  const sortType = sort.sortProperty

 // const sortType = useSelector(state=> state.filter.sort.sortProperty)
  const onClickCategory =(id)=>{
    console.log(id)
    dispatch(setCategoryId(id))
  }
  const onChangePage =(number) =>{
    dispatch(setCurrentPageCount(number ))
  }


  // const [items, setItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [categoryId, setCategoryId] = useState(0);
  // const [sortType, setSortType] = useState({name:"популярности", sort:"rating"});
  
  // const [currentPage, setCurrentPage] = useState(1)

  const sortBy = sortType.replace('-','')
  // const search = searchValue ? `&search=${searchValue}`:'';
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const order = sortType.includes('-')?'asc':'desc';

  const getPizzas = async () =>{
    
    
 
    // const {data} = await axios.get(`https://6592cf5bbb12970719901142.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}`)
  
    dispatch(fetchPizzas({
      sortBy,
      category,
      order,
      currentPage,
    }))
  
    
  window.scrollTo(0, 0);
  
 
  }
  console.log(items)
 
 

  useEffect(() => {
   if(!isSearch.current){
   
    getPizzas()
   }

   isSearch.current = false
   
    // console.log(`https://6592cf5bbb12970719901142.mockapi.io/pizzas?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`,)

  }, [categoryId, sortType, currentPage ]);

  useEffect(()=>{
    if(window.location.search){
      const params = qs.parse(window.location.search.substring(1))
      console.log(params)
      const sort = list.find(obj => obj.sortProperty === params.sortProperty)
   
      dispatch(setFilters({
        ...params, sort
      }))
      isSearch.current = true
    }
  }, [])

  useEffect(()=>{
    if(isMounted.current){
     
        const queryString = qs.stringify({
      sortProperty: sort.sortProperty,
      categoryId,
      currentPage
    });
     navigate(`?${queryString}`);
     
    }
  
    isMounted.current = true
   
  },  [categoryId, sortType, currentPage ])

  const pizzas =   items.filter(obj => obj.title.toLowerCase().includes(searchValue.toLowerCase())? true : false ).map((obj) => <PizzaBlock key={obj.id} {...obj} />)
  const skeletons = [...new Array(4)].map((_, index) => <Sceleton key={index} />)
  return (
     <>
      <div className="content__top">
        <Category value={categoryId} onClickCategory={onClickCategory} /> 
        <Sort  />
     </div>
     <h2 className="content__title">Все пиццы</h2>
     
      {status === 'error' 
      ? 
      <div className='content__error'>
        <h2 className='content__error-title'>
          Произошла ошибка <BiSolidError className='content__error-title-icon' />
        </h2>
        <p className='content__error-text'>
          Нам очень жаль(
         
          попробуйте зайти чуть позже или перезагрузить приложение.
        </p>
      </div>
      :<div className="content__items">
       { status ==='loading'
         ? skeletons
         : pizzas 
          }
      </div>
      }
   
     <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
     </>
  )
}

export default Home