<template>
  <div>
    <b-card-group deck class="mb-3">
      <b-card v-for="(menu, key, index) in getMenu(0)" :key="index" border-variant="primary"
              v-bind:header="menu.title"
              header-bg-variant="primary"
              header-text-variant="white"
              align="center">
        <p class="card-text">{{menu.description}}</p>
        <b-button href="./test" size="sm" variant="outline-primary" > start ->> </b-button>
      </b-card>
    </b-card-group>
    <b-card-group deck class="mb-3" v-if="menus.length > 3">
      <b-card v-for="(menu, key, index) in getMenu(1)" :key="index" border-variant="primary"
              v-bind:header="menu.title"
              header-bg-variant="primary"
              header-text-variant="white"
              align="center">
        <p class="card-text">{{menu.description}}</p>
        <b-button href="./test" size="sm" variant="outline-primary" > start ->> </b-button>
      </b-card>

    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'StudyCard',
  data () {
    return {
      menus: [
        {title:"title1", description:"説明内容"},
        {title:"title2", description:"説明内容"},
        {title:"title3", description:"説明内容"},
        {title:"title4", description:"説明内容"},
        {title:"title5", description:"説明内容"},
        {title:"title6", description:"説明内容"},
      ],
    }
  },
  methods:{
    getMenu:function(num){
      let cnt = 3;
      let start = cnt * num;
      let end = cnt * num + cnt;
      let rowmenu = this.menus.slice(start, end);
      return rowmenu;
    }
  },

}
</script>

<style>

</style>
