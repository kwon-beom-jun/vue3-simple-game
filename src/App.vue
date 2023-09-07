<template>
  <div>
    <router-view></router-view>
    <!-- <HeaderCommon/> -->
    <!-- <HelloWorld/> -->
    <!-- <FoterCommon/> -->
  </div>
</template>

<script>

// import { HelloWorld } from "@/components/HelloWorld.vue";
// import HeaderCommon from './components/common/HeaderCommon.vue';
// import FoterCommon from './components/common/FoterCommon.vue';

/**
 * ??
 * 파일 이름 뒤에 View가 붙는것은 컴포넌트의 조합하여 만든 View
 * 파일 이름만 사용 될 경우는 하나의 컴포넌트?
 */

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // HeaderCommon,
    // FoterCommon,
  }
}
</script>

<style>
</style>
