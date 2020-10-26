<template>
  <el-menu
    default-active="1"
    @select="selectHandler">
    <el-menu-item index="1">
      <i class="el-icon-picture-outline"></i>
      <span slot="title">INSTAGRAM</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-shopping-bag-2"></i>
      <span slot="title">ALIBABA</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-video-camera"></i>
      <span slot="title">YOUTUBE</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
    export default {
        name: "Sidebar",
        methods: {
            selectHandler(index) {
                switch (index) {
                    case '1':
                        this.$router.push('/instagram')
                        break
                    case '2':
                        this.$router.push('/alibaba')
                        break
                    default:
                        this.$router.push('/youtube')

                }
            }
        }
    }
</script>
