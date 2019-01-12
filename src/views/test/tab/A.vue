<template>
	<div>
		<div>{{ text }}</div>
		<div>{{ propsText }}</div>
	</div>
</template>

<script>
export default {
  name: 'A',
  data() {
    return {
      text: 'This is tab A.'
    };
  },
  props: {
    propsText: {
      type: String,
      default: 'This is default props text of tab A.'
    }
  },
  computed: {}
};
</script>
