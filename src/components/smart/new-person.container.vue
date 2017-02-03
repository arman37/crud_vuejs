<template>
  <PersonForm v-bind:person="person" v-bind:addPerson="addPerson"></PersonForm>
</template>

<script>
import PersonForm from '../dumb/person-form.component';
export default {
    name: 'newPerson',
    components: {
      PersonForm
    },
    data: function () {
      return {
          person: {}
      }
    },
  methods: {
        addPerson: function () {
            let _self = this;
            this.$http
              .post('http://127.0.0.1:3000', JSON.stringify(this.person))
              .then((response) => {
                if(response.ok){
                  _self.$router.push('/');
                } else {
                  throw new Error("Server response wasn't OK")
                }
              })
              .catch((error) => {
                console.log('Oops! Error occurred during data submit', error);
              });
        }
  }
}

</script>
