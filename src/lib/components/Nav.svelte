<script lang="ts">
  import { page } from "$app/state";

  let links = [
    {
      name: "Selected Projects",
      url: "/selected-projects",
    },
    {
      name: "Archive",
      url: "/archive",
    },
    {
      name: "News",
      url: "/news",
    },
  ];
</script>

<!-- TOP NAV -->
<div class="z fixed top-0 flex w-full flex-row justify-between px-4 py-4">
  <div>
    <a
      href="/"
      class="block underline decoration-transparent hover:decoration-black sm:inline"
      >Mark Armijo McKnight</a
    ><span class="hidden sm:inline">,</span>
    {#each links as link, i}
      {#if i > 0},{/if}
      <a
        href={link.url}
        aria-current={page.url.pathname === link.url}
        class="underline decoration-transparent hover:decoration-black aria-current:decoration-black"
        >{link.name}</a
      >
    {/each}
  </div>
  <div>
    <a href="/" class="underline decoration-transparent hover:decoration-black"
      >About</a
    >
  </div>
</div>
