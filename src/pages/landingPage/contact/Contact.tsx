import "./_contactStyles.scss";
export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrapper animate_elem_reveal_in_view">
        <span>Get In Touch</span>
        <p>
          I'm currently exploring various career avenues, open to both full-time
          roles and freelance projects. Don't hesitate to get in touch with me,
          and I'll endeavor to respond promptly to any inquiries.
        </p>
        <div className="social_media_icon_wrapper">
          <a href="https://www.facebook.com/igie.08/" target="_bank">
            <span className="social_icon_wrapper icon_facebook">
              <i className="bi bi-facebook"></i>
            </span>
          </a>
          <span></span>
          <a href="https://www.instagram.com/igiebaldesanso/" target="_bank">
            <span className="social_icon_wrapper icon_insta">
              <i className="bi bi-instagram"></i>
            </span>
          </a>
          <span></span>
          <a
            href="https://www.linkedin.com/in/igie-boy-baldesanso-6a77181a3/"
            target="_bank"
          >
            <span className="social_icon_wrapper icon_linkin">
              <i className="bi bi-linkedin"></i>
            </span>
          </a>
          <span></span>
          <a href="https://github.com/Igie-dev" target="_bank">
            <span className="social_icon_wrapper icon_github">
              <i className="bi bi-github"></i>
            </span>
          </a>
        </div>
        <div className="contact_bntns_wrapper">
          <a
            href="mailto:baldesansoigieboysanchez@gmail.com"
            target="_bank"
            className="toemail_a_as_btn"
          >
            <span>
              <i className="bi bi-envelope"></i>
            </span>
            <p>Say hello</p>
          </a>
          <a
            href="https://wa.me/09278569807"
            target="_bank"
            className="towhatsapp_btn"
          >
            <span>
              <i className="bi bi-telephone"></i>
            </span>
            <p>Say hello</p>
          </a>
        </div>
      </div>
    </section>
  );
}
