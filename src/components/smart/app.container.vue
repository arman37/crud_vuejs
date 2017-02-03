<template>
  <ContentBody v-bind:personList="personList" v-bind:deletePerson="deletePerson"></ContentBody>
</template>

<script>
import ContentBody from '../dumb/content-body.component';

export default {
  name: 'appContainer',
  components: {
    ContentBody
  },
  data: function () {
    return {
        personList: []
    };
  },
  methods: {
    deletePerson: function (personId) {
      let _self = this;
      this.$http
        .delete(`http://127.0.0.1:3000/${personId}`)
        .then((response) => {
          if(response.ok){
            return response.json();
          } else {
            throw new Error("Server response wasn't OK");
          }
        })
        .then((responseData) => {
          if(responseData.success) {
            _self.$router.go(_self.$router.currentRoute)
          }
          else {
            throw new Error("Server response wasn't OK");
          }
        })
        .catch((error) => {
          console.log('Oops! Error occurred during deleting data:', error);
        });
    }
  },
  created: function () {
    let _self = this;
    this.$http
      .get('http://127.0.0.1:3000')
      .then((response) => {
        console.log(response.data);
        this.personList = response.data;
      })
      .catch((error) => {
        console.log('Oops! Error occurred during fetching data:', error);
      });
  }
}
</script>
