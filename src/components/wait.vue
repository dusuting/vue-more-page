<template>
  <div class="main_box">
    <header>
      <img src="@/assets/images/logo.png" alt="">
      <i></i>
      <span>注册账号</span>
    </header>
    <div class="info_box">
      <div class="welcome">欢迎注册本系统，请如实完善资料！</div>
      <img src="@/assets/images/wait.png" alt="">
      <ul class="info_step">
        <li class="one act">请选择经销商类型</li>
        <li class="two act">提交信息</li>
        <li class="turee act">上传资质</li>
        <li class="for act">等待审核</li>
        <li class="five">注册完成</li>
      </ul>
      <div class="success_icon">
        <img src="@/assets/images/success.png" alt="">
      </div>
      <div class="success_text">
        上传成功！请耐心等待审核。
      </div>
      <button class="go_index" v-on:click="goIndex">返回首页</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wait',
    data () {
      return {
        msg: '注册类型'
      }
    },
    methods: {
      goIndex(){
        console.log("返回首页")
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .main_box{
    width: 962px;
    margin: 0 auto;
  }
  header{
    padding: 46px 0px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: left;
    justify-content: left;
  }
  header i{
    width: 2px;
    height: 30px;
    background: #666666;
    display: inline-block;
    margin: 0px 17px;
  }
  header span{
    font-size: 30px;
    color: #222222;
  }
  .info_box {
    height: 558px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px 8px 0px 0px;
    .info_step {
      text-align: left;
      padding: 0px;
      overflow: hidden;
      margin-bottom: 48px;
      li {
        text-align: center;
        list-style: none;
        float: left;
        color: #ccc;
      }
      .act{
        color: #567091;
      }
      .one{
        width: 250px;
        padding-left: 94px;
        box-sizing: border-box;
      }
      .two{
        width: 156px;
      }
      .turee{
        width: 154px;
      }
      .for{
        width: 145px;
      }
      .five{
        width: 164px;
      }
    }
    .success_icon{
      margin: 16px 0px 20px 0px;
    }
    .success_text{
      font-size: 22px;
    }
    .go_index{
      background: #3d76c3;
      color: #fff;
      font-size: 16px;
      border: none;
      border-radius: 2px;
      padding: 3px 16px;
      cursor: pointer;
      margin-top: 16px;
    }
  }

  .welcome{
    color: #fff;
    text-align: left;
    padding-left: 17px;
    line-height: 60px;
    font-size: 18px;
    background: #3f79c6;
    border-radius:  8px 8px 0px 0px;
    margin-bottom: 21px;
  }
</style>
