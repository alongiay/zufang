<template>
  <div>
    <van-nav-bar
      title="发布房源"
      left-text
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell-group>
      <van-cell title="房源信息" />
    </van-cell-group>
    <van-cell
      title="小区名称"
      is-link
      value="请输入小区名称"
      @click="$router.push('/sousuo')"
    />
    <van-cell-group>
      <van-field v-model="value" label="租房" placeholder="请输入租金/月">
        <template #right-icon>
          <span>￥/月</span>
        </template>
      </van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="value1" label="建筑面积" placeholder="请输入建筑面积">
        <template #right-icon>
          <span>㎡</span>
        </template>
      </van-field>
    </van-cell-group>
    <van-cell title="户型" is-link :value="value5" @click="show = true" />
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }"
      ><van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel(index)"
        @change="onChange"
      />
    </van-popup>
    <van-cell title="所在楼层" is-link value="请选择" @click="show1 = true" />
    <van-popup v-model="show1" position="bottom" :style="{ height: '40%' }"
      ><van-picker
        show-toolbar
        :columns="columns1"
        @confirm="onConfirm"
        @cancel="onCancel1"
        @change="onChange"
      />
    </van-popup>
    <van-cell title="朝向" is-link value="请选择" @click="show2 = true" />
    <van-popup v-model="show2" position="bottom" :style="{ height: '40%' }"
      ><van-picker
        show-toolbar
        :columns="columns2"
        @confirm="onConfirm"
        @cancel="onCancel2"
        @change="onChange"
      />
    </van-popup>
    <van-cell-group>
      <van-cell title="房屋标题" />
    </van-cell-group>
    <van-search
      class="between"
      v-model="value2"
      placeholder="请输入标题 (例如：整租小区名2室5000元)"
      left-icon="false"
    />
    <van-cell-group>
      <van-cell title="房屋图像" />
    </van-cell-group>
    <van-uploader>
      <van-button icon="plus" type="primary" color="gray"></van-button>
    </van-uploader>
    <van-cell-group>
      <van-cell title="房屋配置"></van-cell>
      <van-row type="flex" justify="space-around">
        <van-col span="3.6"
          ><van-icon name="gem" size="0.7rem"><p>砖石</p></van-icon></van-col
        >
        <van-col span="3.6"
          ><van-icon name="service" size="0.7rem"
            ><p>耳机</p></van-icon
          ></van-col
        >
        <van-col span="3.6"
          ><van-icon name="gold-coin" size="0.7rem"
            ><p>钱包</p></van-icon
          ></van-col
        >
        <van-col span="3.6"
          ><van-icon name="photograph" size="0.7rem"
            ><p>VR</p></van-icon
          ></van-col
        >
        <van-col span="3.6"
          ><van-icon name="music" size="0.7rem"><p>Best</p></van-icon></van-col
        >
      </van-row>
      <van-row type="flex" justify="space-around" class="tubiao">
        <van-col span="3.6"
          ><van-icon name="gem" size="0.7rem"><p>砖石</p></van-icon></van-col
        >
        <van-col span="3.6"
          ><van-icon name="service" size="0.7rem"
            ><p>耳机</p></van-icon
          ></van-col
        >
        <van-col span="3.6"
          ><van-icon name="gold-coin" size="0.7rem"
            ><p>钱包</p></van-icon
          ></van-col
        >
        <van-col span="3.6"
          ><van-icon name="photograph" size="0.7rem"
            ><p>VR</p></van-icon
          ></van-col
        >
        <van-col span="3.6"
          ><van-icon name="music" size="0.7rem"><p>Best</p></van-icon></van-col
        >
      </van-row>
    </van-cell-group>
    <div class="bottom_gray"></div>
    <van-cell-group>
      <van-cell title="房源描述" />
    </van-cell-group>
    <textarea
      class="miaoshu"
      id=""
      cols="30"
      rows="4"
      placeholder="请输入房屋描述信息"
    ></textarea>
    <div class="bottom">
      <van-button type="primary" class="button" color="gray">取消</van-button>
      <van-button type="primary" class="button" color="gray">确定</van-button>
    </div>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      value5: '',
      value: '',
      value1: '',
      value2: '',
      show: false,
      show1: false,
      show2: false,
      columns: ['一室', '二室', '三室', '四室', '四室+'],
      columns1: ['高层楼', '中层楼', '低层楼'],
      columns2: ['东', '西', '南', '北', '上', '下', '左', '右'],
      arr: []

    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onConfirm (index) {
      console.log(this.columns[index])
    },
    onChange (picker, value, index) {

    },
    onCancel () {
      this.show = false
    },
    onCancel1 () {
      this.show1 = false
    },
    onCancel2 () {
      this.show2 = false
    }

  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
/deep/ .van-search__content {
  background-color: #fff;
  padding: 0;
}
.van-button {
  width: 2rem;
  height: 2rem;
  margin: 30px;
}
.bottom {
  display: flex;
}
.button {
  width: 50%;
  height: 1.2rem;
  margin: 0;
}
.van-icon {
  text-align: center;
}
p {
  text-align: center;
  font-size: 0.3rem;
}
.tubiao {
  margin-top: 0.4rem;
}
.bottom_gray {
  height: 0.7rem;
  background-color: gray;
}
.miaoshu {
  width: 100%;
  height: 3rem;
  font-size: 0.4rem;
  border: 0;
  margin-left: 28px;
}
.between {
  padding: 0;
  margin-left: 22px;
}
</style>
