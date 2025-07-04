<footer class="site-footer">
  <div class="footer-top">
    <div class="footer-left">
      <h1 class="footer-logo-text">
        Mov.<br />
        Stu.
      </h1>
    </div>

    <div class="footer-middle">
      <p><strong>Email:</strong><br />admin@movementstudio.com</p>
      <p><strong>Instagram:</strong><br />https://www.instagram.com/movementstudio/</p>
      <p><strong>Facebook:</strong><br />https://www.facebook.com/movementstudio/</p>
    </div>

    <div class="footer-right">
      <p><strong>Address:</strong><br />
      224 Candyland Lane, Brooklyn, NY</p>
      <p>(646) 555-4567</p>
      <p>Movement Studios®<br />2025 All Rights Reserved</p>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="footer-box blue"><a href="#">Our classes</a></div>
    <div class="footer-box black"><a href="mailto:#">Email us</a></div>
    <div class="footer-box pink"><a href="#">Book with us</a></div>
  </div>
</footer>
<style>

  .site-footer {
  font-family: 'Segoe UI', Roboto, sans-serif;
 
}

/* Top section layout */
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
  min-width: 200px;
  margin-bottom: 2rem;
}

.footer-logo-text {
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  line-height: 1;
}

/* Info styling */
.footer-middle p,
.footer-right p {
  font-size: 0.95rem;
  margin: 0.5rem 0;
  color: #000;
}

/* Bottom color blocks */
.footer-bottom {
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
}

/* Custom colors */
.footer-box.blue {
  background-color: #224aff;
}

.footer-box.black {
  background-color: #000;
}

.footer-box.pink {
  background-color: #cc45eb;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .footer-box {
    flex: 1 0 100%;
  }
}

</style>