<template>
  <div class="login">
    <!-- 登陆 -->
    <div class="login-con">
      <div class="boss-logo">
        <img src="" alt="">
      </div>
      <!-- 登陆表单 -->
      <div class="form-con">
        <Form :modal="form" :rules="rules">
          <FormItem prop="userName">
            <Input type="text" v-model="form.userName" placeholder="请输入账户名">
            <span slot="prepend">
              <Icon :size="16" type="person"></Icon>
            </span>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="form.password" placeholder="请输入密码">
              <span slot="prepend">
                <Icon :size="14" type="locked"></Icon>
              </span>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" long>登录</Button>
          </FormItem>
          <FormItem>
            <Checkbox v-model="isRememberPwd" style="float:right">记住登录密码</Checkbox>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {
        userName: "",
        password: ""
      },
      rules: {
        userName: [{ required: true, message: "账号不能为空", trigger: "blur"}],
        password: [{required: true, message: "密码不能为空", trigger: "blur"}, { type: "string", min: 6, message: "密码长度不能低于6位"}]
      },
      isRememberPwd: false
    };
  }
};
</script>

<style  lang="less">
  @import './login.less';
</style>

