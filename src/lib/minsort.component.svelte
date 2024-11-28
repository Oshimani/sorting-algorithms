<script lang="ts">
  import List from "./list.component.svelte";
  import type { IItem } from "./types";
  import { ANIMATION_DURATION } from "./utils";

  export let items: IItem[];

  let highlightIndices: number[];
  let currentIndex: number = 0;
  let sortedIndices: number[] = [];

  export const minSort = () => {
    let i = 0; // Outer loop
    let j = 0; // Inner loop
    let minIndex = 0;

    const getSortedIndices = (index: number) =>
      Array.from({ length: index }, (_, i) => i);

    function sortStep() {
      if (i < items.length - 1) {
        if (j < items.length) {
          currentIndex = j;
          highlightIndices = [minIndex];
          // Find the minimum element in the remaining unsorted part
          if (items[j].value < items[minIndex].value) {
            minIndex = j;
          }
          j++;
          setTimeout(sortStep, ANIMATION_DURATION); // Schedule the next comparison step
        } else {
          // Swap the minimum element found with the first element of the unsorted part
          [items[i], items[minIndex]] = [items[minIndex], items[i]];
          items = items; // Trigger Svelte reactivity

          // Move to the next position
          i++;
          j = i;
          minIndex = i;

          setTimeout(sortStep, ANIMATION_DURATION); // Schedule the next iteration
        }
        sortedIndices = getSortedIndices(i);
      }
    }

    sortStep(); // Start the sorting process
  };
</script>

<div class="text-center">
  <h2 class="font-bold">Minsort</h2>
  <List {items} {currentIndex} {highlightIndices} {sortedIndices} />
</div>
