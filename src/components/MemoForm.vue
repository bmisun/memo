<template>
  <div>
    <form @submit.prevent="addMemo">
      <fieldset>
        <div>
          <input type="text" v-model="title" placeholder="제목을 입력해">
        </div>
        <div>
          <textarea v-model="content" rows="3"></textarea>
        </div>
        <div>
          <button type="reset">reset</button>
          <button type="submit">submit</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'MemoForm',
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    addMemo () {
      const { title, content } = this
      const id = new Date().getTime()

      const isEmpty = title.length <= 0 || content.length <= 0
      if (isEmpty) {
        return false
      }

      this.$emit('addMemo', { id, title, content })
      this.resetField()
    },
    resetField () {
      this.title = ''
      this.content = ''
    }
  }
}
</script>

<style scoped>
</style>
