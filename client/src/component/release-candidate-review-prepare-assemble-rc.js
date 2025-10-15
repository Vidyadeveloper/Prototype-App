
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class ReleaseCandidateReviewPrepareAssembleRc extends DynamicHtmlElement {
   constructor() {
    super();
  }


  connectedCallback() {
    this.render();
    super.connectedCallback();
  }

  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-project" context="project"></blaze-field-group>
      
        <blaze-field-group id="fg-prototype" context="prototype"></blaze-field-group>
      
        <blaze-field-group id="fg-review" context="review"></blaze-field-group>
      
    `;

    
      const fgproject = this.shadowRoot.getElementById("fg-project");
      fgproject.context = "project";
      fgproject.model = {};
      
      // Set initial fields structure (without translations first)
      fgproject.fields = [{"id":"branch","name":"Branch","type":"text","required":false,"description":"Branch used for the experiment or candidate.","label":"Branch"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fgproject.data = { "project": this._formData.project || {} };
   
      const fgprototype = this.shadowRoot.getElementById("fg-prototype");
      fgprototype.context = "prototype";
      fgprototype.model = {};
      
      // Set initial fields structure (without translations first)
      fgprototype.fields = [{"id":"version","name":"Version","type":"text","required":false,"description":"Prototype version identifier.","label":"Version"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fgprototype.data = { "prototype": this._formData.prototype || {} };
   
      const fgreview = this.shadowRoot.getElementById("fg-review");
      fgreview.context = "review";
      fgreview.model = {};
      
      // Set initial fields structure (without translations first)
      fgreview.fields = [{"id":"reviewerEmail","name":"Reviewer Email","type":"email","required":false,"description":"Contact for the primary reviewer.","label":"Reviewer Email"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fgreview.data = { "review": this._formData.review || {} };
   

  }

  populateForm() {
    
    const fgproject = this.shadowRoot?.getElementById("fg-project");
    if (fgproject) {
      fgproject.data = { "project": this._formData["project"] || {} };
    }
  
    const fgprototype = this.shadowRoot?.getElementById("fg-prototype");
    if (fgprototype) {
      fgprototype.data = { "prototype": this._formData["prototype"] || {} };
    }
  
    const fgreview = this.shadowRoot?.getElementById("fg-review");
    if (fgreview) {
      fgreview.data = { "review": this._formData["review"] || {} };
    }
  
  }
}

customElements.define("release-candidate-review-prepare-assemble-rc", ReleaseCandidateReviewPrepareAssembleRc);
export default ReleaseCandidateReviewPrepareAssembleRc;
