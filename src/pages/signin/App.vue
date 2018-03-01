<template>
  <div id="app">
  
    <div class="login-top">  登录页logo</div>
    <div class="huiBg">
     <div class="main">
       <div class="left fl"><img src="@/assets/login-bg.png" width="520" height="429" />   </div>
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
              <div class="icon1 el-icon-info">

              </div>
            </div>
          </div>
          <!-- cont end -->
         </div>
       
         <!-- right-bottom end -->
       </div>
      <!-- right end -->
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
#app {
  @bgcolor:#fff;
  @huiBg:#f4f4f4;
  @fl:left;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
  .login-top{
    width:1000px;
    margin: 0 auto;
    height:80px;
    background:@bgcolor;
  }
  .huiBg{
    width:100%;
    height:auto;
    padding-top:55px;
    background:@huiBg;
   }
 .fl{
   float:@fl;
 }
 .fr{
   float:right;
 }
.clearfix:after{
  visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}
.clearfix{
  *zoom:1;
}
   .main{
     width:1000px;
     margin:0 auto;
     overflow: hidden;
     .left{
       width:520px;
       margin-right:66px;
     
     }
     .right{
       width:296px;
       height:auto;

       .right-top{
        width:296px;
        height:48px;
        overflow:hidden;
      
       .top{
        width:136px;
        height:48px;
        float:left;
        line-height:48px;
        font-size:16px;
        background:#fff;
        border-radius:5px;
        border:#ddd solid 1px;
        border-bottom:none;
        border-bottom-left-radius:0;
        border-bottom-right-radius:0;
       
       
       }
         .top-none{
           width:156px;
           height:48px;
           float:left;
           background:@huiBg;
          }
       }
        .right-bottom{
           width:100%;
           background:#fff;
           border-radius:5px;
           background:#fff;
            border:#ddd solid 1px;
            border-top:none;
           border-top-left-radius:0;
           border-top-right-radius:0;
           .right-bt-l{
            width:136px;
            float:left;
            height:1px;
           
           }
           .right-bt-r{
            width:160px;
            float:left;
            height:1px;
            border-top:#ddd solid 1px;
           }
           .cont{
            width:248px;
            height:auto;
            padding:40px 24px 0;
           }
        }
     }
   }


}
</style>
