import React, { useState } from 'react';

function ContactForm() {
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // You would send 'senderEmail' and 'message' to your server or an email API
    // The server would then send the email to your address
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ senderEmail, message }),
    });

    if (response.ok) {
      console.log('Email sent successfully');
      // Handle success
    } else {
      console.log('Failed to send email');
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={senderEmail}
        onChange={(e) => setSenderEmail(e.target.value)}
        placeholder="Your email"
        required
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your message"
        required
      />
      {/* <button type="submit" onClick={handleSubmit}>Send</button> */}
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
