import React from 'react'
import ReactPaginate from 'react-paginate';

import style from './pagination.module.scss'

const Pagination = ({currentPage,onChangePage}) => {
  return (
    <div>  <ReactPaginate
    className={style.root}
    breakLabel="..."
    nextLabel=" >"
    onPageChange={event => onChangePage(event.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={3}
    forsePage={currentPage - 1}
    previousLabel="< "
    renderOnZeroPageCount={null}
  /></div>
  )
}

export default Pagination