
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class FeatureSpikeDecisionReviewFindings extends DynamicHtmlElement {
   constructor() {
    super();
  }


  connectedCallback() {
    this.render();
    super.connectedCallback();
  }

  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-review" context="review"></blaze-field-group>
      
    `;

    
      const fgreview = this.shadowRoot.getElementById("fg-review");
      fgreview.context = "review";
      fgreview.model = {};
      
      // Set initial fields structure (without translations first)
      fgreview.fields = [{"id":"reviewerEmail","name":"Reviewer Email","type":"email","required":false,"description":"Contact for the primary reviewer.","label":"Reviewer Email"},{"id":"decision","name":"Decision","type":"text","required":false,"description":"Decision/result of the review (approve, iterate, reject).","label":"Decision"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fgreview.data = { "review": this._formData.review || {} };
   

  }

  populateForm() {
    
    const fgreview = this.shadowRoot?.getElementById("fg-review");
    if (fgreview) {
      fgreview.data = { "review": this._formData["review"] || {} };
    }
  
  }
}

customElements.define("feature-spike-decision-review-findings", FeatureSpikeDecisionReviewFindings);
export default FeatureSpikeDecisionReviewFindings;
