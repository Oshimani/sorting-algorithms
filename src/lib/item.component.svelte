<script lang=ts>
	import { ANIMATION_DURATION } from "./utils"

  export let size:number
  export let highlight:boolean=false
  export let isCurrent:boolean=false
  export let isSorted:boolean=false
  
</script>

<li class={`w-1 bg-orange-500 transition-colors`}
  class:!bg-blue-500={highlight}
  class:!bg-green-500={isCurrent}
  class:!bg-orange-700={isSorted}
  style="height:{size*4}px; transition-duration:{ANIMATION_DURATION}ms"></li>
