<template>
  <div id="app">
    <div v-if="familyID === null">
      <div class="p-d-flex">
        You have no family.
        <Button label="Create a Family" icon="pi pi-plus" class="p-button-success p-mr-2" @click="openNew" />
        <Button label="Join a Family" icon="pi pi-plus" class="p-button-success p-mr-2" @click="openJoin" />
      </div>
    </div>
    <div v-else> 
      <div class="p-d-flex">
        <div class="p-d-inline">Your family is: {{ familyID }}</div>
      </div>
      Members of family:
      <ul id="example-1">
        <li v-for="member in members" :key="member.userName">
          {{ member.userName }}
        </li>
      </ul>
      
      
    </div>
    
   <Dialog :visible.sync="createFamilyDialog" :style="{width: '450px'}" header="Create Family" :modal="true" class="p-fluid">
      <div class="p-field">
         <label for="familyName">Family Name</label>
         <InputText id="familyName" v-model.trim="familyName" required="true" autofocus :class="{'p-invalid': submitted && !family.familyName}" />
         <small class="p-invalid" v-if="submitted && !familyName">A Family Name is required.</small>
      </div>

      <template #footer>
         <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideCreateDialog"/>
         <Button label="Save" icon="pi pi-check" class="p-button-text" @click="createFamily" />
      </template>
   </Dialog>    
   <Dialog :visible.sync="joinFamilyDialog" :style="{width: '450px'}" header="Join Family" :modal="true" class="p-fluid">
      <div class="p-field">
         <label for="joinFamilyId">Family ID (Provided by the Owner of the Family)</label>
         <InputText id="joinFamilyId" v-model.trim="joinFamilyId" required="true" autofocus :class="{'p-invalid': submitted && !joinFamilyId}" />
         <small class="p-invalid" v-if="submitted && !joinFamilyId">A Family ID is required.</small>
      </div>

      <template #footer>
         <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideJoinDialog"/>
         <Button label="Save" icon="pi pi-check" class="p-button-text" @click="joinFamily" />
      </template>
   </Dialog>    


    
  </div>
</template>

<script>
import { API, Auth } from 'aws-amplify';
import { getPerson, getFamily } from '../graphql/queries';
import { createFamily, updatePerson } from '../graphql/mutations';

export default {
  name: 'home',
  
  async created(){
    this.getPerson();
  },

  data() {
    return {
      familyID: null,
      joinFamilyId: null,
      joinFamilyDialog: false,
      familyName: null,
      createFamilyDialog: false,
      submitted: false,
      members: [],
      
    }
  },

  methods: {
    async getPerson() {
      const { attributes } = await Auth.currentUserInfo();
      const user = await API.graphql({
        query: getPerson,
        variables: {id: attributes.sub},
      });
      this.familyID = user.data.getPerson.familyID;
      this.getFamily()
    },
    

    async getFamily() {
      const family = await API.graphql({
        query: getFamily,
        variables: { id: this.familyID },
      });
      this.members = family.data.getFamily.People.items;
    },
    
    async createFamily() {
      const { attributes } = await Auth.currentUserInfo();
      const familyInformation = {
        id: this.createId,
        _version: 0,
        familyName: this.familyName,
      }
      
      const newFamily = await API.graphql({
        query: createFamily,
        variables: {input: familyInformation},
      });
      
      const upPer = {
        id: attributes.sub,
        familyID: newFamily.data.createFamily.id,
      }
      
      await API.graphql({
        query: updatePerson,
        variables: { input: upPer },
      });
      
      this.createFamilyDialog = false;
    },
    
    async joinFamily() {
      const { attributes } = await Auth.currentUserInfo();
      const user = await API.graphql({
        query: getPerson,
        variables: {id: attributes.sub},
      });
      
      const upPer = {
        id: attributes.sub,
        familyID: this.joinFamilyId,
        _version: user.data.getPerson._version,
      }
      
      await API.graphql({
        query: updatePerson,
        variables: { input: upPer },
      });
      
      this.joinFamilyDialog = false;
    },

    createId() {
      let id = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for ( var i = 0; i < 5; i++ ) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
    },

    openNew() {
      this.family = {};
      this.submitted = false;
      this.createFamilyDialog = true;
    },
  
    hideCreateDialog() {
      this.createFamilyDialog = false;
      this.submitted = false;
    },

    openJoin() {
      this.family = {};
      this.submitted = false;
      this.joinFamilyDialog = true;
    },
  
    hideJoinDialog() {
      this.joinFamilyDialog = false;
      this.submitted = false;
    },


    
  },
}
</script>

<style scoped>
.container {
  padding-top: 80px;
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.container h1 {
  margin-bottom: 0px;
}
.container p {
  font-size: 18px;
  text-align: left;
}
</style>
