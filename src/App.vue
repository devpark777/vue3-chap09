<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/p178">기존방법(p178)</router-link> |
    <router-link to="/p179">CompositionAPI(p179)</router-link> |
    <router-link to="/p180">CompositionAPI2(p180)</router-link> |
    <router-link to="/p181">CompositionAPI3(p181)</router-link> |
    <router-link to="/p182">CompositionAPI4(p182)</router-link> |
    <router-link to="/p183">9.1.3(LifeCycle Hooks)</router-link> |
    <router-link to="/p184">9.1.4(Provider/Inject)</router-link> |
    <router-link to="/bst">BootStrapTest</router-link> |
    <router-link to="/p188">9.2(Mixins각각)</router-link> |
    <router-link to="/p191">9.2(Mixins공용)</router-link> |
    <router-link to="/p192">9.3(Custom Directives)</router-link> |
    <router-link to="/p194">9.4(Plugins)</router-link> |

  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
