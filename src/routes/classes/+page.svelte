<script lang="ts">
  export let data;
  const { classes } = data;

  console.log("✅ Classes Page Data:", classes);

  // Log individual class fields
  // classes.classBooking.forEach((item, i) => {
  //   console.log(📦 Class ${i + 1}:, item.fields);
  // });

  // Format a 2-hour time range from the given class start time
  function formatTimeRange(startTimeStr: string): string {
    const startTime = new Date(startTimeStr);
    const endTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000); // +2 hours

    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: '2-digit',
    };

   return `${startTime.toLocaleTimeString('en-US', options)} – ${endTime.toLocaleTimeString('en-US', options)}`;
  }
</script>

{#if classes}
  <!-- 🎯 Banner Section -->
  <section class="classes-banner">
   <img src={"https:" + classes.classesBanner?.fields?.file?.url} alt="Classes Banner" />

    <div class="classes-title">
      <h1>{classes.classes}</h1>
    </div>
  </section>
{/if}

{#if classes.classBooking?.length}
  <!-- 📚 Class Booking Grid -->
  <section class="booking-experience">
    <div class="left-panel">
      <h2>Booking Experience<br />for Classes</h2>
    </div>

    <div class="right-panel">
      <div class="class-cards">
        {#each classes.classBooking as cls (cls.sys.id)}
          <div class="class-card">
            <div class="image-container">
             <img src={`https:${cls.fields.classImage?.fields?.file?.url}`} alt={cls.fields.classImage?.fields?.title} />
              <span class="class-label">{cls.fields.className}</span>
            </div>

            <div class="card-details">
              <div class="text-content">
                <h3>{cls.fields.classTitle}</h3>
                <p>{cls.fields.classDescription}</p>
              </div>

              <div class="card-footer">
                <a class="timing">
                  {#if cls.fields.classTimings}
                    {formatTimeRange(cls.fields.classTimings)}
                  {/if}
                </a>
                {#if cls.fields.booknowButton}             
                    <button class="book-btn"><a class="rm-anch-text-dec" href="/contact">{cls.fields.booknowButton}</a></button>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
{/if}

{#if classes.promise || classes.promiseText}
  <!-- 💬 Promise Section -->
  <section class="promise-section">
    <div class="promise-content">
      {#if classes.promise}
      <img src={`https:${classes.classesBanner?.fields?.file?.url}`} alt="Classes Banner" />

      {/if}

      <div class="promise-text">
        {@html classes.promiseText.content.map(item => item.content?.[0]?.value).join('<br>')}
      </div>
    </div>
  </section>
{/if}


<style>
  .classes-banner {
    position: relative;
    height: 500px;
    overflow: hidden;
  }

  .classes-banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .classes-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    color: #fff;
    text-shadow: 2px 2px 10px rgba(0,0,0,0.8);
  }

  .class-booking-section {
    background-color: #000;
    color: white;
    padding: 3rem 1rem;
    text-align: center;
  }

  .section-heading {
    font-size: 2rem;
    color: #ff4081;
    margin-bottom: 2rem;
  }

  .class-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: auto;
  }

  .class-card {
    background: #111;
    border: 1px solid #333;
    border-radius: 8px;
    padding: 1.5rem;
    text-align: left;
  }

  .class-card h3 {
    color: white;
    margin-bottom: 0.5rem;
  }

  .class-card h4 {
    color: #ff4081;
    margin-bottom: 1rem;
  }

  .class-card p {
    color: #ccc;
    font-size: 0.95rem;
  }

  .promise-section {
    background-color: #ff4081;
    color: black;
    padding: 3rem 1rem;
  }

  .promise-content {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
  }

  .promise-content img {
    flex: 1 1 300px;
    max-width: 400px;
    border-radius: 10px;
  }

  .promise-text {
    flex: 2;
    font-size: 1.2rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .classes-title {
      font-size: 1.8rem;
    }

    .promise-content {
      flex-direction: column;
      text-align: center;
    }

    .promise-text {
      font-size: 1rem;
    }
  }

  /* cards */
 .booking-experience {
  display: flex;
  min-height: 100vh;
  font-family: 'Helvetica Neue', sans-serif;
}

.left-panel {
  background: black;
  color: white;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.left-panel h2 {
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 1.2;
}

.right-panel {
  width: 70%;
  background: white;
  /* padding: 2rem; */
}

.class-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* gap: 2rem; */
}

.class-card {
  border: 1px solid #dcdcdc;
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  border-radius: 4px;
  overflow: hidden;
}

.image-container {
  position: relative;
}

.image-container img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.class-label {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 5rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
}

.card-details {
  background: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

.text-content h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  color: black;
}

.text-content p {
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 1rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ddd;
  padding-top: 0.8rem;
  margin-top: auto;
}

.timing {
  font-size: 0.9rem;
  color: #3f51b5;
  text-decoration: none;
  font-weight: 500;
}

.book-btn {
  background: white;
  border: none;
  color: black;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-left: 1px solid #ddd;
  font-size: 0.9rem;
}

.book-btn:hover {
  background: #f0f0f0;
}

@media (max-width: 768px) {
  .booking-experience {
    flex-direction: column;
  }

  .left-panel,
  .right-panel {
    width: 100%;
  }

  .class-cards {
    grid-template-columns: 1fr;
  }

  .left-panel h2 {
    font-size: 2rem;
  }
}

</style>



