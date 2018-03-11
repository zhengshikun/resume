<template>
  <div class="car-2">
    <h1>技术专长</h1>
    <div class="ability">
      <transition appear appear-class="span1-class" appear-to-class="span1-to-class" appear-active-class="span1-active-class">
        <span>HTML/HTML5</span>
      </transition>
      <transition appear appear-class="span2-class" appear-to-class="span2-to-class" appear-active-class="span2-active-class">
        <span>CSS/CSS3</span>
      </transition>
      <transition appear appear-class="span3-class" appear-to-class="span3-to-class" appear-active-class="span3-active-class">
        <span>JavaScript</span>
      </transition>
      <transition appear appear-class="span4-class" appear-to-class="span4-to-class" appear-active-class="span4-active-class">
        <span>jQuery</span>
      </transition>
      <transition appear appear-class="span5-class" appear-to-class="span5-to-class" appear-active-class="span5-active-class">
        <span>Vue.js</span>
      </transition>
      <transition appear appear-class="span6-class" appear-to-class="span6-to-class" appear-active-class="span6-active-class">
        <span>ES6</span>
      </transition>
      <transition appear appear-class="span7-class" appear-to-class="span7-to-class" appear-active-class="span7-active-class">
        <span>webpack</span>
      </transition>
      <transition appear appear-class="span8-class" appear-to-class="span8-to-class" appear-active-class="span8-active-class">
        <span>git/Github</span>
      </transition>
      <transition appear appear-class="span9-class" appear-to-class="span9-to-class" appear-active-class="span9-active-class">
        <span>模块化/组件</span>
      </transition>
    </div>
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
      this.$router.push({path:'/'})
    },
    next: function () {
      this.$router.push({path:'/car3'})
    }
  }
}
</script>

<style scoped>
.car-2{
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;;
  background-color:rgb(105, 199, 168);
}
h1, span{
  margin: 0;
  padding: 0;
}
h1{
  margin-top: 12%;
  margin-bottom: 15px;
  color: rgb(243, 243, 243);
  font-family: 'Courier New', Courier, monospace;
}
.ability{
  width: 320px;
  margin: 0 auto;
  color: rgb(243, 243, 243);
}
span{
  display: inline-block;
  width: 120px;
  height: 35px;
  line-height: 35px;
  margin:5px 5px;
  background-color: rgb(67, 168, 135);
  border-radius: 5px;
}
button{
  width: 110px;
  height: 35px;
  border: 0;
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  color: #fff;
  font-family:'Courier New', Courier, monospace;
  background-color: rgb(56, 204, 155);
  box-shadow: 0 3px 10px rgb(124, 128, 131);
}
button:hover{
  background-color: rgb(67, 168, 135);
  box-shadow: 0 5px 20px rgb(124, 128, 131);
}
.span1-class{
  opacity: 0;
  transform: translateX(-40px);
}
.span1-active-class{
  transition: 1.5s;
}
.span2-class{
  opacity: 0;
  transform: translateX(40px);
}
.span2-active-class{
  transition: 1.5s;
}
.span3-class{
  opacity: 0;
  transform: translateX(-60px);
}
.span3-active-class{
  transition: 1.5s;
}
.span4-class{
  opacity: 0;
  transform: translateX(60px);
}
.span4-active-class{
  transition: 1.5s;
}
.span5-class{
  opacity: 0;
  transform: translateX(-80px);
}
.span5-active-class{
  transition: 1.5s;
}
.span6-class{
  opacity: 0;
  transform: translateX(80px);
}
.span6-active-class{
  transition: 1.5s;
}
.span7-class{
  opacity: 0;
  transform: translateX(-100px);
}
.span7-active-class{
  transition: 1.5s;
}
.span8-class{
  opacity: 0;
  transform: translateX(100px);
}
.span8-active-class{
  transition: 1.5s;
}
.span9-class{
  opacity: 0;
  transform: translateY(80px);
}
.span9-active-class{
  transition: 1.5s;
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
