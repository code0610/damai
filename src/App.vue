<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
      <div>
        <div class="admin_cont_menu floatLeft">
          <div class="line-height">我的大麦</div>
          <div>
            <ul>
              <li>
                <div class="line-height">交易中心</div>
                <ul>
                  <li class="line-height text-indent OrderManagement"><router-link to="/admin/ordermenu">订单管理</router-link></li>
                </ul>
              </li>
              <li>
                <div class="line-height">账户中心</div>
                <ul>
                  <li class="line-height text-indent"><router-link to="/admin/mymsg">个人信息</router-link></li>
                  <li class="line-height text-indent"><router-link to="/admin/purchasers">常用购票人</router-link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="admin_cont_c floatRight">
          <router-view />
        </div>
      </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
 background:#f5f5f5;
}
li{
  list-style: none;
}
.floatLeft{
  float: left;
}
.floatRight{
  float: right;
}
.linear-gradient {
  background: -webkit-linear-gradient(#EFEFEF, #FEFEFE); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#EFEFEF, #FEFEFE); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#EFEFEF, #FEFEFE); /* Firefox 3.6 - 15 */
  background: linear-gradient(#EFEFEF, #FEFEFE); /* 标准的语法（必须放在最后） */
}
</style>
