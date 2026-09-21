<script lang="ts">
  import type { Project } from "$lib/types";
  import FeaturedRow from "$lib/components/FeaturedRow.svelte";

  function groupProjectsIntoRows(projects: Project[]): Project[][] {
    const rows: Project[][] = [];
    let currentRow: Project[] = [];
    let currentWidth = 0;

    for (const project of projects) {
      const gap = currentRow.length > 0 ? 1 : 0;
      const requiredWidth = currentWidth + gap + project.colSpan;

      if (requiredWidth > 12) {
        rows.push(currentRow);
        currentRow = [project];
        currentWidth = project.colSpan;
      } else {
        currentRow.push(project);
        currentWidth = requiredWidth;
      }
    }

    if (currentRow.length > 0) {
      rows.push(currentRow);
    }

    return rows;
  }

  let projects: Project[] = [
    {
      order: 1,
      name: "Cut The World",
      slug: "cut-the-world",
      year: 2026,
      featuredImage: "src/lib/assets/images/1.jpg",
      colSpan: 3,
      colStart: 1,
    },
    {
      order: 2,
      name: "Decreation (Whitney Museum of American Art)",
      slug: "decreation-whitney",
      year: 2025,
      featuredImage: "src/lib/assets/images/2.png",
      featuredVideo: "src/lib/assets/videos/1.mp4",
      colSpan: 8,
      colStart: 5,
    },
    {
      order: 3,
      name: "Posthume (Monograph)",
      slug: "posthume-monograph",
      year: 2025,
      featuredImage: "src/lib/assets/images/3.jpg",
      featuredVideo: "src/lib/assets/videos/2.mp4",
      colSpan: 6,
      colStart: 1,
    },
    {
      order: 4,
      name: "Greener than Grass and Almost Dead",
      slug: "curatorial-greener",
      year: 2024,
      featuredImage: "src/lib/assets/images/4.jpg",
      featuredVideo: "src/lib/assets/videos/3.mp4",
      colSpan: 5,
      colStart: 8,
    },
    {
      order: 5,
      name: "Posthume",
      slug: "posthume",
      year: 2023,
      featuredImage: "src/lib/assets/images/5.jpg",
      featuredVideo: "src/lib/assets/videos/4.mp4",
      colSpan: 8,
      colStart: 3,
    },
    {
      order: 6,
      name: "Blind Dates & Reunions: Mark Armijo McKnight & John Keene",
      slug: "blind-dates-and-reunions-with-john-keene",
      year: 2023,
      featuredImage: "src/lib/assets/images/6.webp",
      colSpan: 5,
      colStart: 1,
    },
    {
      order: 7,
      name: ";",
      slug: "vielmetter-curatorial",
      year: 2022,
      featuredImage: "src/lib/assets/images/7.jpg",
      featuredVideo: "src/lib/assets/videos/5.mp4",
      colSpan: 6,
      colStart: 7,
    },
    {
      order: 8,
      name: "Hunger for the Absolute",
      slug: "hunger-for-the-absolute",
      year: 2021,
      featuredImage: "src/lib/assets/images/8.jpg",
      featuredVideo: "src/lib/assets/videos/6.mp4",
      colSpan: 7,
      colStart: 1,
    },
    {
      order: 9,
      name: "Heaven is a Prison (Monograph)",
      slug: "heaven-is-a-prison",
      year: 2020,
      featuredImage: "src/lib/assets/images/9.png",
      featuredVideo: "src/lib/assets/videos/7.mp4",
      colSpan: 4,
      colStart: 9,
    },
    {
      order: 10,
      name: "Decreation",
      slug: "decreation-2018-2025",
      year: 2018,
      endYear: 2025,
      featuredImage: "src/lib/assets/images/10.jpg",
      colSpan: 8,
      colStart: 3,
    },
  ];

  let rows = groupProjectsIntoRows(projects);
</script>

<!-- WORK LIST -->
<div class="flex w-full flex-col gap-24 px-4 pt-30 pb-24 md:pt-48 md:pb-48">
  {#each rows as row}
    <FeaturedRow {row}></FeaturedRow>
  {/each}
</div>
