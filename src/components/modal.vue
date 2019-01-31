<script>
export default {
  name: 'modal',
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
<template>
  <transition name="modal-fade">
    <div class="">
      модальное окно
    </div>
  </transition>
</template>

<style>
.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px
}
</style>
