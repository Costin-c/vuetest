<template>
  <div id="app">
    <div class="header">
      <div class="logo">xxx学院</div>
      <div class="list">
        <router-link to="/">首页</router-link>
        <router-link to="/Learn">学习</router-link>
        <router-link to="/Student">学员</router-link>
        <router-link to="/About">关于</router-link>
        <router-link to="/Activity">社区</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .header{
    display: flex;
    justify-content: space-between;
    height: 60px;
    line-height: 60px;
    background-color: dodgerblue;
  }
  .header .logo{
    color: #fff;
  }
  .header .list a{
    text-decoration: none;
    margin-left: 15px;
  }
  .header .list a.linkactive.link{
    color: #fff;
    font-weight: bold;
  }
  .content{
    margin-top: 50px;
  }
  .content,
  .header{
    padding: 0 100px;
  }


</style>