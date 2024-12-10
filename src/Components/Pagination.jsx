import React from 'react'
import {StepBackwardFilled,StepForwardFilled,CaretLeftFilled,CaretRightFilled} from '@ant-design/icons'

const Pagination = ({pageNo,setPageNo, handleNext, handlePrevious}) => {
  return (
    <div className='bg-gray-800 p-4 h-[50px] w-full mt-8 flex justify-center gap-2 text-pink-400 text-xl max-width-7xl rounded-xl opacity-90'>
        <div onClick={()=>{setPageNo(1)}} className='px-1 hover:cursor-pointer'><StepBackwardFilled /></div>
        <div onClick={handlePrevious} className='pr-1 hover:cursor-pointer'><CaretLeftFilled/></div>
        <div>{pageNo}</div>
        <div onClick={handleNext} className='pl-1 hover:cursor-pointer'><CaretRightFilled/></div>
        <div onClick={()=>{setPageNo(500)}} className='px-1 hover:cursor-pointer'><StepForwardFilled /></div> 
    </div>
  )
}

export default Pagination