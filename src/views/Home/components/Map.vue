
<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow @click-left="$router.go(-1)" />
    <van-index-bar :index-list="indexList">
      <div v-for="(item, index) in indexList" :key="index">
        <van-index-anchor :index="item">{{
          item === "#" ? "当前城市" : item === "热" ? "热门城市" : item
        }}</van-index-anchor>
        <van-cell
          @click="onclick(item1)"
          :title="item1.label"
          v-for="(item1, index1) in newList[item]"
          :key="index1"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getMap, getHot } from '@/api/home'
export default {
  created () {
    this.getMap()
  },
  data () {
    return {
      arrList: [],
      hot: []
    }
  },
  methods: {
    async getMap () {
      try {
        const res = await getMap(1)
        this.arrList = res.data.body
        const res1 = await getHot()
        this.hot = res1.data.body
      } catch (Err) {
        console.log(Err)
      }
    },
    onclick (item1) {
      this.$store.commit('SetCurrent', item1.label)
      this.$store.commit('SetcityValue', item1.value)
      this.$router.go(-1)
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    indexList () {
      const intital = []
      this.arrList.forEach((item) => {
        intital.push(item.short.slice(0, 1))
      })
      const arr = [...new Set(intital)].sort().map(item => item.toUpperCase())
      arr.unshift('#', '热')
      return arr
    },
    newList () {
      const obj = {}
      this.indexList.forEach(item => {
        obj[item] = this.arrList.filter(item1 => {
          return item1.short.slice(0, 1).toUpperCase() === item
        })
      })
      obj['热'] = this.hot
      obj['#'] = [{ label: '北京' }]
      return obj
    }
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
