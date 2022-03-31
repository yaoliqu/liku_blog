<template>
  <div class="animated bounceInRight">
    <div class="aside-card ClockCard-box theme-color">
      <div class="dial"></div>
      <div class="zero"></div>
      <div class="six"></div>
      <div class="three"></div>
      <div class="nine"></div>
      <div class="container">
        <div class="dot theme-color-btn"></div>
        <div
          class="point clockMinuteLine"
          :style="`transform:rotateZ(${minute}deg)`"
        ></div>
        <div
          class="point clockHourLine"
          :style="`transform: rotateZ(${hour}deg)`"
        ></div>
        <div
          class="point clockSecondLine theme-color-btn"
          :style="`transform: rotateZ(${second}deg)`"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onUnmounted } from 'vue'

export default defineComponent({
  setup() {
    const hour = ref(0)
    const minute = ref(0)
    const second = ref(0)
    const runPerSecond = () => {
      const date = new Date()
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()
      hour.value = (hours % 12) * (360 / 12) + (360 / 12) * (minutes / 60)
      minute.value = minutes * (360 / 60) + (360 / 60) * (seconds / 60)
      second.value = seconds * (360 / 60)
    }
    const timeUpdate = setInterval(() => {
      runPerSecond()
    }, 1000)
    onMounted(() => {
      // eslint-disable-next-line no-unused-expressions
      timeUpdate
      runPerSecond()
    })
    onUnmounted(() => {
      clearInterval(timeUpdate)
    })
    return {
      hour,
      minute,
      second
    }
  }
})
</script>

<style>
.ClockCard-box {
  display: flex;
  height: 260px;
  align-items: center;
  justify-content: center;
  position: relative;
}

.dial {
  border: 2px solid var(--theme-color-font);
  width: 220px;
  height: 220px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  box-shadow: 0 0 24px #000 inset;
}
.zero {
  width: 2px;
  height: 18px;
  background-color: var(--theme-color-font);
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translate(-50%, 0);
}
.six {
  width: 2px;
  height: 18px;
  background-color: var(--theme-color-font);
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, 0);
}
.three {
  height: 2px;
  width: 18px;
  background-color: var(--theme-color-font);
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translate(0, -50%);
}
.nine {
  height: 2px;
  width: 18px;
  background-color: var(--theme-color-font);
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translate(0, -50%);
}

.container {
  flex-direction: row;
  display: flex;
  position: relative;
}

.container > .point {
  position: absolute;
}

.clockMinuteLine {
  width: 4px;
  height: 90px;
  transform-origin: bottom;
  border-radius: 2px;
  background-color: var(--theme-color-font);
  left: -2px;
  bottom: 0;
}

.clockHourLine {
  width: 6px;
  height: 60px;
  transform-origin: bottom;
  border-radius: 3px;
  background-color: var(--theme-color-font);
  left: -3px;
  bottom: 0;
}

.clockSecondLine {
  width: 2px;
  height: 90px;
  transform-origin: bottom;
  border-radius: 1px;
  left: -1px;
  bottom: 0;
}
.dot {
  width: 12px;
  height: 12px;
  position: absolute;
  top: -6px;
  left: -6px;
  border-radius: 50%;
  z-index: 4;
}
</style>
