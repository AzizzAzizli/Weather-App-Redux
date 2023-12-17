import React from 'react'

export const Card = ({head,body }) => {
  return (
      <div style={{height:"auto",maxHeight:"130px"}} className=' text-white w-4/12   flex flex-col items-center p-2 rounded-lg bg-gray-800'>
          <p className=' text-xl'>{ head}</p>
          <p>{ body}</p>
      </div>
  )
}
