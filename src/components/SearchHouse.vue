<template>
  <div class="search">
    <van-button
      to="/map"
      icon="arrow-down"
      type="primary"
      size="small"
      icon-position="right"
      >{{ $store.state.current }}</van-button
    >
    <form action="/">
      <van-search van-search v-model="value" placeholder="请输入搜索关键词">
      </van-search>
    </form>
    <div>
      <van-icon class="map" name="star-o" color="#fff" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchHouse',
  created () { },
  data () {
    return {
      value: ''
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.search {
  position: absolute;
  top: 40px;
  left: 80px;
  .van-button {
    position: absolute;
    background-color: #fff;
    color: #333;
    border: 0 #fff;
    height: 68px;
    font-size: 24px;
    /deep/.van-icon {
      color: #333;
    }
  }
  /deep/.van-search {
    height: 68px;
    padding: 0;
    margin-left: 60px;
    width: 500px;
    .van-search__content {
      background-color: #fff;
    }
  }
  .van-search__action {
    height: 68px;
  }
  .van-cell {
    margin-left: 30px;
  }
  /deep/.van-icon-search {
    border-left: 1px solid;
    padding-left: 10px;
    color: #9c9fa1;
  }
}
.map {
  position: absolute;
  right: -60px;
  top: 10px;
}
</style>
