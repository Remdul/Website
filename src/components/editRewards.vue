<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <TabMenu :model="items" />

                   <div v-if="familyID !== null">
                      <Toolbar class="p-mb-4">
                         <template #left>
                            <Button label="New" icon="pi pi-plus" class="p-button-success p-mr-2" @click="openNew" />
                            <Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelected" :disabled="!selectedRewards || !selectedRewards.length" />
                         </template>
                         <template #right>
                            <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="p-mr-2" />
                            <Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  />
                         </template>
                      </Toolbar>
                      <DataTable ref="dt" :value="rewards" :selection.sync="selectedRewards" dataKey="id"
                         :paginator="true" :rows="10" :filters="filters"
                         paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                         currentPageReportTemplate="Showing {first} to {last} of {totalRecords} rewards">
                         <template #header>
                            <div class="table-header">
                               <h5 class="p-m-0">Manage Rewards</h5>
                               <span class="p-input-icon-left">
                                  <i class="pi pi-search" />
                                  <InputText v-model="filters['global']" placeholder="Search..." />
                               </span>
                            </div>
                         </template>
                         <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
                         <Column field="title" header="Title" sortable></Column>
                         <Column field="description" header="Description" sortable></Column>
                         <Column header="Image">
                            <template #body="slotProps">
                               <img :src="'demo/images/reward/' + slotProps.data.image" :alt="slotProps.data.image" class="reward-image" />
                            </template>
                         </Column>
                         <Column field="value" header="Value" sortable></Column>
                         <Column field="category" header="Category" sortable></Column>
                         <Column>
                            <template #body="slotProps">
                               <Button icon="pi pi-pencil" class="p-button-rounded p-button-help p-mr-2" @click="editReward(slotProps.data)" />
                               <Button icon="pi pi-trash" class="p-button-rounded p-button-danger p-mr-2" @click="confirmDeleteReward(slotProps.data)" />
                               <Button icon="pi pi-check" class="p-button-rounded p-button-success p-mr-2" @click="confirmclaimReward(slotProps.data)" />
                            </template>
                         </Column>
                      </DataTable>
                
                       <Dialog :visible.sync="rewardDialog" :style="{width: '450px'}" header="Reward Details" :modal="true" class="p-fluid">
                          <img :src="'demo/images/reward/' + reward.image" :alt="reward.image" class="reward-image" v-if="reward.image" />
                          <div class="p-field">
                             <label for="title">Title</label>
                             <InputText id="title" v-model.trim="reward.title" required="true" autofocus :class="{'p-invalid': submitted && !reward.title}" />
                             <small class="p-invalid" v-if="submitted && !reward.title">A Title is required.</small>
                          </div>
                          <div class="p-field">
                             <label for="description">Description</label>
                             <Textarea id="description" v-model="reward.description" required="true" rows="3" cols="20" />
                          </div>
                    
                          <div class="p-formgrid p-grid">
                             <div class="p-field p-col">
                                <label for="value">Value</label>
                                <InputNumber id="value" v-model="reward.value" integeronly />
                             </div>
                          </div>
                          <template #footer>
                             <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
                             <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveReward" />
                          </template>
                       </Dialog>
                       <Dialog :visible.sync="deleteRewardDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
                          <div class="confirmation-content">
                             <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
                             <span v-if="reward">Are you sure you want to delete <b>{{reward.title}}</b>?</span>
                          </div>
                          <template #footer>
                             <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteRewardDialog = false"/>
                             <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteReward" />
                          </template>
                       </Dialog>
                       <Dialog :visible.sync="deleteRewardsDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
                          <div class="confirmation-content">
                             <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
                             <span v-if="reward">Are you sure you want to delete the selected rewards?</span>
                          </div>
                          <template #footer>
                             <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteRewardsDialog = false"/>
                             <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedRewards" />
                          </template>
                       </Dialog>
                       <Dialog :visible.sync="claimRewardDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
                          <div class="confirmation-content">
                             <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
                             <span v-if="reward">Are you sure you want to claim this reward?</span>
                          </div>
                          <template #footer>
                             <Button label="No" icon="pi pi-times" class="p-button-text" @click="claimRewardDialog = false"/>
                             <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="claimReward" />
                          </template>
                       </Dialog>
                   </div>
                   <div v-else>
                       You have no family. :'(
                   </div>

                <router-view/>
            </div>
        </div>

        
    </div>
</template>

<script>
import { API, Auth } from 'aws-amplify';
import { createReward, deleteReward, updateReward, updatePerson } from '../graphql/mutations';
import { listRewards, getPerson } from '../graphql/queries';


