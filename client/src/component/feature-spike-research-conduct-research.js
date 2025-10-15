
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class FeatureSpikeResearchConductResearch extends DynamicHtmlElement {
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
      fgspike.fields = [{"id":"allocatedHours","name":"Allocated Hours","type":"number","required":false,"description":"Time budget for the spike.","label":"Allocated Hours"},{"id":"outcome","name":"Outcome","type":"text","required":false,"description":"Result and recommended next steps after the spike.","label":"Outcome"}];
      
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

customElements.define("feature-spike-research-conduct-research", FeatureSpikeResearchConductResearch);
export default FeatureSpikeResearchConductResearch;
