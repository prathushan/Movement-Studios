<script lang="ts">
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
  import { contentfulImage } from "$lib/utils/image";
  import "../app.css";

  export let data;

  const {
    bannerImage,
    titleInHomePage,
    block = [],
    imageSlider = [],
  } = data.home;
  
  //   function contentfulImage(
  //   url: string,
  //   width = 800,
  //   format: "webp" | "jpg" = "webp"
  // ) {
  //   return `https:${url}?w=${width}&fm=${format}`;
  // }
</script>

<svelte:head>
  {#if bannerImage?.fields?.file?.url}
    <link
      rel="preload"
      as="image"
      href={contentfulImage(bannerImage.fields.file.url, 1200)}
    />
  {/if}
</svelte:head>

<!-- 🖼️ Banner Section -->
<section class="banner">
  {#if bannerImage?.fields?.file?.url}
    <img
      src={contentfulImage(bannerImage.fields.file.url, 1200)}
      srcset={`
        ${contentfulImage(bannerImage.fields.file.url, 600)} 600w,
        ${contentfulImage(bannerImage.fields.file.url, 1200)} 1200w
      `}
      sizes="(max-width: 768px) 100vw, 100vw"
      alt={titleInHomePage}
      loading="eager"
      fetchpriority="high"
      decoding="async"
    />
    <div class="banner-text">
      <h1>{titleInHomePage}</h1>
    </div>
  {/if}
</section>

<div class="bg-color">
  <div class="scroll-content">
    <!-- 🧱 Alternating Block Layout -->
    {#if block.length}
      <section class="blocks">
        {#each block as item, i}
          <div class="block-row {i % 2 === 0 ? 'left-image' : 'right-image'}">
            <div class="block-img">
              <img
                src={contentfulImage(item.fields.blockImg.fields.file.url, 800)}
                srcset={`
                  ${contentfulImage(item.fields.blockImg.fields.file.url, 400)} 400w,
                  ${contentfulImage(item.fields.blockImg.fields.file.url, 800)} 800w,
                  ${contentfulImage(item.fields.blockImg.fields.file.url, 1200)} 1200w
                `}
                sizes="(max-width: 768px) 100vw, 50vw"
                alt={item.fields.title}
                loading="lazy"
                decoding="async"
              />
              <h2 class="block-title-overlay">{item.fields.title}</h2>
            </div>
            <div class="block-text">
              {@html item.fields.descriotion}
            </div>
          </div>
        {/each}
      </section>
    {/if}

    <!-- 🎞️ Image Slider Section -->
    {#if imageSlider.length}
      <section class="slider-section">
        <h2>Gallery</h2>
        <div class="slider">
          {#each imageSlider as img (img.sys.id)}
            <picture>
              <source
                srcset={`
                  ${contentfulImage(img.fields.file.url, 400)} 400w,
                  ${contentfulImage(img.fields.file.url, 800)} 800w
                `}
                sizes="(max-width: 768px) 400px, 800px"
                type="image/webp"
              />
              <img
                src={contentfulImage(img.fields.file.url, 800, 'jpg')}
                srcset={`
                  ${contentfulImage(img.fields.file.url, 400, 'jpg')} 400w,
                  ${contentfulImage(img.fields.file.url, 800, 'jpg')} 800w
                `}
                sizes="(max-width: 768px) 400px, 800px"
                alt={img.fields.title || "Slider Image"}
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

  section {
    background-color: #000;
  }

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

  @media (min-width: 750px) {
    .block-row {
      align-items: center;

      padding: 50px 1.5rem;
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
    padding: 0.5rem 1rem;
    border-radius: 6px;
    color: white;
  }

  .block-text {
    flex: 1 1 45%;
    font-size: 20px;
    line-height: 30px;
    color: #eee;
    font-family: "Encode-sans-regular", sans-serif;
    font-weight: 400;
    letter-spacing: -0.34px;
  }

  .slider-section {
    padding: 10px;
    box-sizing: border-box;
  }

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
      padding: 20px 10px;
    }
    .block-row {
      flex-direction: column;
    }
    .slider img {
      border-radius: 0;
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
     .banner-text {
    top:43%;
    left:27%; 
    }

    .block-title-overlay {
      font-size: 2rem;
    }
    .block-text {
      line-height: 40px;
    }
  }
  .bg-color {
    background-color: #000;
  }

  @media(min-width:400px) and (max-width:480px){
    .slider-section{
    position: relative;
    z-index: 10;
    margin-top: -160px;
    }
  }
</style>