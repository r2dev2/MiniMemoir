<script>
  import Section from './Section.svelte';
  import Socials from './Socials.svelte';
  import data from './data.js';

  let innerWidth;
</script>

<svelte:head>
  <title>Ronak's mini-memoir</title>
</svelte:head>

<svelte:window bind:innerWidth />

<main>
  <h1 class="full-height">Ronak Badhe</h1>
</main>

<Section description={data.chess} light>
  <iframe src="https://lichess.org/embed/vUizUuWy?theme=auto&bg=light"
          width="{innerWidth * 0.40}px" height="100%" frameborder=0
          title="Lichess game embed"></iframe>
</Section>

<Section description={data.coding} reverse>
  <img
    height="100%"
    width="{innerWidth * 0.50}px"
    src="./vim-byobu.png"
    alt="my dev setup"
    class="coding" />
</Section>

<Section description={data.socials} light>
  <Socials />
</Section>

<Section description={data.production} reverse>
  <div class="repocard-container">
  <!--
    Card generated at 
    https://github-readme-stats.vercel.app/api/pin/?username=r2dev2&repo=MiniMemoir&show_owner=true&theme=dracula
  -->
    <a title="View source code" href="https://github.com/r2dev2/MiniMemoir">
      <img
        src="./repocard.svg"
        width="{innerWidth * 0.40}"
        alt="mini memoir repo card" />
    </a>
  </div>
</Section>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    height: 100vh;
  }

  :global(body) {
    background-color: #151515;
    overflow-x: hidden;
    padding: 0;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
  }

  .full-height {
    margin: 0;
    font-size: 40vh;
  }

  img.coding {
    object-fit: cover;
  }

  .repocard-container {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
