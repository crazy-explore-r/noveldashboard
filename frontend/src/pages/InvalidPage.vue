<template>
    <div
      class="grid h-full place-items-center px-4 py-20 text-center text-lg text-gray-600"
    >
      <div class="space-y-2">
        <div>Invalid page or not permitted to access</div>
        <Button :route="{ name: 'Dashboard' }">
          <template #prefix><DashboardIcon class="w-4" /></template>
          Dashboard
        </Button>
      </div>
    </div>
  </template>
  
  <script setup>
  import DashboardIcon from '@/components/Icons/DashboardIcon.vue'
  </script>