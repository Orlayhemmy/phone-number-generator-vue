<template>
  <div class="navbar">
    <div class="top-nav">
      <div class="logo">
        <img src="../assets/list.svg" alt="Logo">
        <p>GenerateIt!</p>
      </div>
    </div>
    <div class="bottom-nav">
      <div class="nav-items-container">
        <ul class="nav-items">
          <li
            v-for="(entry, index) in navItems"
            :class="listClass(entry)"
            :key="`entry-${index}`"
            @click="toggleActiveMenu(entry)"
          >
            <p>{{entry}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  props: ['activeItem', 'toggleActiveMenu'],
  data() {
    return {
      navItems: ['dashboard', 'history'],
    };
  },
  methods: {
    listClass(item) {
      return this.activeItem === item ? 'is-active' : '';
    },
  },
};
</script>
<style>
.navbar {
  background-color: #435b72;
}
.nav-items-container {
  width: 80%;
  margin: 0 auto;
}
.nav-items {
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.nav-items > li {
  cursor: pointer;
  text-transform: capitalize;
}
.top-nav {
  display: flex;
}
.logo {
  margin-left: 10%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 0;
}
.logo p {
  color: white;
  font-weight: 900;
  font-size: 18px;
  transform: scale(1.8, 1.5);
  padding: 10px 8px;
  margin-left: -15px;
}
.is-active {
  background: #4bc295;
  color: #ffffff;
  padding: 11px;
  margin-top: -11px;
}
.is-active::before {
  filter: invert(1) sepia(1) saturate(0);
}
.bottom-nav {
  background-color: #ffffff;
  height: 70px;
  border-bottom: 1px solid #cccccc59;
  display: flex;
}
img {
  width: 45px;
}
ul {
  padding: 0;
  margin: 11px 0;
  width: 20%;
  justify-content: space-between;
}
li:nth-child(1):before,
li:nth-child(2):before {
  content: "";
  background-size: 20px;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url("../assets/layout.svg");
}
li:nth-child(2):before {
  background-image: url("../assets/scroll.svg");
}
p {
  margin: 0;
}
</style>
