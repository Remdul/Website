<template>
   <div id="app">
      <div v-if="familyID !== null">
         <Toolbar class="p-mb-4">
            <template #left>
               <Button label="New" icon="pi pi-plus" class="p-button-success p-mr-2" @click="openNew" />
               <Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelected" :disabled="!selectedTasks || !selectedTasks.length" />
            </template>
            <template #right>
               <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="p-mr-2" />
               <Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  />
            </template>
         </Toolbar>
         <DataTable ref="dt" :value="tasks" :selection.sync="selectedTasks" dataKey="id" :paginator="true" :rows="10" :filters="filters" paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} tasks">
            <template #header>
               <div class="table-header">
                  <h5 class="p-m-0">Manage Tasks</h5>
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


<template>
  <amplify-s3-image path="public/" img-key="slotProps.data.image" />
</template>  


                  {{ slotProps.data.image }} 
                  
               </template>
            </Column>
            <Column field="value" header="Value" sortable></Column>
            <Column field="category" header="Category" sortable></Column>
            <Column>
               <template #body="slotProps">
                  <Button icon="pi pi-pencil" class="p-button-rounded p-button-help p-mr-2" @click="editTask(slotProps.data)" />
                  <Button icon="pi pi-trash" class="p-button-rounded p-button-danger p-mr-2" @click="confirmDeleteTask(slotProps.data)" />
                  <Button icon="pi pi-check" class="p-button-rounded p-button-success p-mr-2" @click="confirmCompleteTask(slotProps.data)" />
               </template>
            </Column>
         </DataTable>
         <Dialog :visible.sync="taskDialog" :style="{width: '450px'}" header="Task Details" :modal="true" class="p-fluid">
            
            <div class="p-field">
               <label for="title">Title</label>
               <InputText id="title" v-model.trim="task.title" required="true" autofocus :class="{'p-invalid': submitted && !task.title}" />
               <small class="p-invalid" v-if="submitted && !task.title">A Title is required.</small>
            </div>
            <div class="p-field">
               <label for="description">Description</label>
               <Textarea id="description" v-model="task.description" required="true" rows="3" cols="20" />
            </div>
            <div class="p-formgrid p-grid">
               <div class="p-field p-col">
                  <label for="value">Value</label>
                  <InputNumber id="value" v-model="task.value" integeronly />
               </div>
               <div class="p-field p-col">
                  <div v-if="!task.image">
                     <h2>Upload a Photo</h2>
                     <input type="file" @change="onUpload">
                  </div>
                  <div v-else>
                     <amplify-s3-image level="protected" path="public/" :img-key="task.image" class="w-4/12" />
                     <amplify-s3-album path="public/" />
                     <input type="file" @change="onUpload">
                  </div>
               </div>
            </div>
            <template #footer>
               <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
               <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveTask" />
            </template>
         </Dialog>
         <Dialog :visible.sync="deleteTaskDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
               <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
               <span v-if="task">Are you sure you want to delete <b>{{task.title}}</b>?</span>
            </div>
            <template #footer>
               <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteTaskDialog = false"/>
               <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteTask" />
            </template>
         </Dialog>
         <Dialog :visible.sync="deleteTasksDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
               <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
               <span v-if="task">Are you sure you want to delete the selected tasks?</span>
            </div>
            <template #footer>
               <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteTasksDialog = false"/>
               <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedTasks" />
            </template>
         </Dialog>
         <Dialog :visible.sync="completeTaskDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
               <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
               <span v-if="task">Are you sure you completed this task?</span>
            </div>
            <template #footer>
               <Button label="No" icon="pi pi-times" class="p-button-text" @click="completeTaskDialog = false"/>
               <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="completeTask" />
            </template>
         </Dialog>
      </div>
      <div v-else>
         You have no family. :'(
      </div>
   </div>
</template>


<script>
import { API, Auth, Storage } from 'aws-amplify';
import { createTask, deleteTask, updateTask, updatePerson } from '../graphql/mutations';
import { listTasks, getPerson } from '../graphql/queries';



