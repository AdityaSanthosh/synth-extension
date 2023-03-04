<template>
  <div class="hello">
    <h3>Synth</h3>
    <form v-on:submit="search">
      <textarea id="search-bar" v-model="searchText" placeholder="Search the Page Content"></textarea>
      <button>Search</button>
    </form>
    {{ results }}
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      searchText: ""
    }
  },
  methods:{
    search(e) {
      e.preventDefault();
      let api = `https://https://synthbackend-1-c0058910.deta.app/search?query=${this.searchText}`
      fetch(api).then(response => console.log(response));
    }
  },
  name: 'UseSynth',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
