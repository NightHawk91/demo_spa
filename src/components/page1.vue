<template>
  <div>
    <h2 class="title is-5">Личная информация</h2>
    <div v-if="loading" class="has-text-centered">Loading...</div>
    <form v-else @submit.prevent="validate">
      <div class="field" v-for="key of Object.keys(fields)" :key="key">
        <label class="label" v-text="labels[key]" />
        <div class="control">
          <input
            class="input"
            :class="{ 'is-danger': errors[key] }"
            type="text" v-model="fields[key]" required>
        </div>
        <p v-if="errors[key]" class="help is-danger" v-text="errors[key]" />
      </div>

      <div class="field">
        <div class="control">
          <button class="button is-link">продолжить</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { createPromise } from "../utils";

export default {
  data () {
    return {
      labels: {
        name: 'Имя',
        surname: 'Фамилия',
      },
      fields: {
        name: undefined,
        surname: undefined,
      },
      errors: {
        name: undefined,
        surname: undefined,
      },
      loading: false,
    }
  },
  methods: {
    validate () {
      for (let key of Object.keys(this.errors)) {
        this.errors[key] = undefined;
      }

      for (let key of Object.keys(this.fields)) {
        if (this.fields[key].length < 2) {
          this.errors[key] = 'Длина должна быть не менее 2-х символов.';
          return;
        }

        if (this.fields[key].match(/[^а-я]/i)) {
          this.errors[key] = 'Разрешается использование только русских букв.';
          return;
        }
      }

      this.loading = true;
      createPromise().then(
        result => {
          this.loading = false;
          this.$router.push('second');
        },
      );
    },
  }
}
</script>
