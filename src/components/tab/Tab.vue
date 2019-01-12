<template>
	<div>
		<ul>
			<li
			 v-for="(tab, index) in tabs"
			 :key="index"
			 @click.prevent="changeTab(index)"
			><v-btn>{{tab.tabName}}</v-btn></li>
		</ul>

		<slot :currentTabIndex="currentTabIndex"></slot>
	</div>
</template>
<script>
export default {
  name: 'Tab',
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentTabIndex: 0
    };
  },
  computed: {},
  methods: {
    changeTab(index) {
			this.currentTabIndex = index;
    }
  }
};
</script>
