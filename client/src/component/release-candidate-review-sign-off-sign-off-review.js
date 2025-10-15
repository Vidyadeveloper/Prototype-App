
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class ReleaseCandidateReviewSignOffSignOffReview extends DynamicHtmlElement {
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
      fgreview.fields = [{"id":"decision","name":"Decision","type":"text","required":false,"description":"Decision/result of the review (approve, iterate, reject).","label":"Decision"},{"id":"summary","name":"Summary","type":"text","required":false,"description":"High-level notes and conclusions from the review.","label":"Summary"},{"id":"reviewDate","name":"Review Date","type":"date","required":false,"description":"Date the review took place.","label":"Review Date"}];
      
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

customElements.define("release-candidate-review-sign-off-sign-off-review", ReleaseCandidateReviewSignOffSignOffReview);
export default ReleaseCandidateReviewSignOffSignOffReview;
