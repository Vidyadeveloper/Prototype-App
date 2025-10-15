
import {FormDesignerComponent} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class ExperimentProjectExecutionRunSpike extends DynamicHtmlElement {
   constructor() {
    super();
  }


  connectedCallback() {
    this.render();
    super.connectedCallback();
  }

  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-spike" context="spike"></blaze-field-group>
      
    `;

    
      const fgspike = this.shadowRoot.getElementById("fg-spike");
      fgspike.context = "spike";
      fgspike.model = {};
      
      // Set initial fields structure (without translations first)
      fgspike.fields = [{"id":"title","name":"Spike Title","type":"text","required":false,"description":"Short title describing the spike.","label":"Spike Title"},{"id":"hypothesis","name":"Hypothesis","type":"text","required":false,"description":"What the spike aims to prove or disprove.","label":"Hypothesis"},{"id":"allocatedHours","name":"Allocated Hours","type":"number","required":false,"description":"Time budget for the spike.","label":"Allocated Hours"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fgspike.data = { "spike": this._formData.spike || {} };
   

  }

  populateForm() {
    
    const fgspike = this.shadowRoot?.getElementById("fg-spike");
    if (fgspike) {
      fgspike.data = { "spike": this._formData["spike"] || {} };
    }
  
  }
}

customElements.define("experiment-project-execution-run-spike", ExperimentProjectExecutionRunSpike);
export default ExperimentProjectExecutionRunSpike;
