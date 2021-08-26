<script>
  import { onMount } from 'svelte';

  export let description = '';
  export let light = false;
  export let reverse = false;

  let embed;

  // const cb = entries => entries.forEach(entry => {
  //   if (entry.isIntersecting) {
  //     setTimeout(() => embed.scrollIntoView(), 500);
  //   }
  // });

  // onMount(() => {
  //   const options = { threshold: 0.1 };

  //   const observer = new IntersectionObserver(cb, options);

  //   observer.observe(embed);
  //   return () => observer.disconnect();
  // });
</script>

<div
  class="section-container full-screen"
  class:light
  class:reverse
  on:click={() => embed.scrollIntoView()}>

  <div bind:this={embed} class="embed">
    <slot />
  </div>
  <div class="description">
    <span>{description}</span>
  </div>
</div>

<style>
  .section-container {
    display: flex;
    flex-direction: row wrap;
    height: max-content;
    width: 100%;
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
    font-size: 2rem;
  }

  .light {
    background-color: #C5C5C5;
    color: #151515;
  }

  .embed {
    height: 100%;
  }
</style>
