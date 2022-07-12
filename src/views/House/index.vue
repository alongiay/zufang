<template>
  <div>
    <van-nav-bar title="标题" left-arrow />
    <SearchHouse></SearchHouse>
    <!-- 下拉菜单 -->
    <van-dropdown-menu duration="0">
      <van-dropdown-item title="区域">
        <van-cell>
          <van-picker :columns="columns" value-key="label" />
          <div class="btn">
            <van-button type="primary" class="btn1">取消</van-button>
            <van-button type="primary" class="btn2">确定</van-button>
          </div>
        </van-cell>
      </van-dropdown-item>
      <van-dropdown-item title="方式">
        <van-cell>
          <van-picker :columns="columns1" value-key="label" />
          <div class="btn">
            <van-button type="primary" class="btn1">取消</van-button>
            <van-button type="primary" class="btn2">确定</van-button>
          </div>
        </van-cell>
      </van-dropdown-item>
      <van-dropdown-item title="租金">
        <van-cell>
          <van-picker :columns="columns2" value-key="label" />
          <div class="btn">
            <van-button type="primary" class="btn1">取消</van-button>
            <van-button type="primary" class="btn2">确定</van-button>
          </div>
        </van-cell>
      </van-dropdown-item>
      <van-dropdown-item title="筛选" ref="filters" @open="isFilterShow = true">
      </van-dropdown-item>
    </van-dropdown-menu>
    <van-popup
      v-model="isFilterShow"
      position="right"
      :style="{ width: '80%', height: '100%' }"
      ><FilterHouse :body="body"></FilterHouse
    ></van-popup>
    <!-- 内容 -->
    <van-card
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    />
  </div>
</template>

<script>
import FilterHouse from './components/FilterHouse.vue'
import { getCondition } from '@/api/house'
export default {
  created () {
    this.getCondition()
  },
  data () {
    return {
      body: {},
      columns: [

      ],
      columns1: [],
      columns2: [],
      isFilterShow: false
    }
  },
  methods: {
    async getCondition () {
      const res = await getCondition(this.$store.state.cityValue)
      this.body = res.data.body
      console.log(this.body)
      res.data.body.area.children[0].children = [{ label: '' }]
      res.data.body.subway.children[0].children = [{ label: '' }]
      this.columns = [res.data.body.area, res.data.body.subway]
      console.log(this.columns)
      this.columns1 = res.data.body.rentType
      this.columns2 = res.data.body.price
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {
    FilterHouse
  }
}
</script>

<style scoped lang='less'>
/deep/.van-nav-bar {
  z-index: unset;
}
.search {
  top: 12px;
}
.btn {
  width: 750px;
  display: flex;
  justify-content: space-between;
}
.btn1 {
  width: 250px;
  height: 100px;
  background-color: #fff;
  color: #333;
  border: 0 #fff;
  font-size: 32px;
  padding: 0;
}
.btn2 {
  width: 500px;
  height: 100px;
  font-size: 32px;
  border: 0 #fff;
  padding: 0;
}
.van-cell {
  padding: 0;
}
.van-card {
  border-bottom: 1px solid #e5e5e5;
}
.van-popup {
  z-index: 1;
}
</style>
