<template>
  <div>
    <div class="title">
      <!-- 轮播图 -->
      <div class="RotationChart">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="'http://liufusong.top:8080' + image.imgSrc" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 搜索框 -->
      <SearchHouse></SearchHouse>
    </div>
    <div class="tubiao">
      <div class="yi">
        <van-icon name="wap-home-o" class="er" size="0.8rem"
          ><p>整租</p></van-icon
        >
      </div>
      <div class="yi">
        <van-icon name="friends-o" class="er" size="0.8rem"
          ><p>合租</p></van-icon
        >
      </div>
      <div class="yi">
        <van-icon name="location-o" class="er" size="0.8rem"
          ><p>地图找房</p></van-icon
        >
      </div>
      <div class="yi">
        <van-icon
          name="wap-home"
          class="er"
          size="0.8rem"
          @click="$router.push('/publish')"
          ><p>去出租</p></van-icon
        >
      </div>
    </div>
    <div class="group">
      <div class="top">
        <h3>租房小组</h3>
        <span>更多</span>
      </div>
      <div class="bottom">
        <van-grid :column-num="2">
          <van-grid-item v-for="item in groupsId" :key="item.id">
            <img
              :src="'http://liufusong.top:8080' + item.imgSrc"
              alt=""
              class="imgSrc"
            />
            <div>
              <p>{{ item.title }}</p>
              <p>{{ item.desc }}</p>
            </div>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import { getImg, getMap, getGroups } from '@/api/home'
export default {
  async created () {
    const img = await getImg()
    const city = await getMap(1)
    const res = await getGroups({ id: this.arrList.value })
    console.log(res)
    this.groupsId = res.data.body
    this.images = img.data.body
    this.arrList = city.data.body
  },
  data () {
    return {
      images: [
      ],
      groupsId: [],
      arrList: []

    }
  },
  methods: {
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.group {
  background-color: #f6f5f6;
  .top {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    h3 {
      font-size: 30px;
    }
    span {
      color: #787d82;
      font-size: 28px;
    }
  }
  .bottom {
    padding-bottom: 10px;
    .van-col {
      display: flex;
      background-color: #fff;
      margin-left: 20px;
      height: 116px;
    }
  }
}
.van-row {
  display: flex;
  margin: 15px;
  div {
    text-align: center;
  }
  .van-icon {
    border-radius: 50%;
    background: rgb(230, 253, 223);
    color: rgb(20, 186, 20);
    padding: 20px;
  }
  p {
    font-size: 28px;
    margin: 12px;
  }
}
.title {
  position: relative;

  .RotationChart img {
    width: 10rem;
    height: 5.6rem;
  }
}
.van-grid-item {
  width: 340px !important;
  height: 120px;
  padding: 10px;
  font-size: 26px !important;
}
/deep/.van-grid-item__content {
  flex-direction: unset;
}
.imgSrc {
  width: 80px;
  height: 80px;
}
.tubiao {
  height: 2.7rem;
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.tubiao .yi {
  background-color: rgb(235, 235, 234);
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
}
.tubiao .yi .er {
  margin-top: 0.5rem;
}
.tubiao .yi .er p {
  font-size: 0.35rem;
  margin-top: 0.7rem;
}
</style>
