<template>

  <div class="lotto">
    
    <HeaderCommon/>

    <RspMain/>

    <FoterCommon/>

  </div>

</template>

<script>

import HeaderCommon from '../components/common/HeaderCommon.vue';
import FoterCommon from '../components/common/FoterCommon.vue';
import RspMain from '@/components/rsp/RspMain.vue';

export default {
  name: 'LottoMainView.vue',
  components: {
    HeaderCommon,
    FoterCommon,
    RspMain
}
}
</script>

<!-- scoped 범위 : 현재 범위내에 (자식 X)-->
<style scoped>
.lotto {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
