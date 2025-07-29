<script lang="ts">
  import { page } from "$app/stores";
  import "../../app.css";

  let isMenuOpen = false;
  $: currentPath = $page.url.pathname;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<!-- <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/> -->

<header class="site-header">
  <div class="header-container">
    <!-- Hamburger & Site Name (Mobile Top Row) -->
    <div class="mobile-top-row">
      <div class="site-name"><a href="/">My Movement Studio.</a></div>
      <button class="hamburger" on:click={toggleMenu} aria-label="Toggle Menu">
        {#if isMenuOpen}
          <!-- CLOSE ICON (X) -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="#fff"
            height="20px"
            width="22px"
          >
            <path
              d="M231 256L384 103c9-9 9-24 0-33l-22-22c-9-9-24-9-33 0L176 201 23 48c-9-9-24-9-33 0L-32 70c-9 9-9 24 0 33l153 153L-32 409c-9 9-9 24 0 33l22 22c9 9 24 9 33 0l153-153 153 153c9 9 24 9 33 0l22-22c9-9 9-24 0-33L231 256z"
            />
          </svg>
        {:else}
          <!-- HAMBURGER ICON -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="#fff"
            height="20px"
          >
            <path
              d="M0 96C0 78.3 14.3 64 32 64h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm416 160c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384z"
            />
          </svg>
        {/if}
      </button>
    </div>

    <!-- Navigation & Site Name for Desktop -->
    <div class="desktop-row">
      <nav class="nav-links">
        <a href="/" class="nav-link" class:active={currentPath === "/"}>Home</a>
        <a
          href="/about"
          class="nav-link"
          class:active={currentPath === "/about"}>About</a
        >
        <a
          href="/classes"
          class="nav-link"
          class:active={currentPath === "/classes"}>Classes</a
        >
        <a
          href="/contact"
          class="nav-link"
          class:active={currentPath === "/contact"}>Contact</a
        >
      </nav>
      <div class="site-name desktop"><a href="/">My Movement Studio.</a></div>
    </div>

    <!-- Mobile Nav Menu -->
    {#if isMenuOpen}
      <nav class="mobile-menu">
        <a
          href="/"
          class="nav-link"
          class:active={currentPath === "/"}
          on:click={() => (isMenuOpen = false)}>Home</a
        >
        <a
          href="/about"
          class="nav-link"
          class:active={currentPath === "/about"}
          on:click={() => (isMenuOpen = false)}>About</a
        >
        <a
          href="/classes"
          class="nav-link"
          class:active={currentPath === "/classes"}
          on:click={() => (isMenuOpen = false)}>Classes</a
        >
        <a
          href="/contact"
          class="nav-link"
          class:active={currentPath === "/contact"}
          on:click={() => (isMenuOpen = false)}>Contact</a
        >
      </nav>
    {/if}
  </div>
</header>

<style>
  /* General Header */
  .site-header {
    background-color: #000;
    color: white;
    position: sticky;
    top: 0;
    z-index: 1000;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
  }

  .header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .site-name a {
    color: white;
    text-decoration: none;
  }

  /* Desktop layout */
  .desktop-row {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    height: 90px;
  }

  .nav-links {
    display: flex;
    align-items: stretch;
  }

  .nav-link {
    color: white;
    text-decoration: none;
    font-size: 0.95rem;
    padding: 0 1.5rem;
    border-right: 1px solid #333;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-width: 100px;
    position: relative;
  }

  .nav-link:first-child {
    border-left: 1px solid #333;
  }

  .nav-link:hover {
    background-color: #111;
    color: #ff4081;
  }

  .nav-link.active::after {
    content: "";
    position: absolute;
    bottom: 8px;
    left: 20%;
    width: 60%;
    height: 2px;
    background-color: #ff4081;
  }

  .site-name.desktop {
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    min-width: 250px;
    text-align: center;
    border-left: 1px solid #333;
    font-size: 1.6rem;
    font-weight: 400;
  }

  /* Mobile Top Row */
  .mobile-top-row {
    display: none;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }

  .hamburger {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
  }

  /* Mobile Nav Menu */
  .mobile-menu {
    display: none;
    flex-direction: column;
    background-color: #111;
    border-top: 1px solid #333;
  }

  .mobile-menu .nav-link {
    border: none;
    border-bottom: 1px solid #333;
    padding: 1rem;
    justify-content: flex-start;
    text-align: left;
  }

  /* Responsive: Tablet & Mobile */
  @media (max-width: 992px) {
    .desktop-row {
      display: none;
    }

    .mobile-top-row {
      display: flex;
    }

    .hamburger {
      display: block;
    }

    .mobile-menu {
      display: flex;
    }

    .site-name.desktop {
      display: none;
    }

    .site-name {
      font-size: 1.4rem;
    }

    .nav-link.active::after {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .nav-link {
      font-size: 1rem;
    }

    .site-name {
      font-size: 1.2rem;
    }
  }
</style>
