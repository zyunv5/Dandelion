<template>
  <div class="container">
    <el-row type="flex" justify="center">
      <h1>介是一个注册页面</h1>
    </el-row>
    <el-form
      :model="loginRule"
      status-icon
      :rules="rules"
      ref="loginRule"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="userName">
        <el-input v-model.number="loginRule.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input type="password" v-model="loginRule.passWord" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginRule')">注册</el-button>
        <el-button @click="resetForm('loginRule')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-row type="flex" justify="center">
      <el-button type="success" round @click="goLogin">已有账号，请直接登录</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    var validateName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("姓名不能为空"));
      }
      if (value) {
        this.$axios
          .get("/api/nameTest", {
            params: {
              userName: value
            }
          })
          .then(res => {
            if (res.data.code === 200) {
              callback();
            } else {
              return callback(new Error("账号已存在"));
            }
          });
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      callback();
    };
    return {
      loginRule: {
        userName: "",
        passWord: ""
      },
      rules: {
        userName: [{ validator: validateName, trigger: "blur" }],
        passWord: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      let that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          that
            .$axios({
              method: "post",
              url: "/api/register",
              data: {
                userName: this.loginRule.userName,
                userPassWord: this.loginRule.passWord
              }
            })
            .then(res => {
              if(res.data.code===200){
                alert(res.data.message)
              }else{
                alert(res.data.message)
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    goLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
