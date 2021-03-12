<template>
<div class="p-grid p-flex-column">
   <div class="p-col">
      <Panel header="Profile">
         <div class="p-grid nested-grid">
            <div class="p-col-8">
               <div class="p-grid">
                  <div class="p-col-6">
                     <div class="box">Username: {{ thisUsername }}</div>
                  </div>
                  <div class="p-col-6">
                     <div class="box">Email: {{ thisUseremail }}</div>
                  </div>
                  <div class="p-col-12">
                     <div class="box">Points: {{ thisUserpoints }}</div>
                  </div>
               </div>
            </div>
            <div class="p-col-4">
               <div class="box">FamilyID: {{ thisUserFamily }}</div>

            </div>
         </div>
      </Panel>
   </div>
</div>
</template>

<script>

import { getPerson } from '../graphql/queries';
import { API, Auth } from 'aws-amplify';
import 'primeflex/primeflex.css';

export default {
  name: 'home',
  
  async created(){
    this.getPerson();
  },

  data() {
    return {
      thisUseremail: '',
      thisUsername: '',
      thisUserpoints: 0,
      thisUserFamily: null,
    }
  },

  computed: {
    getUserName() {
      return this.$store.state.user.username
    },
    email() {
      return this.$store.state.user.email
    }
  },
  
  methods: {
    async getPerson() {
      const { attributes } = await Auth.currentUserInfo();
      const user = await API.graphql({
        query: getPerson,
        variables: {id: attributes.sub},
      });
      console.log("USER: ", user)
      this.thisUseremail = user.data.getPerson.email;
      this.thisUsername = user.data.getPerson.userName;
      this.thisUserpoints = user.data.getPerson.points;
      this.thisUserFamily = user.data.getPerson.familyID;
    }
  },
}
</script>
