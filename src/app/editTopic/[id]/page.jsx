import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

function page({params}) {
    const {id} = params;
    console.log(id)
  return (
    <EditTopicForm/>
  )
}

export default page