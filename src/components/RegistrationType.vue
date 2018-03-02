<template>
  <div class="main_box">
    <header>
      <img src="http://www.qianjiangcloud.com/desktop/themes/default/images/logo2.png" alt="">
      <i></i>
      <span>注册账号</span>
    </header>
    <div class="info_box">
      <div class="welcome">欢迎注册本系统，请如实完善资料！</div>
      <img src="@/assets/images/registration-ype.png" alt="">
      <ul class="info_step">
        <li class="one act">请选择经销商类型</li>
        <li class="two">提交信息</li>
        <li class="turee">上传资质</li>
        <li class="for">等待审核</li>
        <li class="five">注册完成</li>
      </ul>
      <div class="join">
        <div class="distribution">
          <div class="title">我想成为经销商</div>
          <img src="@/assets/images/distribution.png" alt="">
          <div>
            <button v-on:click="distributionBut">申请</button>
          </div>
        </div>
        <div class="terminal">
          <div class="title">我想成为终端商</div>
          <img src="@/assets/images/terminal.png" alt="">
          <div>
            <button v-on:click="terminalBut">申请</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RegistrationType',
    data () {
      return {
        msg: '注册类型'
      }
    },
    methods: {
      distributionBut: function() {
        console.log("经销商")
      },
      terminalBut: function(){
        console.log("终端商")
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
    .join{
      padding-left: 223px;
      font-size: 17px;
      .distribution{
        width: 218px;
        float: left;
        border-radius: 4px;
        background: #f4f7fa;
        padding-top: 20px;
        margin-right: 68px;
        border: 1px solid #e2e7ec;
        box-sizing: border-box;
        .title{
          margin-bottom: 32px;
        }
      }
      .terminal{
        width: 218px;
        float: left;
        padding-top: 20px;
        border-radius: 4px;
        background: #f4f7fa;
        border: 1px solid #e2e7ec;
        box-sizing: border-box;
        .title{
          margin-bottom: 32px;
        }
      }
      button{
        color: #fff;
        border: none;
        border-radius: 2px;
        background: #3d76c3;
        padding: 3px 16px;
        cursor: pointer;
        font-size: 16px;
        margin: 56px 0px 25px 0px;
      }
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
