<script lang="ts">
  import favicon from "$lib/assets/favicon.png";
  import Nav from "$lib/components/Nav.svelte";

  let { children } = $props();
  import "../app.css";
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Mark Armijo McKnight</title>
</svelte:head>

<!-- ENTIRE PAGE -->
<div class="font-hal w-full text-lg leading-tight md:text-base">
  <Nav></Nav>
  {@render children()}
</div>
