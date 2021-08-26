<script>
  import { onMount } from 'svelte';

  export let description = '';
  export let light = false;
  export let reverse = false;

  let embed;

  let isVisible = false;

  const cb = entries => entries.forEach(entry => {
    isVisible = entry.isIntersecting;
  });

  const focus = () => {
    embed.scrollIntoView();
    isVisible = false;
    setTimeout(() => isVisible = true);
  }

  onMount(() => {
    const options = { threshold: 0.25 };

    const observer = new IntersectionObserver(cb, options);

    observer.observe(embed);
    return () => observer.disconnect();
  });
</script>

<div
  class="section-container full-screen"
  class:light
  class:reverse
  on:click={focus}>

  <div bind:this={embed} class="embed">
    <slot />
  </div>
  <div class="description" class:full={isVisible}>
    <span>{description}</span>
  </div>
</div>

<style>
  .section-container {
    display: flex;
    flex-direction: row wrap;
    color: #C5C5C5;
  }

  .reverse {
    flex-direction: row-reverse;
  }

  .full-screen {
    height: 100vh;
    width: 100vw;
  }

  .description {
    display: flex;
    align-items: center;
    padding: 2rem;
    font-size: 0.2rem;
  }

  .full {
    font-size: 2rem;
    transition: 0.5s ease-in-out;
  }

  .light {
    background-color: #C5C5C5;
    color: #151515;
  }

  .embed {
    height: 100%;
  }
</style>
