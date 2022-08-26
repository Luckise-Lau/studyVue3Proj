<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :rules="rules"
      ref="form"
      :model="user"
      @submit.prevent="handleSubmit"
    >
      <div class="login-form_header">
        <img
          class="login-logo"
          src="@/assets/logo.png"
          alt="拉钩心选"
        >
      </div>
      <el-form-item prop="account">
        <el-input
          v-model="user.account"
          placeholder="请输入用户名"
        >
          <template #prefix>
            <i class="el-input_icon el-icon-user" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="user.pwd"
          type="password"
          placeholder="请输入密码"
        >
          <template #prefix>
            <i class="el-input__icon el-icon-lock" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="imgcode">
        <div class="imgcode-wrap">
          <el-input
            v-model="user.imgcode"
            placeholder="请输入验证码"
          >
            <template #prefix>
              <i class="el-input__icon el-icon-key" />
            </template>
          </el-input>
          <img
            class="imgcode"
            alt="验证码"
            :src="captchaSrc"
            @click="loadCaptcha"
          >
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit-button"
          type="primary"
          :loading="loading"
          native-type="submit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts' setup>
import { onMounted, reactive, ref } from 'vue'
import { getCaptcha, login } from '@/api/common'
import type { IElForm, IFormRule } from '@/types/elementPlus'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'

const router = useRouter()
const route = useRoute()
const store = useStore()
const user = reactive({
  account: 'admin',
  pwd: '123456',
  imgcode: ''
})

// 验证码处理
const captchaSrc = ref('')
const loadCaptcha = async () => {
  const data = (await getCaptcha() as unknown) as Blob
  captchaSrc.value = URL.createObjectURL(data)
}
// 提交表单
const form = ref<IElForm | null>(null)
const loading = ref(false)
const rules = ref<IFormRule>({
  account: [
    { required: true, message: '请输入账号', trigger: 'change' }
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ],
  imgcode: [
    { required: true, message: '请输入验证码', trigger: 'change' }
  ]
})
const handleSubmit = async () => {
  // 验证表单
  const valid = await form.value?.validate()
  // 验证不通过 退出提交
  if (!valid) return false
  // 验证通过 loading 提示
  loading.value = true
  // 请求提交
  const { data } = await login(user).finally(() => {
    loading.value = false
  })

  // 跳转到上次访问的页面
  let redirect = route.query.redirect
  if (typeof redirect !== 'string') redirect = '/'
  router.replace(redirect)
  // 处理响应: 更新 store user
  store.commit('setUser', {
    ...data.user_info,
    token: data.token
  })
}

onMounted(() => {
  // 验证码请求数据
  loadCaptcha()
})
</script>

<style lang='less' scoped>
.login-container {
  min-width: 400px; height: 100vh;
  display: flex; justify-content: center;
  align-items: center; background-color: #2d3a4b;
}

.login-form {
  padding: 30px;
  border-radius: 6px;
  background: #fff;
  min-width: 350px;
  .login-form__header {
    display: flex; justify-content: center;
    align-items: center; padding-bottom: 30px;
  }

  .el-form-item:last-child {
    margin-bottom: 0;
  }

  .login__form-title {
    display: flex; color: #fff;
    justify-content: center;
  }

  .submit-button {
    width: 100%;
  }

  .login-logo {
    width: 271px; height: 74px;
  }

  .imgcode-wrap {
    display: flex; align-items: center;
    cursor: pointer;

    .imgcode {
      height: 37px;
    }
  }
}
</style>
