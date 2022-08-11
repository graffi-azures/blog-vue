<template>
  <!-- 回到顶部组件 -->
  <div id="goTop">
    <div
        class="el-backtop"
        style="right: 100px; bottom: 150px"
        v-show="goTopShow"
        @click="goTop"
    >
      <i class="el-icon-caret-top"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data () {
    return {
      scrollTop: '',
      goTopShow: false
    }
  },
  watch: {
    scrollTop () {
      if (this.scrollTop > 500) {
        this.goTopShow = true
      } else {
        this.goTopShow = false
      }
    }
  },
  methods: {
    handleScroll () {
      this.scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop
      if (this.scrollTop > 500) {
        this.goTopShow = true
      }
    },
    goTop () {
      let timer = null
      const _that = this
      cancelAnimationFrame(timer)
      timer = requestAnimationFrame(function fn () {
        if (_that.scrollTop > 0) {
          _that.scrollTop -= 250
          document.body.scrollTop = document.documentElement.scrollTop =
              _that.scrollTop
          timer = requestAnimationFrame(fn)
        } else {
          cancelAnimationFrame(timer)
          _that.goTopShow = false
        }
      })
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>

</style>