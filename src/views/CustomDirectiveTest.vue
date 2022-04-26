<template>
   <h1>Custom Directive 테스트</h1>
   <input type="text" v-focus>

   <div>
       <p v-pin="position" class="pin">페이지 고정영역</p>
   </div>
   <div></div>
</template>

<script>
export default {
 directives: {
//     focus: {
//       mounted(el) {
//         el.focus();
//       },
//     },
    //  pin : {
    //      mounted(el, binding) {
    //          el.style.position = 'fixed';
    //          el.style.top = binding.value.top + 'px';
    //          el.style.left = binding.value.left + 'px';             
    //      },
    //  }
  },
  data() {
      return {
          position : {top:250, left:500}
      }
  }
}
</script>

<style scoped>
   .pin {
       background: orange;
   }
</style>