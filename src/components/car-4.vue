<template>
  <div class="car-4">
    <transition name="slide-fade">
      <div v-if="shows" class="most" @click="shows = !shows"><img src="../assets/styles/wb.png" alt=""></div>
      <div v-if="show" class="most" @click="show = !show"><img src="../assets/styles/weixin.png" alt=""></div>
    </transition>
    <h1>联系方式/社交账号</h1>
    <transition appear appear-class="on-class" appear-to-class="on-to-class" appear-active-class="on-active-class">
    <p>QQ：646537311</p>
    </transition>
    <transition appear appear-class="on-class" appear-to-class="on-to-class" appear-active-class="on-active-class">
    <p>邮箱：646537311@qq.com</p>
    </transition>
    <transition appear appear-class="on-class" appear-to-class="on-to-class" appear-active-class="on-active-class">
    <p>电话:18656465019</p>
    </transition>
    <div>
      <a href="https://github.com/zhengshikun"><img src="../assets/styles/github.png" alt=""></a>
      <em @click="shows = !shows"><img src="../assets/styles/weibo.png" alt=""></em>
      <em @click="show = !show"><img src="../assets/styles/wx.png" alt=""></em>
      <a href="https://www.zhihu.com/people/zheng-shi-kun-7/activities"><img src="../assets/styles/zhihu.png" alt=""></a>
    </div>
    <transition appear appear-class="buttons-class" appear-to-class="buttons-to-class" appear-active-class="buttons-active-class">
    <button @click="last">上一页</button>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shows: false,
      show:false
    }
  },
  methods:{
    last: function () {
      this.$router.push({path:'/car3'})
    }
  }
}
</script>

<style scoped>
.car-4{
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  background-color:rgb(0, 174, 255);
}
h1, p, img{
  margin: 0;
  padding: 0;
  color: #fff;
}
h1{
  margin-top: 12%;
  margin-bottom: 70px;
  font-family: 'Courier New', Courier, monospace;
}
p{
  margin-top: 13px;
  color: rgb(37, 117, 223);
  font-size: 17px;
}
img{
  width: 50px;
  height: 50px;
  margin:30px 5px;
  cursor: pointer;
  opacity: 0.6;
}
img:hover{
  opacity: 1;
}
button{
  width: 110px;
  height: 35px;
  margin-left: 10px;
  margin-right: 10px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  color: #fff;
  font-family:'Courier New', Courier, monospace;
  background-color: rgb(7, 161, 233);
  box-shadow: 0 3px 10px rgb(124, 128, 131);
}
button:hover{
  background-color: rgb(26, 117, 236);
  box-shadow: 0 5px 20px rgb(124, 128, 131);
}
.most{
  position:absolute;
  width: 30%;
  height: 40%;
  top: 100px;
  left: 35%;
  text-align: center;
  background-color: rgb(255, 255, 255);
  opacity: 0.9;
  border-radius: 10px;
  overflow: hidden;
}
.most img{
  width: 80%;
  height: 90%;
  margin: auto;
  margin-top: 5%;
  opacity: 1;
}
.slide-fade-enter-active {
  transition: all .6s ease;
}
.slide-fade-leave-active {
  transition: all .6s ease;
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateY(20px);
  opacity: 0;
}
.on-class{
  opacity: 0;
  transform: translateY(50px);
}
.on-active-class{
  transition: 1s;
}
.buttons-class{
  opacity: 0;
  transform: translateY(-50px);
}
.buttons-active-class{
  transition: 1s;
}
</style>
