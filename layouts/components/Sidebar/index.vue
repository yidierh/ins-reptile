<template>
  <el-menu
    default-active="1"
    @select="selectHandler">
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">INSTAGRAM</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-document"></i>
      <span slot="title">YOUTUBE</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "Sidebar",
    methods: {
      selectHandler(index) {
        if (index === '1') {
          this.$router.push('/instagram')
        } else {
          this.$router.push('/youtube')
        }
      }
    }
  }
</script>
