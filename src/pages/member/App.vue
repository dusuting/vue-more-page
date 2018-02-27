<template>
  <div id="app">
    会员中心
    <ul>
      <li><a href="index.html">首页</a></li>
      <li><a href="member.html">会员中心</a></li>
      <li><a href="lognin.html">登录</a></li>
      <li><a href="register.html">注册</a></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
