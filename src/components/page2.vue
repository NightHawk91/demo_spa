<template>
  <div>
    <h2 class="title is-5">Очень важная информация</h2>
    <form @submit.prevent="validate">
      <div class="field">
        <label class="label">Любимая цифра</label>
        <div class="control">
          <label class="radio" v-for="num of 6" :key="--num">
            <input type="radio" name="number" :value="num" v-model="favoriteNumber" required>
            {{ num }}
          </label>
        </div>
      </div>

      <div class="field">
        <label class="label">Любимый музыкальный исполнитель</label>
        <div class="control">
          <div class="select">
            <select v-model="favoriteArtist" required>
              <option v-for="(artist, index) of artists" :key="index" v-text="artist" />
            </select>
          </div>
        </div>
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
      favoriteNumber: undefined,
      favoriteArtist: undefined,
      artists: ['NightWish', 'Powerwolf', 'Five Finger Death Punch', 'Dreamtale', 'Beast In Black'],
    }
  },
  methods: {
    validate () {
      this.$router.push('third')
    },
  },
}
</script>
