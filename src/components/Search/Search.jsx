import React, { useCallback, useContext, useRef, useState, memo, useEffect } from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { IoMdSearch } from "react-icons/io";
import style from './search.module.scss'

import debonce from 'lodash.debounce'

import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
import { selectFilter } from '../../redux/slices/filterSlice';




const Search = memo( () => {
  const {searchValue} = useSelector(selectFilter)
  const [value, setValue] = useState(searchValue)
  const inputRef = useRef()
  console.log( "searchValue" + searchValue,  value)

  const dispatch = useDispatch()

  useEffect(()=>{
    console.log('ffff')
    setValue('')
    dispatch(setSearchValue(''))
  },[])

  useEffect(()=>{
   console.log('fff')
    setValue('')
    dispatch(setSearchValue(''))
  },[setSearchValue])
 
  
 const onChangeInputSearch =(e)=>{
    setValue(e.target.value)
    updateSearchValue(e.target.value)
  }

  const updateSearchValue = useCallback(
    debonce((str) =>{
     dispatch(setSearchValue(str))
      console.log(str)
    }, 500),
    [],
  )
  

  const onClickClear = () =>{
    setValue('')
    dispatch(setSearchValue(''))
   
    inputRef.current.focus()
  } 
  
  return (
   <div className={style.search}>
      <IoMdSearch  className={style.search__icon} /> 
      <input ref={inputRef} onChange={(e) => onChangeInputSearch(e) } value={value} className={style.search__input} placeholder='найти пиццу!' type="text" />
     {value &&  <TiDeleteOutline onClick={onClickClear}  className={style.search__delete} /> }
   </div>
   )
})

export default Search