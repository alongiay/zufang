<template>
  <div>
    <!-- 登录状态 -->
    <div class="title_user" v-if="user">
      <!-- 顶部背景图 -->
      <div>
        <van-image
          width="100%"
          fit="fill"
          :src="'http://liufusong.top:8080' + userInfo.avatar"
        />
      </div>
      <!-- 用户信息 -->
      <div class="my_info_user">
        <div class="my_icon_user">
          <van-image
            round
            width="100%"
            :src="'http://liufusong.top:8080' + userInfo.avatar"
          />
        </div>
        <div class="user">
          <div class="my_name">{{ userInfo.nickname }}</div>
          <van-button @click="outInfo" type="primary" class="logout" size="mini"
            >退出</van-button
          >
          <div class="edit_user">编辑个人资料<van-icon name="play" /></div>
        </div>
      </div>
    </div>
    <!-- 未登录状态 -->
    <div class="title" v-else>
      <!-- 顶部背景图 -->
      <div>
        <van-image
          width="100%"
          fit="fill"
          src="http://liufusong.top:8080/img/profile/bg.png"
        />
      </div>
      <!-- 用户信息 -->
      <div class="my_info">
        <div class="my_icon">
          <van-image
            round
            width="100%"
            src="http://liufusong.top:8080/img/profile/avatar.png"
          />
        </div>
        <div class="user">
          <div class="my_name">游客</div>
          <van-button @click="gotolink" class="login" plain>去登录</van-button>
        </div>
      </div>
    </div>
    <div class="banner" @click="go">
      <van-grid :column-num="3" :border="false" icon-size="20px">
        <van-grid-item icon="star-o" text="我的收藏" />
        <van-grid-item icon="wap-home-o" text="我的出租" />
        <van-grid-item icon="clock-o" text="看房记录" />
        <van-grid-item icon="idcard" text="成为房主" />
        <van-grid-item icon="manager-o" text="个人资料" />
        <van-grid-item icon="service-o" text="联系我们" />
      </van-grid>
    </div>
    <div class="kanke">
      <van-image
        class="haoke"
        width="92%"
        fit="cover"
        src=" http://liufusong.top:8080/img/profile/join.png"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { GetUserInfo } from '@/api/user'
export default {
  async created () {
    if (this.user && this.user.token) {
      try {
        const res = await GetUserInfo()
        console.log(res)
        this.userInfo = res.data.body
      } catch (err) {
        console.log(err)
      }
    }
  },
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    gotolink () {
      this.$router.push('/login')
    },
    async outInfo () {
      try {
        await this.$dialog.confirm({ message: '确定退出吗' })
        this.$store.commit('SetUser', null)
      } catch (err) {
        console.log(err)
      }
    },
    go () {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>
<style scoped lang='less'>
.title {
  height: 8rem;
}
.my_info,
.my_info_user {
  position: absolute;
  background: #fff;
  width: 80%;
  height: 25%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px 10px #ddd;
  margin: 60px auto 0;
  padding: 0 20px;
  text-align: center;
  font-size: 13px;
  top: 20%;
}
.my_info_user {
  height: 32%;
}
.my_icon,
.my_icon_user {
  position: relative;
  transform: translateY(-50%);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  border: 5px solid #f5f5f5;
  display: inline-block;
  box-shadow: 0 2px 2px #bdbdbd;
}
.van-grid-item {
  padding: 20px 0;
}
/deep/.van-grid-item__text {
  font-size: 26px !important;
  color: #333 !important;
}
.login {
  background-color: #21b97a;
  font-size: 13px;
  height: 60px;
  line-height: 60px;
  padding: 0 40px;
  color: #fff;
  margin-top: 30px;
  border-radius: 10px;
}
.my_name {
  margin-top: -30px;
  margin-bottom: 10px;
}
.van-grid p {
  font-size: 14px;
}
.kanke {
  margin-top: 10px;
  text-align: center;
}
.edit_user {
  margin-top: 40px;
  color: #999;
  font-size: 12px;
}
/deep/.logout {
  border-radius: 30px;
  color: #fff;
  padding: 4px 30px;
  background: #21b97a;
  font-size: 12px;
}
</style>
