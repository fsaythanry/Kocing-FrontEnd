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
  padding: 10px 0px 6px;
  bottom: 0;
  z-index: 10;
  background-color: #1a6134;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  box-shadow: 0px -5px 6px -4px rgba(26, 97, 52, 0.35);
  border-radius: 32px 32px 0 0;
  font-size: 16px;
}

@media screen and (max-width: 467px) {
  .nav {
    border-radius: 20px 20px 0 0;
    font-size: 14px;
  }
}
</style>
