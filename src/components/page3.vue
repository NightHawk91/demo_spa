<template>
  <div>
    <h2 class="title is-5">Дополнительная информация</h2>
    <form @submit.prevent="validate">
      <label class="label">Любимый цвет</label>
      <div class="buttons">
        <button v-for="(color, index) of colors"
              class="button colored"
              type="button"
              :style="{ 'background-color': color }"
              @click="setFavoriteColor(color)"
              :key="index" />
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
  export default {
    data () {
      return {
        favoriteColor: undefined,
        colors: ['white', 'black', 'red', 'green', 'yellow', 'blue', 'pink', 'orange', 'gray']
      }
    },
    methods: {
      validate () {
        this.$router.push('fourth')
      },
      setFavoriteColor (color) {
        this.favoriteColor = color;
      },
    },
  }
</script>

<style lang="scss">
  .colored {
    width: 36px;
  }
  .buttons {
    width: 140px;
  }
</style>
