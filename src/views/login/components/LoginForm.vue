<template>
  <el-form
    ref="loginForm"
    :model="loginUser"
    :rules="rules"
    label-width="60px"
    class="loginForm sign-in-form"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input
        v-model="loginUser.email"
        placeholder="Enter Email..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="loginUser.password"
        type="password"
        placeholder="Enter Password..."
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleLogin('loginForm')"
        type="primary"
        class="submit-btn"
        >登陆</el-button
      >
    </el-form-item>

    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码？ <a href="jnlp:http://localhost:3000/src/views/login/components/demo_jnlp.jnlp">立即找回</a></p>
    </div>
  </el-form>
</template>

<script lang="ts">
import { ref, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
export default {
  props: {
    loginUser: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
  },
  setup() {
    // @ts-ignore
    const { ctx } = getCurrentInstance();
    const router = useRouter();
    // 触发登录方法
    const handleLogin = (formName: string) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          router.push("/helloHome");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };

    return { handleLogin };
  },
};
</script>
<style scoped>
/* form */
.loginForm {
  margin-top: 60px;
  background-color: #fff;
  padding:  40px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>