<script>
  let innerHeight, innerWidth;

  $: width = innerWidth * 0.10;
  $: height = innerHeight * 0.33;
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<div>
  <a title="YouTube" href="https://youtube.com">
    <img src="./yt.png" alt="YouTube's logo" {height} {width} style="object-fit:cover;" />
  </a>
  <a title="Discord" href="https://discord.com/app">
    <img src="./discord.png" alt="Discord's logo" {height} {width} />
  </a>
  <a title="My GitHub" href="https://github.com/r2dev2">
    <img src="./ghub.png" alt="GitHub logo" {height} {width} />
  </a>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    margin-right: 2rem;
  }

  img {
    object-fit: contain;
  }
</style>
