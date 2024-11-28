<script lang="ts">
  import { flip } from "svelte/animate";
  import Item from "./item.component.svelte";
  import type { IItem } from "./types";
  import { ANIMATION_DURATION, ITEM_MAX_HEIGHT } from "./utils";

  export let items: IItem[];
  export let currentIndex: number;
  export let highlightIndices: number[] = [];
  export let sortedIndices:number[]=[]
</script>

<div class="relative pb-4 w-fit bg-slate-200">
  <!-- items list -->
  <ul class="flex flex-row gap-1 justify-between items-end mb-2" style='height: {ITEM_MAX_HEIGHT}px'>
    {#each items as item, index (item)}
      <div animate:flip={{ duration: ANIMATION_DURATION }}>
        <Item
          size={item.value/100*ITEM_MAX_HEIGHT}
          isCurrent={index === currentIndex}
          highlight={highlightIndices.includes(index)}
          isSorted={sortedIndices.includes(index)}
        />
      </div>
    {/each}
  </ul>

  <!-- current index indicator -->
  <div class="bg-red-500 w-1 h-4 absolute transition-all"
  style="left:{currentIndex/items.length*100}%; transition-duration:{ANIMATION_DURATION}ms"></div>
</div>
