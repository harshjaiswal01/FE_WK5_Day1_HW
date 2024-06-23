import React from 'react';
import { Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <section className="contact py-5">
      <Container>
        <h2>Contact</h2>
        <p>Email: example@example.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/example/">Example Boss</a></p>
      </Container>
    </section>
  );
};

export default Contact;
