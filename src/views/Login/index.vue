<template>
  <div>
    <van-nav-bar title="账号登录" @click-left="fn">
      <template #left>
        <van-icon name="arrow-left" size="22" color="#fff" />
      </template>
    </van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^[a-zA-Z0-9_-]{6,16}$/, message: '用户名必须6-16位' },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button color="#1cb676" block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
      <a class="registe" href="#/registe">还没有账号？去注册</a>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/login'
export default {
  created () { },
  data () {
    return {
      username: 'johnclark9527',
      password: '123456'
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        const res = await login(values)
        console.log(res)
        this.$store.commit('SetUser', res.data.body)
        this.$toast.success('登录成功')
        if (this.$store.state.user && this.$store.state.user.token) {
          this.$router.push('/my')
        } else {
          this.$toast.fail('账号/密码错误')
        }
      } catch (err) {
        this.$toast.fail('登录失败')
      }
    },
    fn () {
      console.log(123)
      this.$router.back()
    }
  },
  computed: {
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped>
.van-field {
  height: 1.5rem !important;
}
.registe {
  color: #666;
  font-size: 20px;
  margin-left: 25px;
}
</style>
