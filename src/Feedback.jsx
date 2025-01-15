import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './feadback.css';

const STORAGE_KEY = 'userFeedbacks'; // Constant key for localStorage

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    // Initialize state with data from localStorage
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const initialValue = saved ? JSON.parse(saved) : [];
      console.log('Loading initial feedbacks:', initialValue); // Debug log
      return initialValue;
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      return [];
    }
  });

  // Save to localStorage whenever feedbacks change
  useEffect(() => {
    try {
      console.log('Saving feedbacks:', feedbacks); // Debug log
      localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbacks));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [feedbacks]);

  useEffect(() => {
    document.body.classList.add('feedback-body');
    return () => {
      document.body.classList.remove('feedback-body');
    };
  }, []);

  const addFeedback = (newFeedback) => {
    try {
      const updatedFeedbacks = [newFeedback, ...feedbacks];
      setFeedbacks(updatedFeedbacks);
      console.log('Added new feedback:', newFeedback); // Debug log
    } catch (error) {
      console.error('Error adding feedback:', error);
    }
  };

  const deleteFeedback = (id) => {
    try {
      const updatedFeedbacks = feedbacks.filter((feedback) => feedback.id !== id);
      setFeedbacks(updatedFeedbacks);
      console.log('Deleted feedback with id:', id); // Debug log
    } catch (error) {
      console.error('Error deleting feedback:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>Feedback System</h1>
      <FeedbackForm addFeedback={addFeedback} />
      <FeedbackList feedbacks={feedbacks} deleteFeedback={deleteFeedback} />
    </div>
  );
};

const FeedbackForm = ({ addFeedback }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      alert('Pesan tidak boleh kosong!');
      return;
    }

    const newFeedback = {
      id: Date.now(),
      name: name.trim() || 'Anonymous',
      message: message.trim(),
      profilePic: profilePic || '/assets/default-avatar.png',
      timestamp: new Date().toISOString(), // Add timestamp for sorting
    };

    addFeedback(newFeedback);
    setName('');
    setMessage('');
    setProfilePic('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 500000) { // 500KB limit
        alert('Ukuran foto terlalu besar! Maksimal 500KB');
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="name-input"
        placeholder="Nama kau"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className="message-input"
        placeholder="Tulis Pesan Kau"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <div style={{ position: 'relative', overflow: 'hidden', display: 'inline-block' }}>
        <button
          type="button"
          className="upload-button"
        >
          Pilih Foto
        </button>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="file-input"
        />
      </div>
      {profilePic && (
        <img
          src={profilePic}
          alt="Profile"
          className="profile-preview"
        />
      )}
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

const FeedbackList = ({ feedbacks, deleteFeedback }) => {
  return (
    <div className="feedback-list">
      {feedbacks.length > 0 ? (
        feedbacks.map((feedback) => (
          <div className="feedback-item" key={feedback.id}>
            <img
              src={feedback.profilePic}
              alt="Profile"
              className="profile-pic"
            />
            <div className="feedback-content">
              <h3>{feedback.name}</h3>
              <p>{feedback.message}</p>
              <small>{new Date(feedback.timestamp).toLocaleString()}</small>
            </div>
            <button
              className="delete-button"
              onClick={() => deleteFeedback(feedback.id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="no-feedback">gak ada feedback kah leku?</p>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Feedback />);

export default Feedback;