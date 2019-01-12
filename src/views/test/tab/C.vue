<template>
	<div>
		<div>{{ text }}</div>
		<div>{{ propsText }}</div>
	</div>
</template>

<script>
export default {
  name: 'C',
  data() {
    return {
      text: 'This is tab C.'
    };
  },
  props: {
    propsText: {
      type: String,
      default: 'This is default props text of tab C.'
    }
  },
  computed: {}
};
</script>
