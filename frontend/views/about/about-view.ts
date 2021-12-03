import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { View } from '../../views/view';
import * as TestEndpoint from 'Frontend/generated/TestEndpoint'; 
import { createApp } from 'vue';
//@ts-ignore 
import App from '../../vue/App.vue'; 


@customElement('about-view')
export class AboutView extends View {
  render() {
    return html`<div>
    
      <img style="width: 200px;" src="images/empty-plant.png" />
      <h2>This place intentionally left empty</h2>
      <p>It’s a place where you can grow your own UI 🤗</p>
      <div id="app2"> </div>
      <!--<div id="app-6">
        <p>{{ message }}</p>
        <input v-model="message">
        <button v-on:click="updateServer('{{message}}')">Say what</button>
        <p>{{ response }}</p>
         <vue-hello msg='Test'> </vue-hello>
        <VueHello msg='Test'> </VueHello> 
      </div> -->
    </div>`;
  }

  connectedCallback() {
    super.connectedCallback();
    this.classList.add(
      'flex',
      'flex-col',
      'h-full',
      'items-center',
      'justify-center',
      'p-l',
      'text-center',
      'box-border'
    );

    //this._getUpdateComplete(); 
    
   
  }
  //async _getUpdateComplete() {
    //createApp(App).mount('#app2')
  //}

  /*async _getUpdateComplete() {
    await super.getUpdateComplete();
    
    //@ts-ignore
    var app6 = new Vue({
      el: '#app-6',
      data: {
        message: 'Hello Vue!',
        response: '' 
        
      },
      methods: {
        updateServer: function(message: string){
          TestEndpoint.testCall(message);
          //@ts-ignore  
          let resp = TestEndpoint.testCall(this.message); 
          //@ts-ignore
          resp.then((str) => this.response = str ); 
        
        }
      }
    }); 

    TestEndpoint.testCall("Startup done");

    
    
  } */
}
