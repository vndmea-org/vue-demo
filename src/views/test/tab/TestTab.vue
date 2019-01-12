<template>
	<tab :tabs="tabs">
		<component
		 slot-scope="currentTab"
		 :is="tabs[currentTab.currentTabIndex].componentName"
		 :props-text="tabs[currentTab.currentTabIndex].propsText"
		></component>
	</tab>
</template>

<script>
import A from '@/views/test/tab/A.vue';
import B from '@/views/test/tab/B.vue';
import C from '@/views/test/tab/C.vue';

export default {
  name: 'user-view',
  components: {
    A,
    B,
    C
  },
  data: () => ({}),
  computed: {
    tabs() {
      return [
        { tabName: 'TabA', componentName: 'A', propsText: 'Hello, tab A.' },
        { tabName: 'TabB', componentName: 'B', propsText: 'Hello, tab B.' },
        { tabName: 'TabC', componentName: 'C', propsText: 'Hello, tab C.' }
      ];
    }
  },

  methods: {}
};
</script>
