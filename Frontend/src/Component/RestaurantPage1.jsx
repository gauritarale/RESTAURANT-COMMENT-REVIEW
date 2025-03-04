// src/components/RestaurantPage.js
import React, { useState } from 'react';
//import './RestaurantPage.css'; // Import the CSS file

const RestaurantPage = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), text: newComment }]);
      setNewComment('');
    }
  };

  const handleCommentDelete = (commentId) => {
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
        <h1 className="restaurant-name">Delicious Bistro</h1>
      </div>


<div>
  <div className="comment-section">
    <form onSubmit={handleCommentSubmit}>
      <textarea
        value={newComment}
        onChange={handleCommentChange}
        placeholder="Add a comment..."
      />
      <button type="submit">Add Comment</button>
    </form>
  </div>
</div>

    
      <h3>Comments</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="comment-item">
              {comment.text}
              <button 
                className="delete-btn" 
                onClick={() => handleCommentDelete(comment.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default RestaurantPage;
