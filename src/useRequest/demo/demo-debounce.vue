<template>
  <div>
    <p>
      UserName: <span>{{ loading ? 'loading' : data }}</span>
    </p>
    <button @click="run()">run</button>
  </div>
</template>

<script lang="ts">
import { useRequest } from 'ahooks-vue';
import { getNumber } from './utils';

export default {
  setup() {
    const { data, loading, error, run } = useRequest(getNumber, {
      manual: true,
      debounceInterval: 1000,
    });

    return {
      data,
      loading,
      error,
      run,
    };
  },
};
</script>
