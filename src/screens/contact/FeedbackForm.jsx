import React, { useState } from "react";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(event) =>
            setFormData((prev) => {
              return {
                ...prev,
                name: event.target.value,
              };
            })
          }
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(event) =>
            setFormData((prev) => {
              return {
                ...prev,
                email: event.target.value,
              };
            })
          }
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={(event) =>
            setFormData((prev) => {
              return {
                ...prev,
                subject: event.target.value,
              };
            })
          }
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={(event) =>
            setFormData((prev) => {
              return {
                ...prev,
                message: event.target.value,
              };
            })
          }
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;
