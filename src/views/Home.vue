<template>
  <div class="home">
    <div id="nav-covid">
      <router-link :to="{ path: `/covid19` }" class="mb-0"
        >Pantau Perkembangan Covid-19 <span>disini!</span></router-link
      >
      <div @click.stop="hideCovid">
        <font-awesome-icon
          :icon="['fas', 'times-circle']"
          size="lg"
          style="cursor:pointer; opacity:.5;"
        />
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
.home {
  font-size: 16px;
  padding: 24px 16px;
}
#nav-covid {
  background-color: #e7efea;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  a {
    color: #4e4e4e;

    &:hover {
      text-decoration: none;
    }
  }

  span {
    color: #1a6134 !important;
  }
}
</style>
