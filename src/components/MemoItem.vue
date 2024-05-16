<template>
  <li>
    <p>{{ memo.title }}</p>
    <p @dblclick="activeEdit">
      <template v-if="!isEdit">{{ memo.content }}</template>
      <input
        v-else
        type="text"
        ref="content"
        :value="memo.content"
        @keydown.enter="updateMemo"
        @blur="handleBlur"
      />
    </p>
    <button type="button" @click="deleteMemo">delete</button>
  </li>
</template>

<script>
export default {
  name: 'MemoItem',
  data () {
    return {
      isEdit: false
    }
  },
  props: {
    memo: {
      type: Object
    }
  },
  methods: {
    deleteMemo () {
      const id = this.memo.id
      this.$emit('deleteMemo', id)
    },
    activeEdit () {
      this.isEdit = true
      this.$nextTick(() => {
        this.$refs.content.focus()
      })
    },
    updateMemo (e) {
      const id = this.memo.id
      const content = e.target.value.trim()
      if (content.length <= 0) {
        return false
      }
      this.$emit('updateMemo', { id, content })
      this.isEdit = false
    },
    handleBlur () {
      this.isEdit = false
    }
  }
}
</script>

<style scoped>
</style>
