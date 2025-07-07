
<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css'
</script>
<svelte:head>
  <link
    rel="preload"
    href="/DMSans_opsz_wght__1-english.woff2"
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    href="/EncodeSansSemiCondensed-Regular_1-english.woff2"
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
</svelte:head>
<Header />
<main>
<slot />
</main>
<Footer />
