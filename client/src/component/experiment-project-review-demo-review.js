
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class ExperimentProjectReviewDemoReview extends DynamicHtmlElement {
   constructor() {
    super();
  }


  connectedCallback() {
    this.render();
    super.connectedCallback();
  }

  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-prototype" context="prototype"></blaze-field-group>
      
        <blaze-field-group id="fg-review" context="review"></blaze-field-group>
      
    `;

    
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
      fgreview.fields = [{"id":"reviewerEmail","name":"Reviewer Email","type":"email","required":false,"description":"Contact for the primary reviewer.","label":"Reviewer Email"},{"id":"findings","name":"Findings","type":"text","required":false,"description":"Detailed findings and suggested actions.","label":"Findings"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fgreview.data = { "review": this._formData.review || {} };
   

  }

  populateForm() {
    
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

customElements.define("experiment-project-review-demo-review", ExperimentProjectReviewDemoReview);
export default ExperimentProjectReviewDemoReview;
