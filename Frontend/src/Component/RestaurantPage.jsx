// src/components/RestaurantPage.js
import axios from 'axios';
import React, { useState } from 'react';
//import './RestaurantPage.css'; // Import the CSS file
import { useLocation } from 'react-router-dom';
const RestaurantPage = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentIds, setCommentIds] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [newCommentId, setNewCommentId] = useState('');
  // const { locationState, rid, rname } = location || {};
  const location = useLocation();
  const data = location.state;
  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    console.log(state.locationState);
    event.preventDefault();
    axios.post('http://localhost:8000/add/',{"user_id":location.state.user_id,"restaurant_id":location.state.rid,"Review":newComment})
    .then(response=>{
      // console.log(response);
      console.log(response.data);
    })
    .catch(
      error=>{
        console.log(error);
      }
    );
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), text: newComment }]);
      
      setNewComment('');
    }
  };

  const submitcomment = () =>{
    console.log(location.state.user.user_id);
    axios.post('http://localhost:8000/add/',{"user_id":location.state.user.user_id,"restaurant_id":location.state.rid,"Review":newComment})
    .then(response=>{
      console.log(response);
      // console.log(response.data.comment.id);
      setNewCommentId(response.data.comment.id);
    })
    .catch(
      error=>{
        console.log(error);
      }
    );
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), text: newComment, dbID:newCommentId }]);
      // setCommentIds([...commentIds, { id: Date.now(), commentid: newCommentId }]);
      setNewComment('');
    }
  }

  const handleCommentDelete = (commentId,dbCommentId) => {
    console.log(dbCommentId);
    axios.delete(`http://localhost:8000/add/${dbCommentId}/`)
    .then((response)=>{
      console.log(response);
    })
    setComments(comments.filter(comment => comment.id !== commentId));
  };

  return (
    <div className="restaurant-page">
      <div className="restaurant-header">
        <img
          src="images/restro1.jpeg"
          alt="Restaurant"
          className="restaurant-image"
        />
        <h1 className="restaurant-name">{location.state.rname}</h1>
      </div>


<div>
  <div className="comment-section">
   
      <textarea
        value={newComment}
        onChange={handleCommentChange}
        placeholder="Add a comment..."
      />
      <button onClick={submitcomment} >Add Comment</button>
    
  </div>
</div>

    
      <h3>Comments</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="comment-item">
              {comment.text}
              <button 
                className="delete-btn" 
                onClick={() => handleCommentDelete(comment.id,comment.dbID)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default RestaurantPage;
