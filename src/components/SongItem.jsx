import React from 'react'
import { PlayerContext } from '../context/PlayerContext'
import { useContext } from 'react';

const SongItem = ({name,image,desc,id}) => {

  
 const {playWithId} =useContext(PlayerContext);
  return (
    <div onClick={()=> playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff25]'>
      <img className='rounded' src={image} alt="" />
      <p classname='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem
