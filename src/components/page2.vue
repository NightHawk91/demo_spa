<template>
  <div>
    <h2 class="title is-5">Очень важная информация</h2>
    <form @submit.prevent="validate">
      <div class="field">
        <label class="label">Любимая цифра</label>
        <div class="control">
          <label class="radio" v-for="number of 6" :key="--number">
            <input type="radio" name="number" :value="number" required>
            {{ number }}
          </label>
        </div>
      </div>

      <div class="field">
        <label class="label">Любимый музыкальный исполнитель</label>
        <div class="control">
          <div class="select">
            <select :value="undefined" required>
              <option v-for="(artist, index) of musicArtists" :key="index" v-text="artist" />
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
      musicArtists: ['NightWish', 'Powerwolf', 'Five Finger Death Punch', 'Dreamtale', 'Beast In Black'],
    }
  },
  methods: {
    validate () {
      this.$router.push('third')
    },
  },
}
</script>
