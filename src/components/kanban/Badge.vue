<template>
  <div
    class=" text-white " :style="`display:flex; background-color: ${color}; opacity: 90%; border-radius: 8px; font-size: 15px; font-weight: normal; `"
    
  >
    <span class="" style=""></span>
    <span>
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "teal"
    }
  }
};
</script>
