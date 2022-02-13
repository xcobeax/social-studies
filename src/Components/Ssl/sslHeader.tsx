import React from 'react'

const SslHeader = ({title, desc}:any) => {
  return (
    <div className="bg-[#94c045] text-[#fff] text-center py-8">
    <div className="text-3xl">{title}</div>
    <div>{desc}</div>
  </div>
  )
}

export default SslHeader