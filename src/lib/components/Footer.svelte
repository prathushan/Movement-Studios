<script>
  function openMail() {
    const email = "admin@movementstudio.com";
    const subject = "Hello from Movement Studio";
    const body = "Hi there, I'd like to get in touch...";

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const windowFeatures =
      "width=700,height=600,top=300,left=400,resizable=yes,scrollbars=yes";

    window.open(gmailURL, "_blank", windowFeatures);
  }
</script>

<footer class="site-footer">
  <div class="footer-top">
    <div class="footer-left">
      <h1 class="footer-logo-text">Mov.<br />Stu.</h1>
    </div>

    <div class="footer-middle">
      <p>
        <strong>Email:</strong><br />
        <a href="mailto:admin@movementstudio.com" title="Email us"
          >admin@movementstudio.com</a
        >
      </p>
      <p>
        <strong>Instagram:</strong><br />
        <a
          href="https://www.instagram.com/movementstudio/"
          target="_blank"
          rel="noopener"
          title="Visit our Instagram"
        >
          instagram.com/movementstudio
        </a>
      </p>
      <p>
        <strong>Facebook:</strong><br />
        <a
          href="https://www.facebook.com/movementstudio/"
          target="_blank"
          rel="noopener"
          title="Visit our Facebook"
        >
          facebook.com/movementstudio
        </a>
      </p>
    </div>

    <div class="footer-right">
      <p>
        <strong>Address:</strong><br />
        224 Candyland Lane, Brooklyn, NY
      </p>
      <p><a href="tel:+16465554567" title="Call us">(646) 555-4567</a></p>
      <p>&copy; 2025 Movement Studios®<br />All Rights Reserved</p>
    </div>
  </div>

  <div class="footer-bottom">
    <a href="/classes" class="footer-box blue" title="Go to Classes page"
      >Our Classes</a
    >
    <a
      href=""
      class="footer-box black"
      on:click|preventDefault={openMail}
      title="Email us">Email Us</a
    >
    <a href="/contact" class="footer-box pink" title="Go to Contact page"
      >Book with Us</a
    >
  </div>
</footer>

<style>
  .site-footer {
    background-color: #f8f8f8;
    color: #000;
  }

  .footer-top {
    display: flex;
    justify-content: space-between;
    background-color: #ccfafa;
    padding: 3rem 2rem;
    flex-wrap: wrap;
  }

  .footer-left,
  .footer-middle,
  .footer-right {
    flex: 1;
    min-width: 220px;
    margin-bottom: 2rem;
  }

  .footer-logo-text {
    font-size: 4rem;
    font-weight: 700;
    margin: 0;
    line-height: 1;
  }

  .footer-middle p,
  .footer-right p {
    font-size: 0.95rem;
    margin: 0.6rem 0;
  }

  .footer-middle a,
  .footer-right a {
    color: #000;
    text-decoration: none;
  }

  .footer-middle a:hover,
  .footer-right a:hover {
    text-decoration: underline;
  }

  .footer-bottom {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
  }

  .footer-box {
    flex: 1;
    text-align: center;
    padding: 2rem;
    color: #fff;
    font-weight: bold;
    font-size: 1.1rem;
    text-decoration: none;
    transition: background-color 0.3s;
  }

  .footer-box:hover {
    opacity: 0.9;
  }

  .footer-box.blue {
    background-color: #224aff;
  }

  .footer-box.black {
    background-color: #000;
  }

  .footer-box.pink {
    background-color: #cc45eb;
  }

  @media (max-width: 768px) {
    .footer-top {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
    }

    .footer-box {
      flex: 1 1 100%;
    }
  }
</style>
