<script lang="ts">
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
 import "../app.css"; 
  export let data;

  const {
    bannerImage,
    titleInHomePage,
    block = [],
    imageSlider = []
  } = data.home;
</script>

<!-- Banner Section -->
<section class="banner">
  {#if bannerImage?.fields?.file?.url}
    <img src={"https:" + bannerImage.fields.file.url} alt={titleInHomePage} />
    <div class="banner-text">
      <h1>{titleInHomePage}</h1>
    </div>
  {/if}
</section>
<div class="bg-color">
<div class="scroll-content">
<!-- Alternating Block Layout -->
{#if block.length}
  <section class="blocks">
    {#each block as item, i}
      <div class="block-row {i % 2 === 0 ? 'left-image' : 'right-image'}">
        <div class="block-img">
          <img src={`https:${item.fields.blockImg.fields.file.url}`} alt={item.fields.title} />
          <h2 class="block-title-overlay">{item.fields.title}</h2>
        </div>
        <div class="block-text">
          {@html item.fields.descriotion}
        </div>
      </div>
    {/each}
  </section>
{/if}


{#if imageSlider.length}
  <section class="slider-section">
    <h2>Gallery</h2>
    <div class="slider">
      {#each imageSlider as img (img.sys.id)}
        <picture>
          <!-- WebP source -->
          <source
            srcset={`
              https:${img.fields.file.url}?fm=webp&w=400 400w,
              https:${img.fields.file.url}?fm=webp&w=800 800w
            `}
            sizes="(max-width: 768px) 400px, 800px"
            type="image/webp"
          />

          <!-- Default format fallback -->
          <img
            src={`https:${img.fields.file.url}?w=800`}
            srcset={`
              https:${img.fields.file.url}?w=400 400w,
              https:${img.fields.file.url}?w=800 800w
            `}
            sizes="(max-width: 768px) 400px, 800px"
            alt={img.fields.title || 'Slider Image'}
            loading="lazy"
            width="800"
            height="auto"
            decoding="async"
          />
        </picture>
      {/each}
    </div>
  </section>
{/if}
</div>
</div>
<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  :global(body) {
    background-color: #000;
    color: white;
    font-family: 'Segoe UI', Roboto, sans-serif;
    margin: 0;
  }

  section {
    /* padding: 3rem 1.5rem; */
    background-color: #000;
  }


  /* Banner */




  .banner-text {
    position: absolute;
    top: 20%;
    left: 5%;
    transform: translateY(-50%);
    color: white;
    font-size: 3rem;
    font-weight: 700;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
    max-width: 600px;
  }

  /* Blocks */
  .blocks {
    display: flex;
    flex-direction: column;
    /* gap: 4rem; */
  }



    .banner {
    position: sticky;
    top: 10%;
    left: 0;
    width: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: -2;
  }
        .block-row {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    justify-content: center;
    background-color: #000000;

    position: sticky;
    top: 0;
    z-index: 1;
     min-height: 100vh;
  }


@media(min-width:750px){
          .block-row {
    align-items: center;

    padding: 50px 1.5rem;
    /* min-height: 100vh; */

  }



      .banner {
    height: 600px;

  }
  .block-row.left-image .block-img {
    order: 1;
  }

  .block-row.left-image .block-text {
    order: 2;
  }

  .block-row.right-image .block-img {
    order: 2;
  }

  .block-row.right-image .block-text {
    order: 1;
  }
    .block-img img {
    width: 100%;
    height: 800px;
    object-fit: cover;
    border-radius: 8px;
  }
  .banner img {

    object-fit: cover;
  }
      .block-img {
    flex: 1 1 45%;
  }

}
  .banner img {
    width: 100%;
    height: 100%;

  }
    .block-img {

    position: relative;
  }


  .block-img img {
    width: 100%;

  }

  .block-title-overlay {
    position: absolute;
    top: 5px;
    left: 20px;
    /* font-size: 2.5rem;
    font-weight: bold; */
    /* background-color: rgba(0, 0, 0, 0.6); */
    padding: 0.5rem 1rem;
    border-radius: 6px;
    color: white;
  }

  .block-text {
    flex: 1 1 45%;
    font-size: 20px;
    line-height: 20px;
    color: #eee;
    font-family: 'Encode-sans-regular', sans-serif;
    font-weight: 400;
  letter-spacing:-0.34px;
  }


  

  /* Slider */
  .slider-section h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .slider {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 2rem;
  }

  .slider img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.1);
  }


  @media (max-width: 768px) {
        .block-row {
    align-items: top;
    padding: 20px 10px;
    /* min-height: 80vh; */

  }
    .block-row {
      flex-direction: column;
    }

    .block-img,
    .block-text {
      /* flex: 1 1 100%; */
    }
      .banner img {
object-fit: contain;

  }

    .block-img img {
      height: 400px;
      object-fit: cover;
    }

    .banner-text {
      font-size: 2rem;
      left: 2rem;
    }

    .block-title-overlay {
      font-size: 2rem;
    }
      .block-text {

    line-height: 40px;


  }
  }
  .bg-color{
    background-color: #000;
  }
</style>

