import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Contact() {

  
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div  data-aos="flip-right">
      <h1 className="contact-1">Get In Touch</h1>
      <div className="contact-main">
        <div className="project-left">
          <br />
          <br />
          <a
            href="https://www.linkedin.com/in/alihassanml/"
            target="_blank"
            style={{ textDecoration: "None", color: " rgb(189, 185, 185)" }}
          >
            <li className="contact-list"><i className="fa-brands fa-linkedin"></i> Linked In </li>
          </a>
          <a
            href="https://github.com/alihassanml"
            target="_blank"
            style={{ textDecoration: "None", color: " rgb(189, 185, 185)" }}
          >
            <li className="contact-list"><i className="fa-brands fa-github"></i> Github </li>
          </a>
          <a
            href="https://www.kaggle.com/alihassanml"
            target="_blank"
            style={{ textDecoration: "None", color: " rgb(189, 185, 185)" }}
          >
            <li className="contact-list"><i className="fa-brands fa-kaggle"></i> Kaggle </li>
          </a>
          <a
            href="https://x.com/alihassanml"
            target="_blank"
            style={{ textDecoration: "None", color: " rgb(189, 185, 185)" }}
          >
            <li className="contact-list"><i className="fa-brands fa-twitter"></i> Twitter </li>
          </a>
          <a
            href="https://wa.me/qr/UBI7FQKSXJMPE1"
            target="_blank"
            style={{ textDecoration: "None", color: " rgb(189, 185, 185)" }}
          >
            <li className="contact-list"><i className="fa-brands fa-whatsapp"></i> Whatsap </li>
          </a>
       
        </div>
        <div className="project-right">
          <h1 className="project-right-heading">Contact Now</h1>
          <form action="https://api.web3forms.com/submit" method="POST" >
          <input type="hidden" name="access_key" value="085bf96a-4f05-4290-bbbe-8f03aab68c0e" />

            <ul className="project-right-1">
              <ul className="project-right-2">
                <label className="project-right-label">Your Name</label>
                <input type="text" name="name"  id="project-right-name" required autoComplete="off" />
              </ul>
              <ul className="project-right-3">
                <label className="project-right-label" >Your Email</label>
                <input type="text" name="email" id="project-right-subject" required autoComplete="off" />
              </ul>
            </ul>
            <ul className="project-right-3">
              <label className="project-right-label-1">Enter Details</label>
              <input type="detail" name="message" id="project-right-detail" autoComplete="off" required />
            </ul>
            <button
              style={{ border: "none" }}
              type="submit"
              className="contact-button"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
