<template>
    <div class="activity">
        <router-link :to="{ name: 'a' }">A</router-link>
        <router-link :to="{ name: 'b' }">B</router-link>
        <router-link :to="{ name: 'c' }">C</router-link>

        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
a {
  margin-right: 10px;
  padding: 5px 10px;
  text-decoration: none;
}

a.router-link-exact-active {
  background-color: #3385ff;
  color: #fff;
}

.content {
  margin-top: 40px;
  padding-left: 10px;
}
</style>