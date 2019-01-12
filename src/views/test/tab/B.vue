<template>
	<div>
		<div>{{ text }}</div>
		<div>{{ propsText }}</div>
	</div>
</template>

<script>
export default {
  name: 'B',
  data() {
    return {
      text: 'This is tab B.'
    };
  },
  props: {
    propsText: {
      type: String,
      default: 'This is default props text of tab B.'
    }
  },
  computed: {}
};
</script>
