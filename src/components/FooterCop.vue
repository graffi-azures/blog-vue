<template>
  <!-- 页脚组件 -->
  <div>
    <div style="height: 60px"></div>
    <el-footer class="footer">
      ©2022 <b>Yogoazure</b>
      <br />
      <div>
        <a class="beian" href="http://" target="_blank"
        >渝ICP....备号</a
        >
      </div>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: "FooterCop"
}
</script>

<style scoped>
.footer {
  margin-top: 50px;
  padding-bottom: 10px;
  text-align: center;
  user-select: none;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  z-index: 9999;
}
.beian {
  text-decoration: none;
  /*color: var(--default-text-color);*/
}
</style>