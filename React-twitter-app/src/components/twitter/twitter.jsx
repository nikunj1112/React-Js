import React, { useState } from "react";
// import { FaRegHeart, FaRegComment, FaRegEdit, FaTrash } from "react-icons/fa";
import "./twitter.css";

export default function App() {
  const [tweets, setTweets] = useState([
    {id: 1, name: "Nikunj", time: "10m", text: "Welcome to the dark demo Edit/Delete buttons visibl.", likes: 2, comments: 0, shares: 0 },
    { id: 2, name: "Dixita", time: "34m", text: "Hey twitter...!", likes: 4, comments: 2, shares: 1 },
    { id: 3, name: "Anita", time: "1h", text: "This one shows image preview and counts.", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", likes: 1, comments: 1, shares: 0 }
  ]);

  const [tweetText, setTweetText] = useState("");
  const [tweetImage, setTweetImage] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const MAX_CHARS = 300;

  const handleTweet = () => {
    if (tweetText === "") return;

    if (editingId) {
      setTweets(tweets.map(t => t.id === editingId ? { ...t, text: tweetText, image: tweetImage } : t));
      setEditingId(null);
    } else {
      const newTweet = {
        id: Date.now(),
        name: "You",
        time: "Just now",
        text: tweetText,
        image: tweetImage,
        likes: 0,
        comments: 0,
        shares: 0
      };
      setTweets([newTweet, ...tweets]);
    }

    setTweetText("");
    setTweetImage(null);
  };

  const handleEdit = (id) => {
    const t = tweets.find(t => t.id === id);
    setTweetText(t.text);
    setTweetImage(t.image || null);
    setEditingId(id);
  };

  const handleDelete = (id) => {
    setTweets(tweets.filter(t => t.id !== id));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setTweetImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="twitter-dark">
      <div className="header">
        <img src="https://cdn-icons-png.flaticon.com/512/2496/2496110.png" alt="logo" className="logo" />
        <div>
          <h2>Mini Twitter </h2>
          <p>Single page demo — visible CRUD controls</p>
        </div>
      </div>

      <div className="main">
        <div className="left">
          <div className="tweet-box">
            <textarea
              placeholder="What's happening?"
              value={tweetText}
              maxLength={MAX_CHARS}
              onChange={(e) => setTweetText(e.target.value)}
            />
            <div className="tweet-controls">
              <label className="upload-btn">
                📷 upload
                <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
              </label>
              <span>{tweetText.length}/{MAX_CHARS}</span>
              <button onClick={handleTweet}>{editingId ? "Update" : "Tweet"}</button>
            </div>
          </div>

          <div className="tweets">
            {tweets.map(tweet => (
              <div className="tweet" key={tweet.id}>
                <div className="avatar">{tweet.name.charAt(0)}</div>
                <div className="tweet-content">
                  <div className="tweet-header">
                    <strong>{tweet.name}</strong>
                    <span>{tweet.time}</span>
                    <button className="edit-btn" onClick={() => handleEdit(tweet.id)}>✏️</button>
                    <button className="delete-btn" onClick={() => handleDelete(tweet.id)}> ❌ </button>

                  </div>
                  <p className="text-massage">{tweet.text}</p>
                  {tweet.image && <img src={tweet.image} alt="tweet" className="tweet-img" />}
                  <div className="tweet-actions">
                    <span> ❤️ {tweet.likes}</span>
                    <span> 💬 {tweet.comments}</span>
                    <span> 🔁 {tweet.shares}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="right">
          <div className="trends">
            <h3>Trends</h3>
            <p>#React</p>
            <p>#JavaScript</p>
            <p>#CSS</p>
            <p>#Design</p>
          </div>
        </div>
      </div>
    </div>

    
  );
}
