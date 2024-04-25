<template>
  <ListView :title="title" :columns="columns" :rows="rows" />
</template>

<script setup>
import ListView from '../components/ListView.vue'
import { computed } from 'vue'
import { createListResource } from 'frappe-ui'

const title = 'Leads'

const leads = createListResource({
  type: 'list',
  doctype: 'Leads',
  fields: [
    'name',
    'name1',
    'modified',
  ],
  orderBy: 'modified asc',
  cache: 'Leads',
  pageLength: 999,
  auto: true,
})
leads.fetch()

const columns = [
  {
    label: 'ID',
    key: 'name',
    size: 'w-44',
  },
  {
    label: 'Name',
    key: 'name1',
    size: 'w-44',
  },
]
const rows = computed(() => {
  return leads.data?.map((lead) => {
    return {
      name: lead.name,
      name1: lead.name1
    }
  })
})
</script>