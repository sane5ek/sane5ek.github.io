<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app class="no-select">
    <v-content>
      <router-view></router-view>
    </v-content>
    <template v-if="error">
      <v-snackbar
        :multi-line="true"
        :timeout="5000"
        @input="closeError"
        :value="true"
        color="error"
      >
        {{error}}
        <v-btn
          dark
          text
          @click="closeError"
        >
          Close
        </v-btn>
      </v-snackbar>
    </template>
    <template v-if="success">
      <v-snackbar
        :multi-line="true"
        :timeout="5000"
        @input="closeSuccess"
        :value="true"
        color="green darken-2"
      >
        {{success}}
        <v-btn
          dark
          text
          @click="closeSuccess"
        >
          Close
        </v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      searchOn: false,
      searchText: '',
      icons: [
        { name: 'home', func: this.onHomeButton },
        { name: 'email', func: this.onEmailDialog },
        { name: 'code', func: this.onCodeButton }
      ],
      emailDialog: false,
      callbackText: ''
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    closeSuccess () {
      this.$store.dispatch('clearSuccess')
    },
    onLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    },
    onEmailDialog () {
      this.emailDialog = true
    },
    sendCallback () {
      this.emailDialog = false
      this.$store.dispatch('sendCallback', this.callbackText)
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    success () {
      return this.$store.getters.success
    },
    dropdownList () {
      return [
        { title: 'Корзина', icon: 'shopping_cart', url: '/cart' }
      ]
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    user () {
      return this.$store.getters.user
    }
  },
  beforeCreate () {
    // this.$store.dispatch('loadUserInfo')
  }
}
</script>

<style>
  .pointer {
    cursor: pointer;
  }

  .menu-icon {
    min-width: 25px;
  }

  .no-select {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
</style>
