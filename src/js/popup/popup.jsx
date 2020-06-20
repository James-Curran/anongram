import React from 'react';
import '../../css/popup.css';

function Popup() {
  return (
    <div className="popup-container">
      <h3 className="popup-title">About</h3>
      <p className="popup-about-content">Anongram allows users to browse public Instagram posts anonymously, without being required to sign in to an account.</p>
      <h3 className="popup-title">Features</h3>
      <ul className="feature-list">
        <li className="feature-list-item">Remove scroll limit. Users are now free to scroll infinitely without being required to sign in to an Instagram account.</li>
        <li className="feature-list-item">Click into posts. Users can once again click to view the full post and comments, without being required to sign in.</li>
      </ul>
      <h3 className="popup-title">Contribute to Author</h3>
      <h4 className="donation-title">Bitcoin</h4>
      <p className="donation-address">bc1qkjpuzyzl3yrlf84javnjnz5v8zyhq62v4ftvze</p>
      <h4 className="donation-title">Litecoin</h4>
      <p className="donation-address">ltc1qzm3e2ufx48pjq49x877u495zc7t25u8499wafm</p>
      <h4 className="donation-title">Paypal</h4>
      <p className="donation-address">curran.p.james@gmail.com</p>
    </div>
  );
}

export default Popup;
