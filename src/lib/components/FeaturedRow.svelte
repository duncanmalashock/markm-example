<script lang="ts">
  import type { Project } from "$lib/types";

  let { row }: { row: Project[] } = $props();
</script>

<div class="flex w-full flex-col gap-24 md:grid md:grid-cols-12 md:gap-4">
  {#each row as p}
    <a
      href="/project/{p.slug}"
      class={`group col-span-${p.colSpan} col-start-${p.colStart} ${p.order % 2 ? "pr-18" : "pl-18"} text-white md:pr-0 md:pl-0 ${p.order % 2 === 0 && row.length != 1 ? "md:mt-36" : ""}`}
    >
      {#if p.featuredVideo}
        <video
          src={p.featuredVideo}
          poster={p.featuredImage}
          autoplay
          muted
          loop
          playsinline
          class="w-full"
        >
          <track
            src="captions_en.vtt"
            kind="captions"
            srclang="en"
            label="english_captions"
          />
        </video>
      {:else if p.featuredImage}
        <img class="w-full" src={p.featuredImage} alt={p.name} />
      {/if}
      <div
        class="mt-5 w-full text-center text-black transition-opacity duration-150 group-hover:opacity-100 sm:opacity-0"
      >
        {p.name}, {p.year}{p.endYear ? `–${p.endYear}` : ""}
      </div>
    </a>
  {/each}
</div>
