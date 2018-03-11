<template>
  <div class="car-1">
    <transition name="slide-fade">
      <div v-if="show" class="most" @click="show = !show">
        <h1>基本资料</h1>
        <span>姓名：郑士坤</span>
        <span>年龄：22</span>
        <span>工作经验：无</span>
        <span>学历：本科</span>
        <span>毕业学校：湖北大学</span>
        <span>应聘职位：WEB前端开发</span>
      </div>
    </transition>
    <div class="avatar"><img src="../assets/styles/avatar.jpg" alt=""></div>
    <transition appear appear-class="on-class" appear-to-class="on-to-class" appear-active-class="on-active-class">
      <h1>Hi,我叫郑士坤</h1>
    </transition>
    <transition appear appear-class="on-class" appear-to-class="on-to-class" appear-active-class="on-active-class">
      <p>高效率，高复用，易开发，易维护。</p>
    </transition>
    <transition appear appear-class="on-class" appear-to-class="on-to-class" appear-active-class="on-active-class">
      <p>用更短的时间，做更多的事~</p>
    </transition>
    <transition appear appear-class="on-class" appear-to-class="on-to-class" appear-active-class="on-active-class">
      <h2>前端实习生</h2>
    </transition>
    <transition appear appear-class="buttons-class" appear-to-class="buttons-to-class" appear-active-class="buttons-active-class">
      <button @click="show = !show">更多了解</button>
    </transition>
    <transition appear appear-class="buttons2-class" appear-to-class="buttons2-to-class" appear-active-class="buttons2-active-class">
      <button @click="next">下一页</button>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods:{
    next: function () {
      this.$router.push({path:'/car2'})
    }
  }
}
</script>

<style scoped>
.car-1{
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  background-color:rgb(72, 205, 209);
}
.avatar{
  width: 180px;
  height: 180px;
  border: 10px solid rgb(0, 195, 255);
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 10%;
  box-shadow: 0 15px 50px rgb(81, 81, 82);
}
img{
  width: 180px;
  height: 180px;
}
h1, h2, p, button, span{
  margin: 0;
  padding: 0;
  color: #fff;
  margin-top: 15px;
  font-family:'Courier New', Courier, monospace;
}
h1{
  text-shadow:2px 2px 10px rgb(26, 28, 29);
  margin-top: 50px;
}
p{
  color: rgb(217, 213, 219);
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
  background-color: rgb(0, 195, 255);
  box-shadow: 0 3px 10px rgb(124, 128, 131);
}
button:hover{
  background-color: rgb(72, 209, 204);
  box-shadow: 0 5px 20px rgb(124, 128, 131);
}
.most{
  position:absolute;
  width: 50%;
  height: 50%;
  top: 100px;
  left: 25%;
  text-align: center;
  background-color: rgb(240, 236, 231);
  opacity: 0.9;
  border-radius: 10px;
  overflow:auto;
}
.most h1{
  color: #000;
  text-shadow:2px 2px 10px rgb(98, 101, 102);
}
span{
  display: block;
  color: rgb(12, 11, 11);
  margin-top: 20px;
  font-weight: 550;
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
  transform: translateX(-50px);
}
.buttons-active-class{
  transition: 1s;
}
.buttons2-class{
  opacity: 0;
  transform: translateX(50px);
}
.buttons2-active-class{
  transition: 1s;
}
</style>
