<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <TabMenu :model="items" />
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        items: [
          { label: 'Home', icon: 'pi pi-fw pi-home', to: '/rewards' },
          { label: 'Edit Rewards', icon: 'pi pi-fw pi-calendar', to: '/editRewards' },
          { label: 'Show Rewards', icon: 'pi pi-fw pi-pencil', to: '/showRewards' },
        ]
      }
    }

  }
</script>

<style scoped lang="scss">
  /deep/ .tabmenudemo-content {
    padding: 2rem 1rem;
  }
</style>
