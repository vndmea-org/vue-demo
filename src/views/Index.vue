<template>
  <v-app>
    <v-container fluid>
      <v-btn @click="toggleLocale">{{ $vuetify.t('$vuetify.toggleLocale') }}</v-btn>
      <v-layout v-layout align-center justify-center row>
        <v-card>
          <v-tabs v-model="active" color="cyan" dark slider-color="yellow">
            <v-tab ripple>{{ $vuetify.t('$vuetify.login') }}</v-tab>
            <v-tab-item ma-5>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  :label="$vuetify.t('$vuetify.account')"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :rules="emailRules"
                  :label="$vuetify.t('$vuetify.password')"
                  required
                ></v-text-field>
              </v-form>
              <v-btn @click="reset">{{ $vuetify.t('$vuetify.reset') }}</v-btn>
              <v-btn @click="login" color="primary">{{ $vuetify.t('$vuetify.login') }}</v-btn>
            </v-tab-item>

            <v-tab ripple>{{ $vuetify.t('$vuetify.register') }}</v-tab>
            <v-tab-item>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  :label="$vuetify.t('$vuetify.nickname')"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  :label="$vuetify.t('$vuetify.account')"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :rules="emailRules"
                  :label="$vuetify.t('$vuetify.password')"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :rules="emailRules"
                  :label="$vuetify.t('$vuetify.passwordAgain')"
                  required
                ></v-text-field>
              </v-form>
              <v-btn @click="reset">{{ $vuetify.t('$vuetify.reset') }}</v-btn>
              <v-btn @click="register" color="primary">{{ $vuetify.t('$vuetify.register') }}</v-btn>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "login-view",
  components: {},

  data: () => ({
    active: 0,
    text: "",
    valid: true,
    name: "",
    email: "",
    password: "",
    nameRules: [],
    emailRules: []
  }),

  computed: {},

  beforeMount() {},

  methods: {
    toggleLocale() {
      this.$vuetify.lang.current =
        this.$vuetify.lang.current === "en" ? "zh" : "en";
    },

    login() {},

    register() {},

    reset() {
      this.$refs.form.reset();
    }
  },

  mounted() {
    this.nameRules = [
      v => !!v || this.$vuetify.t("$vuetify.requireName"),
      v => (v && v.length <= 10) || this.$vuetify.t("$vuetify.nameInvalid")
    ];

    this.emailRules = [
      v => !!v || this.$vuetify.t("$vuetify.requireEmail"),
      v => /.+@.+/.test(v) || this.$vuetify.t("$vuetify.emailInvalid")
    ];
  }
};
</script>


