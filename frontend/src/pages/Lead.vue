<template>
  <ListView :title="title" :columns="columns" :rows="rows" />
</template>

<script setup>
import ListView from '../components/ListView.vue'
import { computed } from 'vue'
import { createListResource } from 'frappe-ui'

const title = 'Lead'

const leads = createListResource({
  type: 'list',
  doctype: 'Leads',
  fields: [
    'name',
    'name1',
    'company',
    'lead_type',
    'modified',
  ],
  filters:{
    leasing_status: 'Client',
  },
  orderBy: 'modified asc',
  cache: 'Leads',
  pageLength: 20,
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
    type: 'user',
    size: 'w-44',
  },
  {
    label: 'Company',
    key: 'company',
    type: 'logo',
    size: 'w-44',
  },
  {
    label: 'Lead Type',
    key: 'lead_type',
    size: 'w-44',
  },
]
const rows = computed(() => {
  return leads.data?.map((lead) => {
    return {
      name: lead.name,
      name1: lead.name1,
      company: lead.company,
      lead_type: lead.lead_type
    }
  })
})
</script>