<script setup lang="ts">
import { ref } from 'vue'
import * as TestEndpoint from 'Frontend/generated/TestEndpoint'; 
import { property } from 'lit/decorators';

let props = defineProps<{ msg: string, message?: string, response ?: string, callback: Function}>()


const count = ref(0); 
const resp = ref('response'); 
//let message = defineProps.message; // "Hello"; 
//let response = ""; 

// functions
function updateServer( mesg: string) {
  let servResp = TestEndpoint.testCall(mesg); 
  servResp.then((str) => resp.value = str!); 
}
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Docs
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
    <div>
    <p>{{ message }}</p>
        <input v-model="message">
        <button v-on:click="updateServer(message)">Say what</button>
        <button v-on:click="$emit('updatedvalue')">Say what emit</button>
        <p>{{ resp }}</p>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
