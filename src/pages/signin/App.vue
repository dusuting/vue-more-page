<template>
  <div id="app">
  
    <div class="login-top">
      <img src="@/assets/images/logo.png" width="121" height="33">
    </div>
    <div class="huiBg">
     <div class="main">
       <div class="left fl"><img src="@/assets/images/login-bg.png" width="520" height="429" />   </div>
       <div class="right fl">
        <div class="right-top">
          <div class="top">
           帐号登录
          </div>
          <div class="top-none"></div>
         </div>
         <div class="right-bottom">
          <div class="right-bt-l">
          </div>
          <div class="right-bt-r">
          </div>
          <div class="clearfix"></div>
          <div class="cont">
            <div class="ipt-warp">
              <span class="icon1">
                <img src="@/assets/images/login.png">
              </span>
              <input type="text" name="" placeholder="用户名/手机号码">
            </div>
            <!-- ipt-warp end -->
             <div class="ipt-warp">
              <span class="icon1">
                <img src="@/assets/images/lock.png">
              </span>
              <input type="password" name="" placeholder="请输入密码">
            </div>
            <!-- ipt-warp end -->
            <div class="remember">
             <label> <input type="checkbox" name=""><span>记住用户名</span></label>
              <a href="#">忘记密码</a>
            </div>
            <div class="signin-btn">登录</div>
            <div class="register-btn">立即注册</div>
          </div>
          <!-- cont end -->
         </div>
       
         <!-- right-bottom end -->
       </div>
      <!-- right end -->
     </div>     
    </div>
    <!-- huiBg end -->
    <div class="footer">
      <div class="main">
        <div class="footer-link">
          <a href="">关于我们</a>
          <a href="">联系我们</a>
          <a href="">商家入驻</a>
          <a href="">手机劲酒</a>
          <p>沪ICP证070359号</p>
          <p>Copyright&copy2017-2018&nbsp&nbsp千匠qianjiangcloud.com版权所有</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">

</style>
