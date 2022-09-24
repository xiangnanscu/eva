<template>
  <div>
    <h1>{{name}}二维码</h1>
    <canvas id="canvas"></canvas>
    <!-- <img :src="dataURL"> -->
  </div>
</template>

<script setup>
import QRCode from 'qrcode'

const route = useRoute()
const { dataURL, name, host } = await $fetch(`/api/communityQrcode/${route.params.id}`)

onMounted(async () => {
  const canvas = document.getElementById('canvas')
  const url = `${document.location.protocol}//${document.location.host}/communityReview/${route.params.id}`
  const res = await QRCode.toCanvas(canvas, url)
  console.log({res, url})
})

</script>