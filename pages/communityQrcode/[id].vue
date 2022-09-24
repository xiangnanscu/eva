<template>
  <div>
    <h1>{{ name }}二维码</h1>
    <!-- <canvas id="canvas"></canvas> -->
    <img :src="dataURL" />
  </div>
</template>

<script setup>
// import QRCode from 'qrcode'

const route = useRoute();
const { dataURL, name, host, url } = await $fetch(`/api/communityQrcode/${route.params.id}`);
console.log({ dataURL, name, host, url });
// onMounted(async () => {
//   const canvas = document.getElementById('canvas')
//   const url = `${document.location.protocol}//${document.location.host}/communityReview/${route.params.id}`
//   const res = await QRCode.toCanvas(canvas, url)
//   console.log({res, url})
// })
</script>