import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'

function TopicsList() {
  return (
    <>
    <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
        <div>
            <h2 className='font-bold text-2xl'>Topic Title</h2>
            <div>Topic Description</div>
        </div>
        <div className='flex gap-2'>
            <RemoveBtn/>
            <Link href={'/editTopic/123'} className='text-white border p-2 bg-black rounded-lg'>
      Edit
            </Link>
        </div>
    </div>
    </>
  )
}

export default TopicsList