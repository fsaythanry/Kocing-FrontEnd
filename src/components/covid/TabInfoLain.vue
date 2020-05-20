<template>
  <div>
    <h2 class="title">Cara Pencegahan</h2>
    <h2 class="title">Sumber Informasi</h2>

    <div class="c-card-lain-wrapper">
      <a href="">
        <div class="c-card-lain">
          <p class="m-0">Covid-19 Indonesia</p>
          <img src="../../assets/Icon awesome-external-link-alt.svg" />
        </div>
      </a>
      <a href="">
        <div class="c-card-lain">
          <p class="m-0">Kawal Covid-19</p>
          <img src="../../assets/Icon awesome-external-link-alt.svg" />
        </div>
      </a>
      <a href="">
        <div class="c-card-lain">
          <p class="m-0">Corona Tracker</p>
          <img src="../../assets/Icon awesome-external-link-alt.svg" />
        </div>
      </a>
      <a href="">
        <div class="c-card-lain">
          <p class="m-0">WHO Internasional</p>
          <img src="../../assets/Icon awesome-external-link-alt.svg" />
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tabs-info-lain'
};
</script>
<style lang="scss" scoped>
.c-card-lain-wrapper {
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
  }

  .c-card-lain {
    display: flex;
    justify-content: space-between;
    background: #f1f1f1 0% 0% no-repeat padding-box;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 8px;
    transition: 0.25s ease;

    &:focus,
    &:active,
    &:hover {
      background: #d6d6d6 0% 0% no-repeat padding-box;
    }

    p {
      font: 500 14px/17px Roboto;
      color: #1e1e1e;
    }
  }
}
</style>
