<template>
  <div>
    <router-view class='main' />
    <van-tabbar route >
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/house" icon="search">找房</van-tabbar-item>
      <van-tabbar-item replace to="/news" icon="home-o">咨询</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="home-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped>
.main{
  padding-bottom: 100px;
}
</style>
