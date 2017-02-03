<template>
  <div class="table__view">
    <DataTable v-bind:personList="personList" v-bind:deletePerson="deletePerson"></DataTable>
  </div>
</template>

<script>
import DataTable from './data-table.component';
export default {
  name: 'contentBody',
  components: {
    DataTable
  },
  props: {
      personList: {
          type: Array,
          default: []
      },
    deletePerson: {
          type: Function
    }
  }
}
</script>

<style>
.table__view {
  height: 100%;
  width: 100%;
  left: 0;
}
</style>
