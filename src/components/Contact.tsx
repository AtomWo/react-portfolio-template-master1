import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      emailjs.init("ILCI380lv9jnGwr1m"); // Public key

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: "Adam Wong",
        to_email: "adamwongsta03@gmail.com"
      };

      emailjs.send(
        'service_6ginij1', // Your EmailJS service ID
        'template_w0sjen2', // Your EmailJS template ID
        templateParams
      ).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again.");
        }
      );
    }
  };

  const textFieldSx = {
    // Target the actual input element more specifically
    '& .MuiInputBase-input': { 
      color: '#000000 !important',
      backgroundColor: 'white !important',
      WebkitTextFillColor: '#000000 !important',
      opacity: '1 !important',
      zIndex: 2
    },
    '& .MuiInputBase-input::placeholder': {
      color: '#666666 !important', // Much darker placeholder text
      opacity: '1 !important',
      fontWeight: '400 !important'
    },
    '& input::placeholder': {
      color: '#666666 !important',
      opacity: '1 !important'
    },
    '& textarea::placeholder': {
      color: '#666666 !important',
      opacity: '1 !important'
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white !important',
      '& fieldset': { 
        backgroundColor: 'white !important', // Override your SCSS
        borderColor: 'rgba(0, 0, 0, 0.3) !important'
      },
      '&:hover fieldset': { 
        backgroundColor: 'white !important',
        borderColor: 'rgba(0, 0, 0, 0.5) !important'
      },
      '&.Mui-focused fieldset': {
        backgroundColor: 'white !important',
        borderColor: 'rgba(0, 0, 0, 0.8) !important'
      }
    },
    '& .MuiFormHelperText-root': { 
      color: 'rgba(255, 255, 255, 0.8) !important'
    },
    // Override any potential conflicts from SCSS
    '& input': {
      color: '#000000 !important',
      backgroundColor: 'white !important',
      WebkitTextFillColor: '#000000 !important'
    },
    '& textarea': {
      color: '#000000 !important',
      backgroundColor: 'white !important',
      WebkitTextFillColor: '#000000 !important'
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>If there's anything you'd like to ask, go ahead and message me!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                sx={textFieldSx}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                sx={textFieldSx}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              sx={textFieldSx}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;