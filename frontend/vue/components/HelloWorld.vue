<script setup lang="ts">
import { ref } from 'vue'
import * as TestEndpoint from 'Frontend/generated/TestEndpoint'; 
import { property } from 'lit/decorators';

let props = defineProps<{ msg: string, message?: string, response ?: string, callback: Function}>()


const count = ref(0); 
const resp = ref('response'); 

// functions
function updateServer( mesg: string) {
  let servResp = TestEndpoint.testCall(mesg); 
  servResp.then((str) => resp.value = str!); 
}
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
    <p>{{ message }}</p>
        <input v-model="message">
        <button v-on:click="updateServer(message)">Say what</button>
        <!-- <button v-on:click="$emit('updatedvalue')">Say what emit</button> -->
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
