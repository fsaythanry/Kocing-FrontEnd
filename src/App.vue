<template>
  <div id="app">
    <div class="main-container">
      <div id="nav"><router-link to="/">Home</router-link> |</div>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f2f2f2;
}
.main-container {
  width: 486px;
  height: 100vh;
  margin: 0 auto;
  background: white;
}

@media screen and (max-width: 467px) {
  .main-container {
    width: 100%;
  }
}
</style>
