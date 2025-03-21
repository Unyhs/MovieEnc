import React from 'react'
import {VideoCameraFilled} from '@ant-design/icons'
import { motion } from "motion/react"

function Loader() {
  return (
    <div className='bg-gray-900 h-[80vh] flex justify-center'>
        <motion.div
        animate={{
            rotateZ:[0,180,360],
            color:['#db2777','#00ffff','#db2777']
        }}><VideoCameraFilled /></motion.div>
    </div>
  )
}

export default Loader
