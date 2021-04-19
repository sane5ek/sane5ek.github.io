<template>
  <v-container>
    <v-text-field
      v-model="fromCurrencyAmount"
      label="fromCurrencyAmount"
      clearable
      @input="convert"
      type="number"
    >
    </v-text-field>
    <v-select
      :items="currencies"
      v-model="fromCurrencyCode"
      @change="convert"
    >
    </v-select>
    <v-select
      :items="currencies"
      v-model="toCurrencyCode"
      @change="convert"
    >
    </v-select>

    <v-text-field
      v-model="result"
      label="result"
      clearable
      type="number"
    >
    </v-text-field>
    <v-text-field
      v-model="precision"
      label="precision"
      clearable
      type="number"
    >
    </v-text-field>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      fromCurrencyAmount: 0,
      toCurrencyCode: 'RUB',
      fromCurrencyCode: 'USD',
      precision: 4
    }
  },
  methods: {
    convert() {
      this.$store.dispatch("convertCurrencies", {from: this.fromCurrencyCode, to: this.toCurrencyCode, amount: this.fromCurrencyAmount})
    }
  },
  computed: {
    currencies() {
      return Object.keys(this.$store.getters.currencies)
    },
    result() {
      return (parseFloat(this.$store.getters.lastConvertResult).toFixed(this.precision))
    }
  },
  beforeCreate() {
    this.$store.dispatch('loadCurrencies')
    console.log(this.currencies)
  }
}
</script>

<style scoped>

</style>
