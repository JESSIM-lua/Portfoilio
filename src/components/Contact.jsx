import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [feedback, setFeedback] = useState('');

  const sendMessage = (event) => {
    event.preventDefault();

    // Collect data from the form
    const formData = new FormData(event.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Webhook URL
    const webhookUrl = 'https://discord.com/api/webhooks/1129209643474882570/kg3kosSWvwrYGs5qMXuGno59lch3-4r8KU5boapbfEeqWWN_Xoepb4UZMaKn7Swb6Vft';

    // Prepare the embed payload
    const payload = {
      embeds: [{
        title: "New Contact Message",
        fields: [
          { name: "Prenom", value: firstName, inline: true },
          { name: "Nom", value: lastName, inline: true },
          { name: "Email", value: email },
          { name: "Objet", value: subject },
          { name: "Message", value: message }
        ],
        color: 5814783 // You can choose the color of the embed
      }]
    };

    // Send the data to Discord
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (response.ok) {
        setMessageSent(true);
        setFeedback('Votre message a bien été transmis. Je vous repondrai dans les plus brefs délais. Merci!');
      } else {
        setFeedback('Failed to send message.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      setFeedback('Failed to send message due to an error.');
    });
  };

  return (
    <div>
      <Header />
      <main>
        <h1>Contact</h1>
        <form className='frm' onSubmit={sendMessage}>
          {!messageSent ? (
            <>
              <input type="text" name="firstName" placeholder="Prenom" required />
              <input type="text" name="lastName" placeholder="Nom" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="text" name="subject" placeholder="Objet" required />
              <textarea name="message" placeholder="Enter your message" required></textarea>
              <button type="submit">Send</button>
            </>
          ) : (
            <div>{feedback}</div>
          )}
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
