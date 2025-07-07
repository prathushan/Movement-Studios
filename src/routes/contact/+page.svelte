<script lang="ts">
  export let data;
  let name = "",
    email = "",
    company = "",
    phone = "",
    message = "";
  let isSubmitting = false;
  let feedback = "";

  const faq = data.faq;

  async function handleSubmit() {
    isSubmitting = true;
    feedback = "";
    try {
      const res = await fetch("/contact/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, phone, message }),
      });

      if (!res.ok) throw new Error("Something went wrong.");

      feedback = "✅ Message sent successfully!";
      name = email = company = phone = message = "";
    } catch (err) {
      feedback = "❌ Failed to send message. Try again.";
      console.error("Submit error:", err);
    } finally {
      isSubmitting = false;
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="contact-glass-form">
  <h2>Get in Touch</h2>
  <div class="field-group">
    <input type="text" placeholder="Name *" bind:value={name} required />
    <input type="text" placeholder="dance Style" bind:value={company} />
    <input type="text" placeholder="Phone Number" bind:value={phone} />

    <input type="email" placeholder="Email *" bind:value={email} required />
    <textarea placeholder="Your Message *" bind:value={message} required
    ></textarea>
  </div>
  <button type="submit" disabled={isSubmitting}>
    {isSubmitting ? "Sending..." : "Send Message"}
  </button>
  {#if feedback}
    <p class="feedback">{feedback}</p>
  {/if}
</form>

<!-- FAQs Section -->
{#if faq.length}
  <section class="faqs">
    <h2>FAQs</h2>
    {#each faq as item}
      <details>
        <summary>{item.question}</summary>
        <p>{item.answer}</p>
      </details>
    {/each}
  </section>
{/if}

<style>
  .contact-glass-form {
    box-sizing: border-box;
    max-width: 500px;
    margin: 3rem auto;
    padding: 2rem;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
    color: #fff;
  }

  .contact-glass-form h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #fff;
    font-size: 1.75rem;
  }

  .field-group {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  input,
  textarea {
    width: 90%;
    padding: 0.9rem 1rem;
    margin: 0.7rem 0;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    font-size: 1rem;
    backdrop-filter: blur(6px);
    outline: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: #ccc;
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  button {
    width: 100%;
    padding: 0.9rem 1rem;
    background: #ff4081;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 1rem;
    transition:
      background 0.3s ease,
      transform 0.2s;
  }

  button:hover:not(:disabled) {
    background: #e73370;
    transform: scale(1.02);
  }

  button:disabled {
    background: #888;
    cursor: not-allowed;
  }

  .feedback {
    text-align: center;
    margin-top: 1rem;
    font-weight: 500;
    color: #ffd6ec;
  }

  /* FAQ */
  .faqs {
    max-width: 800px;
    margin: auto;
  }

  .faqs h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .faqs details {
    margin-bottom: 1rem;
    background: #111;
    padding: 1rem;
    border-radius: 8px;
    color: #ddd;
  }

  .faqs summary {
    cursor: pointer;
    font-weight: 600;
    color: #fff;
  }

  .faqs p {
    margin-top: 0.5rem;
    color: #aaa;
  }
  @media (max-width: 480px) {
    .contact-glass-form {
      margin: 3rem 0.5rem;
    }
    .faqs {
      margin: 0.5rem;
    }
  }
</style>
