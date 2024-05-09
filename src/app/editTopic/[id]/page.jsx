import EditTopicForm from '@/components/EditTopicForm';
import React from 'react';

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch Topic');
    }
    console.log('Fetch successful');
    return res.json();
  } catch (error) {
    console.log('Error fetching topic:', error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
};

async function EditTopicPage({ params }) {
  const { id } = params;
  console.log(id);
  try {
    const { topic } = await getTopicById(id);
    const { title, description } = topic;
    return <EditTopicForm id={id} title={title} description={description} />;
  } catch (error) {
    // Handle error gracefully, e.g., display an error message to the user
    console.log('Error rendering edit topic page:', error);
    return <div>Error loading topic</div>;
  }
}

export default EditTopicPage;
