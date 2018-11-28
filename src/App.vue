<template>
  <div class="wrapper">{{message}}</div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      message: "hello world."
    };
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  background: #e2e2e2;
}
</style>
