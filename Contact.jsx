import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const initialForm = {
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function validateForm() {
    let validationErrors = {};

    if (formData.fullName.trim() === "") {
      validationErrors.fullName = "Full Name is required.";
    }

    if (formData.email.trim() === "") {
      validationErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      validationErrors.email = "Enter a valid email address.";
    }

    if (formData.phone.trim() === "") {
      validationErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      validationErrors.phone = "Phone number must contain 10 digits.";
    }

    if (formData.subject.trim() === "") {
      validationErrors.subject = "Subject is required.";
    }

    if (formData.message.trim() === "") {
      validationErrors.message = "Message cannot be empty.";
    } else if (formData.message.length < 20) {
      validationErrors.message =
        "Message should contain at least 20 characters.";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      setSuccessMessage(
        "Thank you! Your message has been submitted successfully."
      );

      setFormData(initialForm);

      setErrors({});
    } else {
      setSuccessMessage("");
    }
  }

  return (
    <section className="contact-section">

      <div className="contact-heading">

        <h1>Contact Me</h1>

        <p>
          Feel free to reach out if you have any questions,
          project ideas, internship opportunities,
          or simply want to connect.
        </p>

      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Contact Information</h2>

          <div className="info-box">

            <h3>Email</h3>

            <p>yourname@gmail.com</p>

          </div>

          <div className="info-box">

            <h3>Phone</h3>

            <p>+91 9876543210</p>

          </div>

          <div className="info-box">

            <h3>Location</h3>

            <p>Dehradun, Uttarakhand, India</p>

          </div>

          <div className="info-box">

            <h3>GitHub</h3>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/yourusername
            </a>

          </div>

          <div className="info-box">

            <h3>LinkedIn</h3>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              https://linkedin.com/in/yourusername
            </a>

          </div>

        </div>

        <div className="contact-form-container">

          <h2>Send a Message</h2>

          <form onSubmit={handleSubmit}>

            <div className="input-group">

              <label>Full Name</label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />

              {errors.fullName && (
                <small>{errors.fullName}</small>
              )}

            </div>

            <div className="input-group">

              <label>Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />

              {errors.email && (
                <small>{errors.email}</small>
              )}

            </div>

            <div className="input-group">

              <label>Phone Number</label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />

              {errors.phone && (
                <small>{errors.phone}</small>
              )}

            </div>

            <div className="input-group">

              <label>Subject</label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
              />

              {errors.subject && (
                <small>{errors.subject}</small>
              )}

            </div>

            <div className="input-group">

              <label>Message</label>

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
              ></textarea>

              {errors.message && (
                <small>{errors.message}</small>
              )}

            </div>

            <button
              type="submit"
              className="submit-btn"
            >
              Send Message
            </button>

            {successMessage && (
              <p className="success-message">
                {successMessage}
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;