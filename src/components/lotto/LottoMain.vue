<template>
  <div class="container">
    <div class="row mt-sm-5">

      <!--
        For문
          적용되어있는 태그를 생성하는것
          예시
            1번 예제는 lotto-ball 태그를 5번 만드는것
            2번 예제는 a 태그를 5번 만들면서 내부에 lottoball도 5번 만들어짐
      -->

      <!--1번 예제-->
      <LottoBall v-for="num in lottoSet" :key="num" :lottoNum="num"></LottoBall>
      
      <!--2번 예제-->
      <!-- <a v-for="num in lottoSet" :key="num">
        <LottoBall :lottoNum="num"></LottoBall>
      </a> -->

    </div>
  </div>
</template>

<script>
import LottoBall from './LottoBall.vue'

export default {
  name: 'LottoMain',
  components:{
    LottoBall
  },
  data() {
    return {
      lottoSet : new Set()
    }
  },
  // vue mounted()전에 created()가 실행됨
  created(){
    console.log(typeof this.lottoSet)
    while (this.lottoSet.size != 6) {
      const lottoNum = Math.ceil(Math.random() * 45 + 1) // ceil 소숫점 제거
      this.lottoSet.add(lottoNum)
    }

    for (let temp of this.lottoSet) {
      console.log(temp)
    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>