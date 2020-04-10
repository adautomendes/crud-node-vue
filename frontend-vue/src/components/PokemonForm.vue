<template>
  <div class="row center">
    <div class="input-field col s12 m3 l3">
      <input v-model="pokemon.id" required />
      <label>ID</label>
    </div>
    <div class="input-field col s12 m4 l4">
      <input v-model="pokemon.name" required />
      <label>Name</label>
    </div>
    <div class="input-field col s12 m3 l3">
      <input v-model="pokemon.cp" required />
      <label>CP</label>
    </div>
    <div class="input-field col s12 m2 l2">
      <button @click="salvar(pokemon)" class="btn waves-effect waves-light">
        Save
      </button>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "PokemonForm",

  data() {
    return {
      pokemon: {}
    };
  },
  methods: {
    salvar: pokemon => {
      console.log(pokemon);
    }
  }
};
</script>
