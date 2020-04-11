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
        v-for="(pokemon, index) in pokemonList"
        v-bind:item="pokemon"
        v-bind:index="index"
        v-bind:key="pokemon.id"
      >
        <td>{{ pokemon.id }}</td>
        <td>{{ pokemon.name }}</td>
        <td>{{ pokemon.cp }}</td>
        <td>
          <img @click="edit(pokemon)" src="@/assets/edit.png" />
        </td>
        <td>
          <img @click="excluir(pokemon.id)" src="@/assets/remove.png" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";

export default {
  name: "PokemonList",
  props: {
    pokemonList: Array
  },
  methods: {
    edit(pokemon) {
      this.$root.$emit("edit-pokemon", pokemon);
    },
    excluir(id) {
      axios
        .delete(`http://localhost:3000/pokemon/${id}`)
        .then(response => {
          console.log(response.data);
          this.$parent.showToast(`${id} removed!`);
        })
        .catch(err => {
          console.log(`Error => ${err}`);
        });

      this.$parent.populateList();
    }
  }
};
</script>

<style scoped>
table img {
  width: 30px;
}
</style>
