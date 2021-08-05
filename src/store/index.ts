import { reactive } from 'vue'

const state = reactive({
  progress: 1,
  progressMax: 2,
  cff: {
    title: ''
  }
})

const methods = {
  nextStep () {
    if (state.progress < state.progressMax) {
      state.progress++
    }
    return state.progress
  },
  previousStep () {
    if (state.progress > 2) {
      state.progress--
    }
    return state.progress
  }
}

const getters = {

}

export default {
  state,
  methods,
  getters
}
