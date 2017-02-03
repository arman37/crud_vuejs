<template>
  <div class="data__table">
    <div style="text-align: center">Person List</div>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in personList">
          <td>{{person.person_id}}</td>
          <td>{{person.name}}</td>
          <td>{{person.age}}</td>
          <td>{{person.address}}</td>
          <td>{{person.phone}}</td>
          <td>{{person.email}}</td>
          <td><button v-on:click="deletePerson(person.person_id)">-</button></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: 'dataTable',
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

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
