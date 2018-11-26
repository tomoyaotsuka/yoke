<template>
  <div class="loading" :class="{ active: isActive, passive: isPassive }">
    <!-- <p>Loading...</p> -->
    <!-- <div class="mask"></div> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    isActive: false,
    isPassive: false,
  }),
  methods: {
    start () {
      this.isActive = true
    },
    finish () {
      setTimeout(() => {
        this.isActive = false
        this.isPassive = true
      }, 800)
      setTimeout(() => {
        this.isActive = false
        this.isPassive = false
      }, 1800)
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  // bottom: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  // height: 0px;
  height: 100%;
  background: $gray10;
  transform: translateX(100%);
  // transition: height .4s $easeOutQuint;
  transition: all 0s;
}

.active.loading {
  // height: 100%;
  transform: translateX(0);
  transition: transform .5s .3s $easeOutQuint;
}

.passive.loading {
  // top: 0;
  // bottom: auto;
  // height: 0;
  width: 0;
  transform: translateX(0);
  transition: width .7s $easeOutQuint;
}
</style>