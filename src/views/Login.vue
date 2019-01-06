<template>
  <div>
    <v-app>
      <v-btn
        color="primary"
        @click="fetchAsyncData"
      >Axios</v-btn>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {},

  data: () => ({}),

  computed: {},

  beforeMount() { },

  methods: {
    fetchAsyncData() {
      this.$store.dispatch('FETCH_ASYNC_DATA', { param: 'p' }).then(data => {
        console.log(data);
      });
    },
  },
};
</script>


