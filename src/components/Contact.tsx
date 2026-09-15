import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={`${styles.contactSection} py-5`}>
      <div className="container">
        <div className="row g-4">
          {/* Left Side - Contact Information */}
          <div className="col-12 col-lg-5">
            <div className={`${styles.contactCard} h-100`}>
              <div className="card-body p-4">
                <div>
                  <h3 className="h2 mb-3 fw-normal">Get In Touch</h3>

                  <p>
                    I'd love to hear from you. Feel free to reach out for
                    opportunities, collaborations, or any questions.
                  </p>

                  <div>
                    <h4>Email</h4>
                    <p>your-email@example.com</p>
                  </div>

                  <div>
                    <h4>Location</h4>
                    <p>India</p>
                  </div>

                  <div>
                    <h4>Availability</h4>
                    <p>Open to opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-12 col-lg-7">
            <div className={`${styles.contactCard} h-100`}>
              <div className="card-body p-4">
                <form>
                  <h3 className="h2 mb-3 fw-normal">Contact Me</h3>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className={`${styles.formInput} form-control`}
                      id="floatingName"
                      placeholder="Your Name"
                    />
                    <label className={styles.formLabel} htmlFor="floatingName">
                      Name
                    </label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className={`${styles.formInput} form-control`}
                      id="floatingEmail"
                      placeholder="name@example.com"
                    />
                    <label className={styles.formLabel} htmlFor="floatingEmail">
                      Email
                    </label>
                  </div>

                  <div className="form-floating mb-3">
                    <textarea
                      className={`${styles.formInput} form-control`}
                      id="floatingMessage"
                      placeholder="Your Message"
                      style={{ height: "150px" }}
                    ></textarea>
                    <label
                      className={styles.formLabel}
                      htmlFor="floatingMessage"
                    >
                      Message
                    </label>
                  </div>

                  <button className={`${styles.sendButton} py-2`} type="submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
