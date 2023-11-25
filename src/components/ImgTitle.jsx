import { Link } from '@mui/material'
import React from 'react'

const ImgTitle = ({title, img}) => {
  return (
      <div>
          <div className="flex w-full  items-center gap-4">
              <img src={img} alt="" className='p-2 bg-slate-300' />
              <a className='text-slate-900 text-[16px]' href="">{title}</a>
          </div>
    </div>
  )
}

export default ImgTitle