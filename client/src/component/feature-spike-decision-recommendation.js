
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class FeatureSpikeDecisionRecommendation extends DynamicHtmlElement {
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
      
        <blaze-field-group id="fg-project" context="project"></blaze-field-group>
      
    `;

    
      const fgspike = this.shadowRoot.getElementById("fg-spike");
      fgspike.context = "spike";
      fgspike.model = {};
      
      // Set initial fields structure (without translations first)
      fgspike.fields = [{"id":"outcome","name":"Outcome","type":"text","required":false,"description":"Result and recommended next steps after the spike.","label":"Outcome"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fgspike.data = { "spike": this._formData.spike || {} };
   
      const fgproject = this.shadowRoot.getElementById("fg-project");
      fgproject.context = "project";
      fgproject.model = {};
      
      // Set initial fields structure (without translations first)
      fgproject.fields = [{"id":"status","name":"Status","type":"text","required":false,"description":"Current lifecycle status (draft, active, completed, archived).","label":"Status"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fgproject.data = { "project": this._formData.project || {} };
   

  }

  populateForm() {
    
    const fgspike = this.shadowRoot?.getElementById("fg-spike");
    if (fgspike) {
      fgspike.data = { "spike": this._formData["spike"] || {} };
    }
  
    const fgproject = this.shadowRoot?.getElementById("fg-project");
    if (fgproject) {
      fgproject.data = { "project": this._formData["project"] || {} };
    }
  
  }
}

customElements.define("feature-spike-decision-recommendation", FeatureSpikeDecisionRecommendation);
export default FeatureSpikeDecisionRecommendation;
