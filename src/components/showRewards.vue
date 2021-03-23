<template>
  <div id="rewards">
    <TabMenu :model="items" />

<Carousel :value="rewards" :numVisible="4" :numScroll="3" :responsiveOptions="responsiveOptions">
	<template #header>
		<h2>Basic</h2>
	</template>
	

	
<template #item="slotProps">
		<div class="car-item">
            <div class="car-content">
                <div>
                    <img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand" />
                </div>
                <div>
                    <div class="car-title">{{slotProps.data.title}}</div>
                    <div class="car-subtitle">{{slotProps.data.description}} | {{slotProps.data.value}}</div>

                    <div class="car-buttons">
                        <Button icon="pi pi-search" class="p-button-secondary" />
                        <Button icon="pi pi-star" class="p-button-secondary" />
                        <Button icon="pi pi-cog" class="p-button-secondary" />
                    </div>
                </div>
            </div>
        </div>
	</template>
</Carousel>



<router-view />
</div>
</template>

<script>
  import { API, Auth } from 'aws-amplify';
  //import { createReward, deleteReward, updateReward, updatePerson } from '../graphql/mutations';
  import { listRewards, getPerson } from '../graphql/queries';

  export default {
    name: 'home',
    data() {
      return {
        currentUserID: null,
        currentUser: null,
        rewards: null,
        responsiveOptions: [{
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
          },
          {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
          },
          {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
          }
        ],
        items: [
          { label: 'Home', icon: 'pi pi-fw pi-home', to: '/rewards' },
          { label: 'Edit Rewards', icon: 'pi pi-fw pi-calendar', to: '/editRewards' },
          { label: 'Show Rewards', icon: 'pi pi-fw pi-pencil', to: '/showRewards' },
        ]
      }
    },

    async created() {
      this.getRewards();
    },

    methods: {
      async getRewards() {
        const { attributes } = await Auth.currentUserInfo();

        this.currentUserID = attributes.sub;
        this.currentUser = await API.graphql({
          query: getPerson,
          variables: { id: this.currentUserID },
        });
        this.familyID = this.currentUser.data.getPerson.familyID;

        const rewardList = await API.graphql({
          query: listRewards
        });

        this.rewards = rewardList.data.listRewards.items.filter(item => item._deleted !== true && item.claimed !== true && item.familyID === this.familyID);



      },

    }

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
