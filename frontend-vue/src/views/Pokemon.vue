<template>
  <div class="container">
    <PokemonForm />
    <PokemonList />
  </div>
</template>

<script>
import PokemonForm from "@/components/PokemonForm.vue";
import PokemonList from "@/components/PokemonList.vue";

export default {
  name: "Pokemon",
  components: {
    PokemonForm,
    PokemonList
  }
};
</script>
