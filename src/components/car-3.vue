<template>
  <div class="car-3">
    <h1>个人项目/作品</h1>
    <transition appear appear-class="on-class" appear-to-class="on-to-class" appear-active-class="on-active-class">
      <p>（Personal items/Works）</p>
    </transition>
    <transition appear appear-class="on-class" appear-to-class="on-to-class" appear-active-class="on-active-class">
      <div class="works">
        <h3>郑士坤的个人简历</h3>
        <a href="https://github.com/zhengshikun/resume"><p>我的个人简历</p></a>
      </div>
    </transition>
    <transition appear appear-class="buttons-class" appear-to-class="buttons-to-class" appear-active-class="buttons-active-class">
      <button @click="last">上一页</button>
    </transition>
    <transition appear appear-class="buttons2-class" appear-to-class="buttons2-to-class" appear-active-class="buttons2-active-class">
      <button @click="next">下一页</button>
    </transition>
  </div>
</template>

<script>
export default {
  methods:{
    last: function () {
      this.$router.push({path:'/car2'})
    },
    next: function () {
      this.$router.push({path:'/car4'})
    }
  }
}
</script>

<style scoped>
.car-3{
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  background-color:rgb(255, 192, 203);
}
h1{
  margin-top: 12%;
  margin-bottom: 15px;
  color: rgb(255, 249, 249);
  font-family: 'Courier New', Courier, monospace;
}
p{
  color:rgb(236, 120, 140);
}
a{
  text-decoration: none;
}
.works{
  width: 400px;
  height: 100px;
  margin: 0 auto;
  border: 1px solid #fff;
  border-radius: 5px;
}
.works h3{
  color: rgb(255, 249, 249);
  font-family: 'Courier New', Courier, monospace;
}
.works p:hover{
  cursor: pointer;
  color:rgb(78, 78, 196);
  text-decoration:underline;
}
button{
  width: 110px;
  height: 35px;
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  color: #fff;
  font-family:'Courier New', Courier, monospace;
  background-color: rgb(252, 160, 175);
  box-shadow: 0 3px 10px rgb(124, 128, 131);
}
button:hover{
  background-color: rgb(236, 120, 140);
  box-shadow: 0 5px 20px rgb(124, 128, 131);
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
