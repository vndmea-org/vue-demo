<template>
  <v-app>
    <v-container fluid>
      <v-layout
        v-layout
        align-center
        justify-center
        row
        fill-height
      >
        {{ $vuetify.t('$vuetify.error') }}
        <v-btn @click="toggleLocale">toggleLocale</v-btn>
        <v-btn @click="goIndex">Index</v-btn>
        <v-btn @click="goUsers">Users</v-btn>
        <v-btn @click="goError">Error</v-btn>
        <v-btn
          color="primary"
          @click="fetchUsers"
        >Axios</v-btn>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "error",
  components: {},

  data: () => ({}),

  computed: {},

  beforeMount() { },

  methods: {
    fetchUsers() {
      this.$store.dispatch('FETCH_USERS', { param: 'p' }).then(data => {
        console.log(data);
      });
    },
    toggleLocale() {
      this.$vuetify.lang.current = this.$vuetify.lang.current === 'en' ? 'zh' : 'en';
    },
    goIndex() {
      this.$router.push('/index');
    },
    goUsers() {
      this.$router.push('/users');
    },
    goError() {
      this.$router.push('/error');
    },
  },

  mounted() { }
};
</script>


