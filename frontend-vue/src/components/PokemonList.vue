<template>
  <table class="highlight centered">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>CP</th>
        <th>Editar</th>
        <th>Excluir</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(pokemon, index) in pokemons"
        v-bind:item="pokemon"
        v-bind:index="index"
        v-bind:key="pokemon.id"
      >
        <td>
          <strong>{{ pokemon.id }}</strong>
        </td>
        <td>{{ pokemon.name }}</td>
        <td>{{ pokemon.cp }}</td>
        <td><img src="../assets/edit.png" /></td>
        <td><img src="../assets/remove.png" /></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";

export default {
  name: "PokemonList",

  data() {
    return {
      pokemons: []
    };
  },

  created() {
    axios
      .get("http://localhost:3000/pokemon")
      .then(response => {
        this.pokemons = response.data;
      })
      .catch(err => {
        console.log(`Error => ${err}`);
      });
  }
};
</script>

<style scoped>
table img {
  width: 30px;
}
</style>
