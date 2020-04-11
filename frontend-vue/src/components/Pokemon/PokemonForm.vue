<template>
  <div class="row center">
    <form>
      <div v-if="errors.length">
        <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
        <ul v-for="(error, i) in errors" v-bind:key="i">
          <li>{{ i + 1 }} - {{ error }}</li>
        </ul>
      </div>
      <div class="input-field col s12 m3 l3">
        <input type="number" v-model="pokemon.id" disabled />
        <label>ID</label>
      </div>
      <div class="input-field col s12 m4 l4">
        <input type="text" v-model="pokemon.name" />
        <label>Name</label>
      </div>
      <div class="input-field col s12 m3 l3">
        <input type="number" v-model="pokemon.cp" />
        <label>CP</label>
      </div>
      <div class="input-field col s12 m2 l2">
        <button
          type="submit"
          @click.prevent="salvar"
          class="btn waves-effect waves-light"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PokemonForm",
  data() {
    return {
      errors: [],
      pokemon: {
        id: {
          type: Number,
          required: true
        },
        name: {
          type: String,
          required: true
        },
        cp: {
          type: Number,
          required: true
        }
      }
    };
  },
  beforeMount() {
    this.errors = [];
    this.pokemon = new Object();
  },
  mounted() {
    this.$root.$on("edit-pokemon", pokemon => {
      this.pokemon = pokemon;
    });
  },
  methods: {
    checkForm() {
      this.errors = [];

      if (!this.pokemon.name) {
        this.errors.push(`Nome é obrigatório`);
      }

      if (!this.pokemon.cp) {
        this.errors.push(`CP é obrigatório`);
      }
    },
    salvar() {
      this.checkForm();

      if (this.errors && this.errors.length > 0) {
        return;
      }

      if (!this.pokemon.id) {
        axios
          .post(`http://localhost:3000/pokemon`, this.pokemon)
          .then(response => {
            console.log(response.data);
            this.$parent.showToast(`${response.data.name} inserted!`);
          })
          .catch(err => {
            console.log(`Error => ${err}`);
          });
      } else {
        axios
          .patch(
            `http://localhost:3000/pokemon/${this.pokemon.id}`,
            this.pokemon
          )
          .then(response => {
            console.log(response.data);
            this.$parent.showToast(`${response.data.name} updated!`);
          })
          .catch(err => {
            console.log(`Error => ${err}`);
          });
      }

      this.$parent.populateList();
      this.clearForm();
    },
    clearForm() {
      this.pokemon = new Object();
    }
  }
};
</script>
