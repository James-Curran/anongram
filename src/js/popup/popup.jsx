import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import '../../css/popup.css';

function Popup() {
  return (
    <Container className="popup-container">
      <Typography variant="h6" className="popup-title">About</Typography>
      <Typography variant="body2" gutterBottom className="popup-about-content">Anongram allows users to browse public Instagram posts anonymously, without being required to sign in to an account.</Typography>
      <Typography variant="h6" className="popup-title">Features</Typography>
      <ul className="feature-list">
        <li className="feature-list-item">Remove scroll limit. Users are now free to scroll infinitely without being required to sign in to an Instagram account.</li>
        <li className="feature-list-item">Click into posts. Users can once again click to view the full post and comments, without being required to sign in.</li>
      </ul>
      <Typography variant="h6" className="popup-title">Contribute to Author</Typography>
      <Typography variant="subtitle1" className="donation-title">Bitcoin</Typography>
      <Typography variant="overline" display="block" gutterBottom className="donation-address">bc1qkjpuzyzl3yrlf84javnjnz5v8zyhq62v4ftvze</Typography>
      <Typography variant="subtitle1" className="donation-title">Litecoin</Typography>
      <Typography variant="overline" display="block" gutterBottom className="donation-address">ltc1qzm3e2ufx48pjq49x877u495zc7t25u8499wafm</Typography>
      <Typography variant="subtitle1" className="donation-title">Paypal</Typography>
      <Typography variant="overline" display="block" gutterBottom className="donation-address">curran.p.james@gmail.com</Typography>
    </Container>
  );
}

export default Popup;
