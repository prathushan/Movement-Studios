<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>
<header class="site-header">
  <div class="header-container">
    <div class="left-section">
      <a href="/" class="nav-link">Home</a>
      <a href="/about" class="nav-link">About</a>
      <a href="/classes" class="nav-link">Classes</a>
      <a href="/contact" class="nav-link">Contact</a>
    </div>
    <div class="right-section">
      <p class="site-name">Movement Studios.</p>
    </div>
  </div>
</header>

<style>
  .site-header {
    background-color: #000;
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    z-index: 1000;
    color: white;
    font-family: 'Segoe UI', Roboto, sans-serif;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: auto;
  }

  .left-section {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-link {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    position: relative;
    padding: 0.5rem 0;
  }

  .nav-link:hover {
    color: #ff4081;
  }

  /* .address {
    color: white;
    font-size: 0.9rem;
  } */

  .site-name {
    font-size: 1.6rem;
    font-weight: 400;
    color: white;
  }
</style>