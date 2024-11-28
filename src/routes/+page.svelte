<script lang="ts">
  import Bubblesort from "$lib/bubblesort.component.svelte";
  import Minsort from "$lib/minsort.component.svelte";
  import { generateItems } from "$lib/utils";

  let items = generateItems(50);

  const start: any[] = [];

  const handleClickStart = () => {
    start.forEach((f) => f());
  };
</script>

<h1 class="w-full text-center text-4xl">Sorting Algorithms</h1>

<div class="flex gap-8 w-full justify-center">
  <Bubblesort items={[...items]} bind:bubbleSort={start[0]} />
  <Minsort items={[...items]} bind:minSort={start[1]} />
</div>
<div class="flex w-full justify-center mt-8">
  <button
    class="px-4 py-2 bg-orange-600 text-white font-bold hover:bg-white border-4 border-orange-600 hover:text-orange-600"
    on:click={handleClickStart}
  >
    Start Sort
  </button>
</div>

<style>
  :root {
    @apply min-h-screen;
  }
</style>
