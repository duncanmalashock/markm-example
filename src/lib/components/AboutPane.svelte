<script lang="ts">
  import { menuState } from "$lib/menuState.svelte.js";
</script>

<div
  class:left-0={menuState.isOpen}
  class:left-full={!menuState.isOpen}
  class="transition-left fixed z-10 h-full w-full duration-300"
>
  <!-- Backdrop -->
  <button
    type="button"
    aria-label="Close menu"
    class="absolute inset-0 h-full w-full cursor-default"
    onclick={() => menuState.toggle()}
  ></button>
  <div
    class="absolute top-0 right-0 h-full overflow-scroll bg-black p-4 text-white sm:w-[75dvw]"
  >
    <button
      type="button"
      aria-label="Close menu"
      class="absolute right-4 text-white"
      onclick={() => menuState.toggle()}>X</button
    >
    <div class="mt-16 w-full leading-loose">
      <p class="mb-4">
        Mark Armijo McKnight (b. Los Angeles, CA) is an artist whose work has
        been exhibited internationally and written about in The New Yorker,
        Financial Times, Los Angeles Times, GQ, Artforum, Frieze, Aperture, and
        Art in America, among others. His work is held in the collections of the
        Victoria and Albert Museum, the J. Paul Getty Museum, the Los Angeles
        County Museum of Art, ICA Miami, the Carnegie Museum of Art, the Whitney
        Museum of American Art, the Henry Art Gallery, and the Columbus Museum
        of Art.
      </p>
      <p class="mb-4">
        His first monograph, Heaven Is a Prison, was published in 2020, followed
        by Posthume, published by TBW Books in 2025. Armijo McKnight is a
        Fulbright Scholar and the recipient of the 2019 Aperture Portfolio
        Prize, the 2020 Light Work Photo Book Award, a 2020 Rema Hort Mann
        Emerging Artist Grant, and a 2023–24 Guggenheim Fellowship.
      </p>
      <p class="mb-4">
        He is Assistant Professor of Expanded Photography at Rutgers University.
      </p>
      <p>
        <a href="mailto:xxx" class="underline">markarmijomcknight@gmail.com</a>
      </p>
      <div class="mt-8 border-2 p-8">
        <p class="mb-4">Represented by Klaus von Nichtssagend (New York)</p>
        <p class="mb-4">Posthume (2025) published by TBW Books</p>
        <p class="mb-4">Heaven is a Prison (2020) published by Loose Joints</p>
      </div>
    </div>
  </div>
</div>
