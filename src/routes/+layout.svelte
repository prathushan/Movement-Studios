
<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css'
</script>
<svelte:head>

</svelte:head>
<Header />
<main>
<slot />
</main>
<Footer />
