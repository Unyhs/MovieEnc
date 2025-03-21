import React from 'react'
import {StepBackwardFilled,StepForwardFilled,CaretLeftFilled,CaretRightFilled} from '@ant-design/icons'

const Pagination = ({pageNo,setPageNo, handleNext, handlePrevious}) => {
  return (
    <div className='pagination-Container'>
        <button onClick={()=>{setPageNo(1)}} disabled={pageNo==1} className='pagination-Container-Icons'><StepBackwardFilled /></button>
        <button onClick={handlePrevious} disabled={pageNo==1} className='pagination-Container-Icons'><CaretLeftFilled/></button>
        <div>{pageNo}</div>
        <button onClick={handleNext} disabled={pageNo==500} className='pagination-Container-Icons'><CaretRightFilled/></button>
        <button onClick={()=>{setPageNo(500)}} disabled={pageNo==500} className='pagination-Container-Icons'><StepForwardFilled /></button> 
    </div>
  )
}

export default Pagination