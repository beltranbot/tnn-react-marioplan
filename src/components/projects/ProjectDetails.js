import React from 'react'

const ProjectDetails = (props) => {

  const id = props.match.params.id

  return (
    <div className='container section project-details'>
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus similique harum ad at itaque perspiciatis quidem consectetur repellat et, commodi facere quam fuga dolore. Doloribus sit numquam eligendi soluta?</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
