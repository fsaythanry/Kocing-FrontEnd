<template>
  <nav class="nav">
    <menu-link :routerName="'/'" :navText="'beranda'">
      <font-awesome-icon :icon="['fas', 'home']" />
    </menu-link>

    <menu-link :routerName="'warung'" :navText="'warung'">
      <font-awesome-icon :icon="['fas', 'utensils']" />
    </menu-link>

    <menu-link :routerName="'bantuan'" :navText="'bantuan'">
      <font-awesome-icon :icon="['fas', 'hands-helping']" />
    </menu-link>

    <menu-link :routerName="'riwayat'" :navText="'riwayat'">
      <font-awesome-icon :icon="['fas', 'history']" />
    </menu-link>

    <menu-link :routerName="'akun'" :navText="'akun'">
      <font-awesome-icon :icon="['fas', 'user']" />
    </menu-link>
  </nav>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faHome,
  faUtensils,
  faHandsHelping,
  faHistory
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import MenuLink from './MenuLink';

library.add(faUser, faHome, faUtensils, faHandsHelping, faHistory);

export default {
  components: {
    FontAwesomeIcon,
    MenuLink
  },
  name: 'bottom-menu'
};
</script>

<style lang="scss" scoped>
.nav {
  width: inherit;
  position: fixed;
  padding: 12px 0;
  bottom: 0;
  z-index: 10;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 0px 0px 10px #0000001a;
  font-size: 16px;
}

@media screen and (max-width: 467px) {
}
</style>
