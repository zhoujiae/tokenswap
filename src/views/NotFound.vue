<template>
  <div class="content">
    404
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: this.$route.query.code
    };
  }
};
</script>
<style lang="scss" scoped>
.content {
  font-size: 70px;
  text-align: center;
  color: #000;
  margin-top: 86px;
  height: 400px;
  line-height: 400px;
  font-weight: bolder;
}
</style>
