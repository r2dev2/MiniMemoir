<script>
  export let description = '';
  export let light = false;
  export let reverse = false;
</script>

<div class="section-container full-screen" class:light class:reverse>
  <div class="embed">
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
