import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import {getComments} from '../allData'
import '../css/comment.css'


export default function Comment() {
    let comments = getComments()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [input, setInput] = useState('')
    const [messag, setMessag] = useState('')

    const addComment = () =>{
        const newComment = {
          id: comments.length + 1,
          name: input,
          message: messag
        }
       comments.push(newComment) 
        
        setInput('')
        setMessag('')
        handleClose()
        
      }

      return(

        <>
        <Container>

        <div className="comments-page">

        {comments.map((comment) => (

<div className="comments"
  key={comment.id}>

 <h2>
    {comment.name}
</h2>
  <p>
  {comment.message}
  </p>
  
  
</div>
))}

           <Card.Text>
            Add a comment and view it above
            </Card.Text>
        <Button variant="primary" onClick={handleShow}>
        Add Comment
         </Button>

         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>COMMENT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type={"text"}
              value={input} 
             onChange={(e) => setInput(e.target.value)}
                placeholder="Type your name here"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Comment</Form.Label>
              <Form.Control
               as="textarea" 
               rows={3} 
               placeholder='Type your message here' 
               type={"text"}
               value={messag} 
              onChange={(e) => setMessag (e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" 
          disabled= {!input} onClick = {addComment}>
            Add Comment
          </Button>
        </Modal.Footer>
      </Modal>
            
        </div>

        </Container>
        </>

      )
}