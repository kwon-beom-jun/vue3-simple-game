<template>
  <main>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4 d-flex justify-content-center">
          <div class="card" style="width: 18rem">
            <img v-bind:src="user.img" class="card-img-top" alt="..." />
            <div class="card-body text-center">
              <h5 class="card-title">당신</h5>
              <!-- <button class="btn btn-primary m-2 your-rsp">가위</button>
                <button class="btn btn-primary m-2 your-rsp">바위</button>
                <button class="btn btn-primary m-2 your-rsp">보</button> -->
              <button v-for="(rsp, index) in rspArr" :key="index" class="btn btn-primary m-2" @click="setUserRsp">
                {{ rsp }}
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex justify-content-center">
          <div class="card" style="width: 18rem">
            <img src="https://taegon.kim/wp-content/uploads/2018/05/image-5.png" class="card-img-top" alt="..." />
            <div class="card-body text-center">
              <h5 class="card-title">심판</h5>
              <p>{{ result }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex justify-content-center">
          <div class="card" style="width: 18rem">
            <img :src="computer.img" class="card-img-top" alt="..." />
            <div class="card-body text-center">
              <h5 class="card-title">컴퓨터</h5>
              <button id="rsp-btn-computer" class="btn btn-primary m-2">{{ rspArr[computer.rsp] }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import { ref, reactive } from "vue";

// assets : 정적 리소스 폴더
export default {

  setup() {

    const imgArr = [
      require('@/assets/rsp/img/scissor.jpg'),
      require('@/assets/rsp/img/rock.jpg'),
      require('@/assets/rsp/img/paper.jpg') 
    ]

    const rspArr = ref(['가위', '바위', '보'])

    let result = ref('')

    const user = reactive({
      name : 'user',
      rsp :0, // rspArr인덱스값
      img:'https://taegon.kim/wp-content/uploads/2018/05/image-5.png'
    })

    const computer = reactive({
      name : 'computer',
      rsp :0, // rspArr인덱스값
      img:'https://taegon.kim/wp-content/uploads/2018/05/image-5.png'
    })

    // 가위, 바위, 보 눌렀을때 이미지 교체
    // event 객체 : action을 수행했을때 웹 브라우저가 event라는 객체를 만들어서 전해줌
    const setUserRsp = (event) => {
      console.log(event.target.innerText)
      user.rsp = rspArr.value.indexOf(event.target.innerText)
      user.img = imgArr[user.rsp]

      console.log(user.rsp)
      console.log(user.img)

      result.value = resultRsp() // '당신이 이겼습니다'
      console.log(result.value)
    }

    const resultRsp = () => {
      let result = ''
      computer.rsp = randomRsp()
      computer.img = imgArr[computer.rsp]

      console.log(computer.rsp)
      if (user.rsp == computer.rsp) {
        console.log('비겼습니다.')
        result = '비겼습니다.'
        return result
      }

      if (rspArr.value[computer.rsp] == '가위') {

        if (rspArr.value[user.rsp] == '바위') result = '당신이 이겼습니다.'
        else if (rspArr.value[user.rsp] == '보') result = '당신이 졌습니다'

      } else if (rspArr.value[computer.rsp] == '바위') {

        if (rspArr.value[user.rsp] == '보') result = '당신이 이겼습니다.'
        else if (rspArr.value[user.rsp] == '가위') result = '당신이 졌습니다'

      } else if (rspArr.value[computer.rsp] == '보') {

        if (rspArr.value[user.rsp] == '가위') result = '당신이 이겼습니다.'
        else if (rspArr.value[user.rsp] == '바위') result = '당신이 졌습니다'
        
      }

      console.log(result)
      return result
    }

    const randomRsp = () => {
      return Math.floor(Math.random() * 3)
    }

    // 사용한 함수들 리턴
    return {rspArr, setUserRsp, user, computer, imgArr, result}

  } // setup end


} // export default end


</script>



<!-- scoped 범위 : 현재 범위내에 (자식 X)-->
<style scoped></style>
