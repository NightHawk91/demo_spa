<template>
  <div>
    <h2 class="title is-5 has-text-centered">Благодарим за ответы!</h2>
    <div class="test">
      <button class="button is-link" @click="close">пожалуйста</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      close () {
        alert('Здесь окно должно было закрыться, но я не нашел способа сделать это' +
          ' в виду того, что сейчас скрипт может закрыть только то окно, которое сам же и открыл.');
      },
    },
  }
</script>

<style lang="scss">
  .test {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
