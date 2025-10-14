
import {FormDesignerComponent} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class ReleaseCandidateReviewQaRunQa extends FormDesignerComponent {
   constructor() {
    super();
  }


  connectedCallback() {
    this.render();
    super.connectedCallback();
  }

  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-bug" context="bug"></blaze-field-group>
      
    `;

    
      const fgbug = this.shadowRoot.getElementById("fg-bug");
      fgbug.context = "bug";
      fgbug.model = {};
      
      // Set initial fields structure (without translations first)
      fgbug.fields = [{"id":"foundInVersion","name":"Found In Version","type":"text","required":false,"description":"Version or branch where the bug was observed.","label":"Found In Version"},{"id":"status","name":"Status","type":"text","required":false,"description":"Bug lifecycle status (new, triaged, fixed, verified).","label":"Status"},{"id":"severity","name":"Severity","type":"text","required":false,"description":"Impact level (low, medium, high, critical).","label":"Severity"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fgbug.data = { "bug": this._formData.bug || {} };
   

  }

  populateForm() {
    
    const fgbug = this.shadowRoot?.getElementById("fg-bug");
    if (fgbug) {
      fgbug.data = { "bug": this._formData["bug"] || {} };
    }
  
  }
}

customElements.define("release-candidate-review-qa-run-qa", ReleaseCandidateReviewQaRunQa);
export default ReleaseCandidateReviewQaRunQa;
