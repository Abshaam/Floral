import React, { useState } from "react";
import {getComments} from '../data'
import '../css/comment.css'


export default function Comment() {
    let comments = getComments()

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
        
      }

      return(
        <div className="comments-back">

        <div className="comments-page">
        <h1>
           REVIEWS
       </h1>
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
            
        </div>

        <div className="add-comment">

            <h2>COMMENT</h2>
            <input 
             placeholder='Type your name here' 
              type={"text"}
              value={input} 
             onChange={(e) => setInput(e.target.value)}>
             </input>
             <br/>

             <input 
             placeholder='Type your message here' 
              type={"text"}
              value={messag} 
             onChange={(e) => setMessag (e.target.value)}>
             </input>

             <button  disabled= {!input} onClick = {addComment}>Add comment</button>
        </div>

        </div>

      )
}