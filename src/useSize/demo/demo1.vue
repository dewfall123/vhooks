<template>
  <div>
    <div
      ref="divRef"
      style="
        border: 1px solid rgba(0, 0, 0, 0.1);
        overflow: scroll;
        width: 100px;
        height: 100px;
        min-height: 30px;
        min-width: 30px;
        resize: both;
      "
    ></div>

    <p>
      size.width: <span style="color: blue">{{ size.width }}</span>
    </p>
    <p></p>
    <p>
      size.height: <span class="blue">{{ size.height }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { useSize } from 'ahooks-vue';
import { ref } from 'vue';

export default {
  setup() {
    const divRef = ref(null);
    const size = useSize(divRef, {
      onChange: () => {
        console.log('size change');
      },
    });

    return {
      divRef,
      size,
    };
  },
};
</script>

<style lang="less">
.blue {
  color: blue;
}
</style>
