<template>
  <div>
    <div class="header">
      <h1 class="h5 font-weight-bold">LWS</h1>
      <h2 class="h6"><small>Layanan Warga sekitar</small></h2>
    </div>
    <div class="home">
      <div id="nav-covid">
        <router-link :to="{ path: `/covid19` }" class="mb-0"
          >Pantau Perkembangan Covid-19 <span>disini!</span></router-link
        >
        <div @click.stop="hideCovid">
          <font-awesome-icon
            :icon="['fas', 'times-circle']"
            size="sm"
            style="cursor:pointer; opacity:.5;"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTimesCircle);

export default {
  components: {
    FontAwesomeIcon
  },
  name: 'Home',
  methods: {
    hideCovid() {
      event.target.closest('#nav-covid').classList.add('d-none');
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  background-color: #dde7e1;
  border-radius: 0px 0px 16px 16px;
  padding: 24px;
  margin-bottom: 24px;
  h1,
  h2 {
    color: #1e1e1e;
    opacity: 1;
  }
}

.home {
  font-size: 16px;
  padding: 0 16px;
}
#nav-covid {
  background-color: #f1f1f1;
  border-radius: 10px;
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  a {
    color: #1e1e1e;
    font-size: 0.75em;

    &:hover {
      text-decoration: none;
    }
  }

  span {
    color: #1a6134 !important;
  }
}
</style>
