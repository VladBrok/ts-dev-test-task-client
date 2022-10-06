<!-- todo: protect the page -->
<template>
  <custom-suspense>
    <user-info />
  </custom-suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserInfo from '../components/UserInfo.vue';
import CustomSuspense from '../components/CustomSuspense.vue';

export default defineComponent({
  name: 'ProfilePage',
  components: { UserInfo, CustomSuspense },
});
</script>
