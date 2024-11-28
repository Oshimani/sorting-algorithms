<script lang="ts">
  import Bubblesort from "$lib/bubblesort.component.svelte";
  import Minsort from "$lib/minsort.component.svelte";
  import { generateItems, NUMBER_OF_ITEMS } from "$lib/utils";

  let isRunning = false;

  let items = generateItems(NUMBER_OF_ITEMS);
  let itemsSorted = [...items].sort((a, b) => {
    if (a.value > b.value) return 1;
    return -1;
  });
  let itemsReverted = [...itemsSorted].reverse();

  const start: any[] = [];

  const handleClickStart = () => {
    if (isRunning) return;
    isRunning = true;
    start.forEach((f) => f());
  };
</script>

<h1 class="w-full text-center text-4xl">Sorting Algorithms</h1>

<div class="flex gap-8 w-full justify-center">
  <Bubblesort items={[...items]} bind:bubbleSort={start[0]} />
  <Minsort items={[...items]} bind:minSort={start[1]} />
</div>

<div class="flex gap-8 w-full justify-center">
  <Bubblesort items={[...itemsSorted]} bind:bubbleSort={start[2]} />
  <Minsort items={[...itemsSorted]} bind:minSort={start[3]} />
</div>

<div class="flex gap-8 w-full justify-center">
  <Bubblesort items={[...itemsReverted]} bind:bubbleSort={start[4]} />
  <Minsort items={[...itemsReverted]} bind:minSort={start[5]} />
</div>

<div class="flex w-full justify-center mt-8">
  <button
    disabled={isRunning}
    class="px-4 py-2 bg-orange-600 text-white font-bold hover:bg-white border-4 border-orange-600 hover:text-orange-600 disabled:opacity-30"
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
