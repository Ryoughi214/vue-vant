<template>
  <div class="h5-wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
// 导入axios
import axios from "axios"

export default {
  name: 'h5-wrapper',
  // 1.数据
  data() {
    return {
      articles: [],
    };
  },
  // created 钩子
  async created() {
  const { data } = await axios.get("https://mock.boxuegu.com/mock/3083/articles")
  this.list = data.result.rows
},
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
</style>
<style lang="less" scoped>
.h5-wrapper {
  .content {
    margin-bottom: 51px;
  }
  .tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    background: #fff;
    border-top: 1px solid #e4e4e4;
    a {
      flex: 1;
      text-decoration: none;
      font-size: 14px;
      color: #333;
      -webkit-tap-highlight-color: transparent;
      &.router-link-active {
        color: #fa0;
      }
    }
  }
}
</style>