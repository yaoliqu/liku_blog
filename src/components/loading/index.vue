<template>
  <div class="Loading-box">
    <div class="half-circle-spinner">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
    </div>
  </div>
</template>

<style scoped>
.Loading-box {
  height: 100%;
  background-color: var(--theme-bg);
  display: flex;
  justify-content: center;
  align-items: center;
}

.half-circle-spinner {
  width: 200px;
  height: 200px;
  border-radius: 100%;
  position: relative;
}

.half-circle-spinner .circle {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: calc(200px / 10) solid transparent;
}

.half-circle-spinner .circle.circle-1 {
  border-top-color: #232324;
  animation: half-circle-spinner-animation 1s infinite;
}

.half-circle-spinner .circle.circle-2 {
  /* border-bottom-color: rgb(180, 180, 0); */
  /* 按钮色 */
  border-bottom-color: rgb(97, 147, 187);
  animation: half-circle-spinner-animation 1s infinite alternate;
}

@keyframes half-circle-spinner-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media all and (max-width: 1240px) {
  .half-circle-spinner {
    width: 80px;
    height: 80px;
  }
  .half-circle-spinner .circle {
    border: 10px solid transparent;
  }
}
</style>