export default {
  name: 'app',
  props: ['file',],

  async created(){
    this.getTodos();
  },

  data() {
    return {
      title: '',
      description: '',
      value: 0,
      todos: null,
      selectedTask: null,
      tasks: null,
      taskDialog: false,
      deleteTaskDialog: false,
      completeTaskDialog: false,
      deleteTasksDialog: false,
      task: {},
      selectedTasks: null,
      filters: {},
      submitted: false,
      familyID: null,
      currentUser: null,
      currentUserID: null,
      image: null,
      showImage: null,
    }
  },

  taskService: null,

  methods: {
    async onUpload(e) {
      const file = e.target.files[0];
      this.image = file
      this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Added', life: 3000 });
    },
    
    async getTodos() {
      const { attributes } = await Auth.currentUserInfo();
      
      this.currentUserID = attributes.sub;
      this.currentUser = await API.graphql({
        query: getPerson,
        variables: {id: this.currentUserID },
      });
      this.familyID = this.currentUser.data.getPerson.familyID;

      const todos = await API.graphql({
        query: listTasks
      });
      
      this.tasks = todos.data.listTasks.items.filter(item => item._deleted !== true && item.completed !== true && item.familyID === this.familyID);
    },
  
    openNew() {
      this.task = {};
      this.submitted = false;
      this.taskDialog = true;
    },
  
    hideDialog() {
      this.taskDialog = false;
      this.submitted = false;
    },

    async saveImage() {
      var newFile = ''
      var newName = ''
      if(this.image !== null){
        try {
            newName = this.createId().concat(this.image.name)
            newFile = Storage.put(newName, this.image, 'Content', {
            contentType: 'image/png', // contentType is optional
            progressCallback(progress) {
              console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
            },
          });
        }
        catch (err) {
          console.log('Error uploading file: ', err);
        }
      }
      console.log("NEWFILE: ", newFile)
      return newFile;
    },

    async saveTask() {
      this.submitted = true;
      if (this.task.title.trim()) {
        if (this.task.id) {
          const newFile = await this.saveImage();
          console.log("Existing Task Save")
          
          const taskDetails = {
            id: this.task.id,
            title: this.task.title.trim(),
            description: this.task.description.trim(),
            value: Number(this.task.value),
            completed: false,
            _version: Number(this.task._version),
            familyID: this.familyID,
            image: newFile.key,
          };
          
          const exTask = await API.graphql({
            query: updateTask,
            variables: { input: taskDetails },
          });
          console.log ("ExTask: ", exTask)

          this.$set(this.tasks, this.findIndexById(this.task.id), this.task);
          this.getTodos();
          this.$toast.add({severity:'success', summary: 'Successful', detail: 'Task Updated', life: 3000});
        }
        else {
          console.log("New Task Save")
          const newFile = await this.saveImage();
          
          const taskDetails = {
            id: this.createId,
            title: this.task.title.trim(),
            description: this.task.description.trim(),
            value: Number(this.task.value),
            completed: false,
            _version: 0,
            familyID: this.familyID,            
            image: newFile.key,
          };
          console.log("THISKEY: ", taskDetails.image)
          const newTask = await API.graphql({
            query: createTask,
            variables: { input: taskDetails },
          });
          
          console.log ("NewTask: ", newTask)          
          this.tasks.push(this.task);
          this.getTodos();
          this.$toast.add({severity:'success', summary: 'Successful', detail: 'Task Created', life: 3000});
        }
  
        this.taskDialog = false;
        this.task = {};
        
      }
    },
  
    editTask(task) {
      this.task = {...task};
      this.taskDialog = true;
    },
  
    confirmDeleteTask(task) {
      this.task = task;
      this.deleteTaskDialog = true;
    },

    confirmCompleteTask(task) {
      this.task = task;
      this.completeTaskDialog = true;
    },

    async completeTask() {
      this.tasks = this.tasks.filter(val => val.id !== this.task.id);
      this.completeTaskDialog = false;

      const taskDetails = {
        id: this.task.id,
        title: this.task.title.trim(),
        description: this.task.description.trim(),
        value: Number(this.task.value),
        completed: true,
        _version: Number(this.task._version),
      };
      
      await API.graphql({
        query: updateTask,
        variables: { input: taskDetails },
      });
      
      
      const total = Number(this.currentUser.data.getPerson.points + taskDetails.value)
      const updatesToUser = {
          id: this.currentUserID,
          points: total,
          _version: Number(this.currentUser.data.getPerson._version),
      }
      
      await API.graphql({
        query: updatePerson,
        variables: { input: updatesToUser },
      });
      this.$toast.add({severity:'success', summary: 'Successful', detail: 'Task Completed', life: 3000});      
      
    },

  
    async deleteTask() {
      this.tasks = this.tasks.filter(val => val.id !== this.task.id);
      this.deleteTaskDialog = false;

      const deleteInfo = {
          id: this.task.id,
          _version: this.task._version,
      }
      await API.graphql({
        query: deleteTask,
        variables: {input: deleteInfo},
      });
      
      this.task = {};
      this.$toast.add({severity:'success', summary: 'Successful', detail: 'Task Deleted', life: 3000});      
      
    },
    findIndexById(id) {
      let index = -1;
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id === id) {
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
      this.deleteTasksDialog = true;
    },
  
    deleteSelectedTasks() {
      this.tasks = this.tasks.filter(val => !this.selectedTasks.includes(val));
      this.deleteTasksDialog = false;
      this.selectedTasks = null;
      this.$toast.add({severity:'success', summary: 'Successful', detail: 'Tasks Deleted', life: 3000});
    },

  
    createId() {
      let id = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for ( var i = 0; i < 10; i++ ) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
    },

  },
  
}


</script>