export default {
  name: 'app',


  async created(){
    this.getTodos();
  },
    data() {
        return {
            title: '',
            description: '',
            value: 0,
            todos: null,
            selectedReward: null,
            rewards: null,
            rewardDialog: false,
            deleteRewardDialog: false,
            claimRewardDialog: false,
            deleteRewardsDialog: false,
            reward: {},
            selectedRewards: null,
            filters: {},
            submitted: false,
            familyID: null,
            currentUser: null,
            currentUserID: null,
            items: [
                { label: 'Home', icon: 'pi pi-fw pi-home', to: '/rewards' },
                { label: 'Edit Rewards', icon: 'pi pi-fw pi-calendar', to: '/editRewards' },
                { label: 'Show Rewards', icon: 'pi pi-fw pi-pencil', to: '/showRewards' },
            ]
    
        }
    },

  rewardService: null,

  methods: {
    async getTodos() {
      const { attributes } = await Auth.currentUserInfo();
      
      this.currentUserID = attributes.sub;
      this.currentUser = await API.graphql({
        query: getPerson,
        variables: {id: this.currentUserID },
      });
      this.familyID = this.currentUser.data.getPerson.familyID;

      const todos = await API.graphql({
        query: listRewards
      });
      
      this.rewards = todos.data.listRewards.items.filter(item => item._deleted !== true && item.claimed !== true && item.familyID === this.familyID);
      
      
      
    },
  
    openNew() {
      this.reward = {};
      this.submitted = false;
      this.rewardDialog = true;
    },
  
    hideDialog() {
      this.rewardDialog = false;
      this.submitted = false;
    },
  
    async saveReward() {
      this.submitted = true;
      if (this.reward.title.trim()) {
        if (this.reward.id) {
          console.log("Existing Reward Save")
          
          const rewardDetails = {
            id: this.reward.id,
            title: this.reward.title.trim(),
            description: this.reward.description.trim(),
            value: Number(this.reward.value),
            //claimed: false,
            _version: Number(this.reward._version),
            familyID: this.familyID,
          };
          
          const exReward = await API.graphql({
            query: updateReward,
            variables: { input: rewardDetails },
          });
          console.log ("ExReward: ", exReward)

          this.$set(this.rewards, this.findIndexById(this.reward.id), this.reward);
          this.getTodos();
          this.$toast.add({severity:'success', summary: 'Successful', detail: 'Reward Updated', life: 3000});
        }
        else {
          console.log("New Reward Save")
          
          const rewardDetails = {
            id: this.createId,
            title: this.reward.title.trim(),
            description: this.reward.description.trim(),
            value: Number(this.reward.value),
            claimed: false,
            _version: 0,
            familyID: this.familyID,            
            //photo: this.reward.image = 'reward-placeholder.svg';
          };
          
          const newReward = await API.graphql({
            query: createReward,
            variables: { input: rewardDetails },
          });
          
          console.log ("NewReward: ", newReward)          
          this.rewards.push(this.reward);
          this.getTodos();
          this.$toast.add({severity:'success', summary: 'Successful', detail: 'Reward Created', life: 3000});
        }
  
        this.rewardDialog = false;
        this.reward = {};
      }
    },
  
    editReward(reward) {
      this.reward = {...reward};
      this.rewardDialog = true;
    },
  
    confirmDeleteReward(reward) {
      this.reward = reward;
      this.deleteRewardDialog = true;
    },

    confirmclaimReward(reward) {
      this.reward = reward;
      this.claimRewardDialog = true;
    },

    async claimReward() {

      const total = Number(this.currentUser.data.getPerson.points - this.reward.value)
      if (total < 0) {
          alert("You do not have enough points.")
          this.claimRewardDialog = false;
          return;
      }
      
      this.rewards = this.rewards.filter(val => val.id !== this.reward.id);
      this.claimRewardDialog = false;
      const rewardDetails = {
        id: this.reward.id,
        title: this.reward.title.trim(),
        description: this.reward.description.trim(),
        value: Number(this.reward.value),
        claimed: true,
        _version: Number(this.reward._version),
      };
      
      await API.graphql({
        query: updateReward,
        variables: { input: rewardDetails },
      });
      
      const updatesToUser = {
          id: this.currentUserID,
          points: total,
          _version: Number(this.currentUser.data.getPerson._version),
      }
      
      await API.graphql({
        query: updatePerson,
        variables: { input: updatesToUser },
      });
      
      this.$toast.add({severity:'success', summary: 'Successful', detail: 'Reward claimed', life: 3000});      
      
    },

  
    async deleteReward() {
      this.rewards = this.rewards.filter(val => val.id !== this.reward.id);
      this.deleteRewardDialog = false;

      const deleteInfo = {
          id: this.reward.id,
          _version: this.reward._version,
      }
      await API.graphql({
        query: deleteReward,
        variables: {input: deleteInfo},
      });
      
      this.reward = {};
      this.$toast.add({severity:'success', summary: 'Successful', detail: 'Reward Deleted', life: 3000});      
      
    },
    findIndexById(id) {
      let index = -1;
      for (let i = 0; i < this.rewards.length; i++) {
        if (this.rewards[i].id === id) {
          index = i;
          break;
        }
      }
  
      return index;
    },
  
    exportCSV() {
      this.$refs.dt.exportCSV();
    },
  
    confirmDeleteSelected() {
      this.deleteRewardsDialog = true;
    },
  
    deleteSelectedRewards() {
      this.rewards = this.rewards.filter(val => !this.selectedRewards.includes(val));
      this.deleteRewardsDialog = false;
      this.selectedRewards = null;
      this.$toast.add({severity:'success', summary: 'Successful', detail: 'Rewards Deleted', life: 3000});
    }
  },
  
  createId() {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 5; i++ ) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  },

  
}


</script>

