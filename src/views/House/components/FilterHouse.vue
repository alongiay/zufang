<template>
  <div>
    <div class="houseType">
      <h3>户型</h3>
      <div class="bottom">
        <van-row gutter="0">
          <van-col span="12" v-for="item in body.roomType" :key="item.id"
            ><van-button
              type="primary"
              :class="{
                btnclass: arr.some((item1) => item1 === item.label),
              }"
              @click="btn(item)"
              >{{ item.label }}</van-button
            ></van-col
          >
        </van-row>
      </div>
    </div>
    <div class="houseType">
      <h3>朝向</h3>
      <div class="bottom">
        <van-row gutter="0">
          <van-col span="12" v-for="item in body.oriented" :key="item.id"
            ><van-button
              type="primary"
              :class="{
                btnclass: arr.some((item1) => item1 === item.label),
              }"
              @click="btn(item)"
              >{{ item.label }}</van-button
            ></van-col
          >
        </van-row>
      </div>
    </div>
    <div class="houseType">
      <h3>楼层</h3>
      <div class="bottom">
        <van-row gutter="0">
          <van-col span="12" v-for="item in body.floor" :key="item.id"
            ><van-button
              type="primary"
              :class="{
                btnclass: arr.some((item1) => item1 === item.label),
              }"
              @click="btn(item)"
              >{{ item.label }}</van-button
            ></van-col
          >
        </van-row>
      </div>
    </div>
    <div class="houseType">
      <h3>房屋亮点</h3>
      <div class="bottom">
        <van-row gutter="0">
          <van-col
            span="12"
            v-for="item in body.characteristic"
            :key="item.id"
            :class="{
              btnclass: arr.some((item1) => item1 === item.label),
            }"
            @click="btn(item)"
            ><van-button type="primary">{{ item.label }}</van-button></van-col
          >
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    body: {
      type: Object,
      required: true
    }
  },
  created () {
    console.log(this.body)
  },
  data () {
    return {
      arr: []

    }
  },
  methods: {
    btn (item) {
      if (this.arr.some(item1 => item1 === item.label)) {
        const index = this.arr.indexOf(item.label)
        this.arr.splice(index, 1)
      } else {
        this.arr.push(item.label)
      }
    }

  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.houseType {
  h3 {
    font-size: 30px;
    margin: 40px;
  }
}
.bottom {
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 50px;
  margin-left: 50px;
}
.van-col--12 {
  width: 35%;
  padding-left: 100px;
  .van-button {
    width: 136px;
    height: 60px;
    border: 1px solid #ddd;
    color: #888;
    font-size: 12px;
    background-color: #fff;
    padding-bottom: 30px;
    text-align: center;
    padding: 30px;
  }
}
/deep/.btnclass {
  border: 1px solid #21b97a !important;
  color: #21b97a !important;
  background-color: #defaef !important;
}
</style>
