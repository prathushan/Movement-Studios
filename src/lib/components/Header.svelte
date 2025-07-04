<script lang="ts">
  import { page } from '$app/stores';

  let isMenuOpen = false;
  $: currentPath = $page.url.pathname;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>

<header class="site-header">
  <div class="header-container">
    <!-- Hamburger & Site Name (Mobile Top Row) -->
    <div class="mobile-top-row">
      <div class="site-name"><a href="/">Movement Studios.</a></div>
      <button class="hamburger" on:click={toggleMenu} aria-label="Toggle Menu">
        <i class={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
    </div>

    <!-- Navigation & Site Name for Desktop -->
    <div class="desktop-row">
      <nav class="nav-links">
        <a href="/" class="nav-link" class:active={currentPath === '/'}>Home</a>
        <a href="/about" class="nav-link" class:active={currentPath === '/about'}>About</a>
        <a href="/classes" class="nav-link" class:active={currentPath === '/classes'}>Classes</a>
        <a href="/contact" class="nav-link" class:active={currentPath === '/contact'}>Contact</a>
      </nav>
      <div class="site-name desktop"><a href="/">Movement Studios.</a></div>
    </div>

    <!-- Mobile Nav Menu -->
    {#if isMenuOpen}
      <nav class="mobile-menu">
        <a href="/" class="nav-link" class:active={currentPath === '/'} on:click={() => isMenuOpen = false}>Home</a>
        <a href="/about" class="nav-link" class:active={currentPath === '/about'} on:click={() => isMenuOpen = false}>About</a>
        <a href="/classes" class="nav-link" class:active={currentPath === '/classes'} on:click={() => isMenuOpen = false}>Classes</a>
        <a href="/contact" class="nav-link" class:active={currentPath === '/contact'} on:click={() => isMenuOpen = false}>Contact</a>
      </nav>
    {/if}
  </div>
</header>

<style>
  /* General Header */
  .site-header {
    background-color: #000;
    color: white;
    font-family: 'Segoe UI', Roboto, sans-serif;
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
