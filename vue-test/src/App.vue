<template>
  <div id="app">
    <div class="header">
      <div class="logo" @click="handleClick">xxx学院</div>
      <div class="list">
        <router-link to="/home">首页</router-link>
        <router-link to="/learn">学习</router-link>
        <router-link to="/student">学员</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/activity">社区</router-link>
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
  methods: {
    handleClick(){
      this.$router.push('/home');
    }
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
  .header .list a.router-link-active{
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