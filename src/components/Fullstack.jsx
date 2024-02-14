import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

function Fullstack({courses,setCourses}) {
  let newArray=[]
  for(let i = 0;i<courses.length;i++)
  {
    if(courses[i].course==="FSD")
    {
      newArray.push(courses[i])
    }
  }

  return (
    newArray.map((e,index)=>(
      <Card key={index} className='cards'>
      <Card.Img variant="top" src={e.image} style={{ height: '150px', objectFit: 'cover' }} />
      <Card.Body className='d-flex flex-column'>
        <Card.Title style={{ height: '50px' }}>{e.name}</Card.Title>
        <Card.Text>{e.details}</Card.Text>
      </Card.Body>
      <Card.Text className='footer'>January 31 &nbsp; &nbsp; &nbsp; No comments</Card.Text>
    </Card>
    ))
  )
}

export default Fullstack