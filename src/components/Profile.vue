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
                     <div class="box">12</div>
                  </div>
               </div>
            </div>
            <div class="p-col-4">
               <div class="box box-stretched">4</div>
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
      console.log("STORE STATE: ", this.$store.state)
      console.log("USERNAME1: ", attributes.sub);

      const user = await API.graphql({
        query: getPerson,
        variables: {id: attributes.sub},
      });
      console.log("USER: ", user)
      this.thisUseremail = user.data.getPerson.email;
      this.thisUsername = user.data.getPerson.userName;
    }
  },
}
</script>
