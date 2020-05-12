<template>
  <div class="not-found">
    <img src="../assets/not_found.svg" alt="not found" />
    <h6 class="mb-0">Upss, Halaman tidak ditemukan.</h6>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound'
};
</script>
<style lang="scss" scoped>
.not-found {
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  img {
    margin-bottom: 32px;
    width: 60%;
  }
}
</style>
