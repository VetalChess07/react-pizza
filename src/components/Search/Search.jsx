import React, { useCallback, useContext, useRef, useState } from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { IoMdSearch } from "react-icons/io";
import style from './search.module.scss'

import debonce from 'lodash.debounce'

import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

const Search = () => {
  const dispatch = useDispatch()

 
  const [value, setValue] = useState('')
  const inputRef = useRef()

  const updateSearchValue = useCallback(
    debonce((str) =>{
     dispatch(setSearchValue(str))
      console.log(str)
    }, 500),
    [],
  )
  const onChangeInputSearch =(e)=>{
    setValue(e.target.value)
    updateSearchValue(e.target.value)
  }

  const onClickClear = () =>{
    dispatch(setSearchValue(value))
    setValue('')
    inputRef.current.focus()
  } 
  
  return (
   <div className={style.search}>
      <IoMdSearch  className={style.search__icon} /> 
      <input ref={inputRef} onChange={(e) => onChangeInputSearch(e) } value={value} className={style.search__input} placeholder='найти пиццу!' type="text" />
     {setSearchValue &&  <TiDeleteOutline onClick={onClickClear}  className={style.search__delete} /> }
   </div>
   )
}

export default Search