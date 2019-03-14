<template>
  <div id="app">
    <Navbar :active-item="activeItem" :toggle-active-menu="toggleMenu"/>
    <div class="numbers-table">
      <DataTable v-if="activeItem === 'dashboard'"/>
      <History v-if="activeItem === 'history'"/>
    </div>
  </div>
</template>

<script>
import DataTable from './components/DataTable.vue';
import Navbar from './components/Navbar.vue';
import History from './components/History.vue';

export default {
  name: 'app',
  components: {
    DataTable,
    Navbar,
    History,
  },
  data() {
    return {
      activeItem: 'dashboard',
    };
  },
  methods: {
    toggleMenu(menuItem) {
      this.activeItem = menuItem;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: #f5f4f4;
}
.numbers-table {
  padding: 20px;
  margin: 0 auto;
  display: block;
  width: 80%;
  margin: 0 auto;
}
</style>
