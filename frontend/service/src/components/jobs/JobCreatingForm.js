import React from 'react';

const JobCreatingForm = ({handleJobPost}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const job = {
      "title": event.target.title.value,
      "location": event.target.location.value,
      "description": event.target.description.value,
      "salary": event.target.salary.value,
      "duration": event.target.duration.value,
      "category": event.target.category.value
    }
    handleJobPost(job)
  }

  return(
    <div>
      <h1>Create A Job</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" name="title"/>
          <input type="text" placeholder="Location" name="location"/>
          <input type="text" placeholder="Description" name="description"/>
          <input type="number" step="0.1" placeholder="Salary" name="salary"/>
          <input type="number" placeholder="Duration" name="duration"/>
          <input type="text" placeholder="Category" name="category"/>
          <button type="submit" value="submit">Register</button>
        </form>
      </div>
    </div>
  )

}

export default JobCreatingForm;
