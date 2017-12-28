<template>
  <div class="header-con">
    <!-- 当前登录用户 -->
    <div class="current-user">
      <span>当前用户:
        <a href="javascript:;">{{username}}</a>
      </span>
    </div>
    <!-- 修改密码 -->
    <div class="change-pwd">
      <a href="javascript:;">修改密码</a>
    </div>
    <!-- 退出 -->
    <div class="logout">
      <a href="javascript:;">退出</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "HandSonZps"
    };
  }
};
</script>

<style lang="less">
.header-con {
  position: absolute;
  top: 0;
  right: 0;
  .current-user,
  .change-pwd,
  .logout {
    display: inline-block;
    padding: 18px 0;
    font-size: 14px;
    margin-right: 50px;
  }
}
</style>

