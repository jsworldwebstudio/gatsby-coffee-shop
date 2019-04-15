import React from 'react';
import Title from '../Globals/Title';


const Contact = () => {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/jsworldwebstudio@gmail.com" method="POST">
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="john smith"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="email@email.com"
              />
            </div>
            {/* description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                rows="5"
                className="form-control"
                placeholder="your description here..."
              />
            </div>
            {/* hidden input for email subject line */}
            <input
              type="hidden"
              name="_subject"
              value="JSWORLD Coffee Shop Site: Contact Request"
            />
            {/* submit button */}
            <button
              className="btn btn-yellow btn-block text-capitalize mt-5"
              type="submit"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;