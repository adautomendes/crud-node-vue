<template>
  <div class="container">
    <PokemonForm />
    <PokemonList :pokemonList="pokemonList" />
  </div>
</template>

<script>
import axios from "axios";
import M from "materialize-css";
import PokemonForm from "@/components/Pokemon/PokemonForm.vue";
import PokemonList from "@/components/Pokemon/PokemonList.vue";

export default {
  name: "Pokemon",
  components: {
    PokemonForm,
    PokemonList
  },

  data() {
    return {
      pokemonList: []
    };
  },

  created() {
    this.populateList();
  },

  methods: {
    populateList() {
      axios
        .get("http://localhost:3000/pokemon")
        .then(response => {
          this.pokemonList = response.data;
          this.showToast(`Pokemon list loaded!`);
        })
        .catch(err => {
          console.log(`Error => ${err}`);
          this.showToast(`Was not possible to connect to backend-node`);
        });
    },
    showToast(msg) {
      M.toast({ html: msg });
    }
  }
};
</script>
