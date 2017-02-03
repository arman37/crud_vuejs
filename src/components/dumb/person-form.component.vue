<template>
  <div class="create__edit__form">
    <fieldset style="width: 50%">
      <legend>Add a new person</legend>
      <table border="0">
        <tr>
          <td><label>Name: </label></td>
          <td><input type="text" v-model="person.name" size="60" /></td>
        </tr>
        <tr>
          <td><label>Age: </label></td>
          <td><input type="text" v-model="person.age" size="60" /></td>
        </tr>
        <tr>
          <td><label>Phone: </label></td>
          <td><input type="text" v-model="person.phone" size="60" /></td>
        </tr>
        <tr>
          <td><label>Email: </label></td>
          <td><input type="email" v-model="person.email" size="60" /></td>
        </tr>
        <tr>
          <td><label>Address: </label></td>
          <td><input type="text" v-model="person.address" size="60" /></td>
        </tr>
        <tr>
          <td colspan="2">
            <button v-on:click="addPerson">Submit</button>
            <button>cancel</button>
          </td>
        </tr>
      </table>
    </fieldset>
  </div>
</template>

<script>
export default {
    name: 'personForm',
    props: {
      person: {
        type: Object,
        default: {}
      },
      addPerson: {
          type: Function
      }
    }
}
</script>

<style>
.create__edit__form {
  height: 100%;
  width: 100%;
  margin: 5%;
  margin-left: 20%;
}
</style>
