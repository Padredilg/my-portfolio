import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Container, Row, Col } from "react-bootstrap";


function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const { name, email, subject, message } = formState;

  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      }
      else {
        setErrorMessage('');
      }
    }
    else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section className="section last-section" id="Contact">

      <div className="section-heading">
        <h2 className="reversed-title">Conn<em>ect</em></h2>
        <p>Like what you see? Let's work together or just say hi! Either way I'd love to hear from you!</p>
      </div>

      <Container>
        <Row>
          <Col md={5} className="m-auto">
            <img
              src={require(`../../assets/images/profile-pic-helmet.png`).default}
              alt='me with an astronaut helmet'
              className="image-of-me"
            />
          </Col>
          <Col sm={12} md={7} className="m-auto">
            <form id="contact-form" onSubmit={handleSubmit}>

              <h4 class="contact-prompt">Tell Me</h4>

                {/* Name */}
              <div className="contact-tag-wrapper">
                <label htmlFor="name"></label>
                <input className="contact-tag" placeholder="Your name" type="text" defaultValue={name} onBlur={handleChange} name="name" />
              </div>

              {/* Email */}
              <div className="contact-tag-wrapper">
                <label htmlFor="email"></label>
                <input className="contact-tag" placeholder="Your email" type="email" defaultValue={email} onBlur={handleChange} name="email" />
              </div>

              {/* Subject */}
              <div className="contact-tag-wrapper">
                <label htmlFor="subject"></label>
                <input className="contact-tag" placeholder="Subject" name="subject" defaultValue={subject} onBlur={handleChange} rows="5" />
              </div>


              {/* Message */}
              <div className="contact-tag-wrapper">
                <label htmlFor="message"></label>
                <textarea className="contact-tag" placeholder="Message" name="message" defaultValue={message} onBlur={handleChange} rows="5" />
              </div>


              {/* error message */}
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              {/* submit */}

              <button className="contact-submit" type="submit">Submit</button>
            </form>
          </Col>
        </Row>
        <Row>
          <h3 className="goodbye">Thank you for checking my Portfolio! I hope you enjoyed it =)</h3>
        </Row>
      </Container>


    </section>
  )
}

export default ContactForm;