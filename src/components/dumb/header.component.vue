<template>
  <div class="header">
    <span>A simple CRUD application with VueJS</span>
    <div>
      <button><router-link to="/new">Add New Person</router-link></button>
      <button><router-link to="/">Person List</router-link></button>
    </div>
  </div>
</template>

<script>
 export default {
     name: 'header'
 }
</script>
