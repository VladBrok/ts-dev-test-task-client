<template>
  <custom-suspense>
    <edit-user />
  </custom-suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomSuspense from '../components/CustomSuspense.vue';
import EditUser from 'src/components/EditUser.vue';

export default defineComponent({
  name: 'ProfileEditPage',
  components: { CustomSuspense, EditUser },
});
</script>
