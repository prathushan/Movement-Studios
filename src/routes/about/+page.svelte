<script lang="ts">
  export let data;
  const { about } = data;

  console.log("✅ About Page Data:", about);
  console.log("🧪 Founders:", about.aboutFounders);
  console.log("🧪 Instructors:", about.instructors);
</script>

{#if about}
  <!-- Banner Section -->
  <section class="about-banner">
    <img src={`https:${about.aboutBanner?.fields?.file?.url}`} alt="About Banner" />
    <div class="about-title">
      <h1>{about.aboutTitle}</h1>
    </div>
  </section>
{/if}



<!-- Founders Grid Section -->
{#if about.aboutFounders?.length}
  <section class="founders-grid">
    <div class="founders-grid-container">
      <div class="founders-title">
        <h2>Our<br />Founders</h2>
      </div>

      {#each about.aboutFounders as founder, i (founder.sys.id)}
        <div class="founder-image">
          <img src={`https:${founder.fields.file.url}`} alt={founder.fields.title || `Founder ${i + 1}`} />
          <p>{founder.fields.title || 'Unnamed'}</p>
        </div>
      {/each}
    </div>
  </section>
{/if}

<!-- ✅ Instructors Section -->
{#if about.instructors?.length}
  <section class="instructors-section">
    <div class="instructors-grid">
      <!-- Left Column -->
      <div class="instructors-title">
        <h2>Instructors</h2>
      </div>

      <!-- Right Column: Cards -->
      <div class="instructors-cards">
        {#each about.instructors as instructor (instructor.sys.id)}
          <div class="instructor-card">
            <h3>{instructor.fields.title}</h3>
            <h4>{instructor.fields.subtitle}</h4>
            <p>{instructor.fields.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
{/if}
<!-- About Content Section -->
{#if about.text?.content}
  <section class="about-content">
    <div class="text-container">
      {@html about.text.content.map(item => item.content?.[0]?.value).join('<br>')}
    </div>
  </section>
{/if}
<style>
  :global(body) {
    margin: 0;
    font-family: 'Segoe UI', Roboto, sans-serif;
    background-color: #000;
    color: #fff;
  }

  .about-banner {
    position: relative;
    height: 500px;
    overflow: hidden;
  }

  .about-banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .about-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
    font-weight: bold;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
    text-align: center;
  }

  .about-content {
  padding: 3rem 1.5rem;
  max-width:100%;
  margin: 0 auto;
  background-color: #ff4081;
  color: #000;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:0;
  }

.text-container {
  font-size: 1.3rem;
  line-height: 1.6;
  color: #000;
  text-align: center;
  word-break: break-word;
  white-space: normal;
  max-width: 100%;
}


  .text-container h2,
  .text-container h3 {
    color: #ff4081;
    margin-top: 2rem;
  }

  .text-container p {
    margin-bottom: 1rem;
  }

  /* Founders Section */
  .founders-grid {
    background-color: #000;
    padding: 3rem 1rem;
    color: white;
  }

  .founders-grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1200px;
    margin: auto;
    gap: 0;
    align-items: stretch;
  }

  .founders-title {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 3rem;
    font-weight: 800;
    color: #ff4081;
  }

  .founder-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .founder-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
    border-radius: 0;
    margin: 0;
  }

  .founder-image p {
    margin-top: 0.5rem;
    font-weight: 600;
    font-size: 1rem;
    color: white;
  }

  /* ✅ Instructors Section */
  .instructors-section {
    background-color: #000;
    padding: 3rem 1rem;
    color: white;
  }

  .instructors-grid {
    display: grid;
    grid-template-columns: 30% 70%;
    max-width: 1200px;
    margin: auto;
    gap: 2rem;
    align-items: flex-start;
  }

  .instructors-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: bold;
    color: #ff4081;
    text-align: center;
  }

  .instructors-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .instructor-card {
    background: #111;
    padding: 1.5rem;
    border: 1px solid #333;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  }

  .instructor-card h3 {
    margin: 0 0 0.5rem;
    color: #fff;
    font-size: 1.3rem;
  }

  .instructor-card h4 {
    margin: 0 0 1rem;
    color: #ff4081;
    font-weight: 500;
    font-size: 1rem;
  }

  .instructor-card p {
    color: #ccc;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    .founders-grid-container,
    .instructors-cards {
      grid-template-columns: 1fr;
    }

    .instructors-grid {
      grid-template-columns: 1fr;
    }

    .instructors-title {
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .about-title {
      font-size: 1.8rem;
    }
  }
</style>
