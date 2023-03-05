<template>
  <div class="hello">
    <h3>Synth</h3>
    <form @submit.prevent="search">
      <textarea id="search-bar" v-model="searchText" placeholder="Search the Page Content"></textarea>
      <button>Search</button>
    </form>
    <div v-for="item in results" :key="item.id">
        <p>{{ item.match }}</p>
      </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      searchText: "",
      results: []
    }
  },
  methods:{
    async search() {
      let api = `http://localhost:8000/search?query=${this.searchText}`
      fetch(api).then(response => response.json()).then(prod => {this.results = prod})
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
