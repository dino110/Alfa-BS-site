<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.8rem;
  margin: 2rem auto;
  min-height: 180px;
  max-width: 640px;
  min-width: 380px;
}
</style>
