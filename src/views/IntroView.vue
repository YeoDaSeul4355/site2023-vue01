<template>
  <ContTitle title="intro" />
  <IntroCont />
</template>
<script>
// @ is an alias to /src
import ContTitle from "@/components/layout/ContTitle.vue";
import IntroCont from "@/components/intro/IntroCont.vue";

export default {
  components: {
    ContTitle,
    IntroCont,
  },
};
</script>
