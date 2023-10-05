<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="image-container">
            <img :src="require('@/assets/img/kids.png')" alt="Boy" style="width: 80%" />
            <button type="button" class="btn btn-light buttons" @click="openModal()">
              <span>I'm a Kid</span>
            </button>
          </div>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-5">
          <div class="image-container">
            <img :src="require('@/assets/img/parents.png')" alt="Parent" />
            <button type="button" class="btn btn-light buttons" @click="openModal()">
              <span>I'm a Parent</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <h2>How old are you?</h2>
            <div class="age-input-container">
              <input
                v-model="age"
                type="number"
                class="age-input"
                placeholder="- -"
                min="0"
                max="99"
                @input="togglePlayButton"
              />
              <br /><br /><br /><br />
              <p v-show="errorMsg" style="font-weight: 800; font-size: 15px; color: red">Oops! Invalid input</p>
              <p v-show="kidMsg" style="font-weight: 800; font-size: 22px; color: #429f8c">
                &#128512; You need a parent to continue
              </p>
              <button
                @click="watch"
                type="button"
                class="btn btn-success buttons"
                :style="{ display: playButtonVisible ? 'block' : 'none' }"
              >
                <span>Play Now!</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RestrictPage',
  data() {
    return {
      age: '',
      errorMsg: false,
      kidMsg: false,
      playButtonVisible: false,
    }
  },
  methods: {
    openModal() {
      this.age = ''
      this.errorMsg = false
      this.kidMsg = false
      this.playButtonVisible = false
      $('#exampleModalCenter').modal('show')
    },
    togglePlayButton() {
      const age = parseInt(this.age)

      if (isNaN(age) || age <= 0 || age > 99) {
        // Invalid age
        this.playButtonVisible = false
        this.errorMsg = true
        this.kidMsg = false
      } else if (age < 18) {
        // Age under 18
        this.playButtonVisible = false
        this.errorMsg = false
        this.kidMsg = true
      } else {
        // Age 18 or older
        this.playButtonVisible = true
        this.errorMsg = false
        this.kidMsg = false
      }
    },
    isValidAge(age) {
      return !isNaN(age) && age >= 1 && age <= 99
    },
    watch() {
      if (!this.isValidAge(this.age)) {
        this.errorMsg = true
      } else {
        $('#exampleModalCenter').modal('hide');
        this.$router.push({ path: `/watch/1` })
      }
    },
  },
}
</script>
<style>
body {
  background: linear-gradient(135deg, #12cca8, #1a6743);
  text-align: center;
  padding: 20px;
}

.container {
  margin-top: 50px;
}

.image-container {
  display: inline-block;
  margin: 20px;
}

.image-container img {
  max-width: 100%;
}

.choice {
  font-size: 18px;
  margin-top: 10px;
}
.buttons {
  border-radius: 30px;
  font-size: 22x;
  width: 50%;
  padding: 15px;
}

.age-input-container {
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.age-input {
  font-size: 24px;
  padding: 2px;
  border: 2px solid #27ae91;
  border-radius: 50px;
  outline: none;
  width: 22%;
  text-align: center;
  margin: 20px;
}
h2 {
  font-family: 'Fredoka One', cursive;
  font-weight: 800;
  font-size: 38px;
}
span {
  font-size: 18px;
  font-weight: 800;
}
</style>
