<script lang="ts">
  import List from "./list.component.svelte";
  import type { IItem } from "./types";
  import { ANIMATION_DURATION } from "./utils";

  export let items: IItem[];

  let highlightIndices: number[];
  let currentIndex: number;
  let sortedIndices: number[] = [];

  const getSortedIndices = (index: number) =>
    Array.from({ length: items.length - index }, (_, i) => items.length - i);

  export const bubbleSort = () => {
    let i = 0;
    let j = 0;

    function sortStep() {
      if (i < items.length - 1) {
        if (j < items.length - 1 - i) {
          currentIndex = j;
          // Compare and swap if necessary
          if (items[j].value > items[j + 1].value) {
            [items[j], items[j + 1]] = [items[j + 1], items[j]];
            highlightIndices = [j, j + 1];
            items = items; // Trigger Svelte reactivity
          }
          j++;
        } else {
          j = 0;
          i++;
        }
        sortedIndices = getSortedIndices(items.length - 1 - i);
        setTimeout(sortStep, ANIMATION_DURATION); // Schedule the next step
      }
    }

    sortStep(); // Start the sorting process
  };
</script>

<div class="text-center">
  <h2 class="font-bold">Bubblesort</h2>
  <List {items} {currentIndex} {highlightIndices} {sortedIndices} />
</div>
