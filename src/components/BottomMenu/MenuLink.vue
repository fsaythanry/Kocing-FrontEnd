<template>
  <div>
    <router-link
      :to="{ path: routerName }"
      class="nav-item"
      exact-active-class="active"
    >
      <span class="nav-icon">
        <slot></slot>
      </span>
      <span class="nav-text">
        {{ navText }}
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'menu-link',
  props: {
    navText: {
      type: String,
      required: true
    },
    routerName: {
      type: String,
      require: true
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-item {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover span.nav-text,
  &:focus span.nav-text,
  &.active span.nav-text {
    color: #fff;
  }

  &:hover span.nav-icon,
  &:focus span.nav-icon,
  &.active span.nav-icon {
    background-color: #fff;
    color: #1a6134;
    font-size: 1em;
  }

  span.nav-icon {
    width: 34px;
    height: 34px;
    font-size: 1.45em;
    background-color: transparent;
    border-radius: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-bottom: 4px;
    transition: 0.25s ease-in-out;
  }

  span.nav-text {
    font-size: 0.75rem;
    color: #fff;
    transition: 0.25s ease-in-out;
    text-transform: capitalize;
  }
}

@media screen and (max-width: 467px) {
  .nav-item {
    span.nav-icon {
      width: 32px;
      height: 32px;
    }
    span.nav-text {
      font-size: 0.65rem;
    }
  }
}
</style>
