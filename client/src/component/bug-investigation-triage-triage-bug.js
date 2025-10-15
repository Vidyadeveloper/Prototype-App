
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class BugInvestigationTriageTriageBug extends DynamicHtmlElement {
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
      
        <blaze-field-group id="fg-review" context="review"></blaze-field-group>
      
    `;

    
      const fgbug = this.shadowRoot.getElementById("fg-bug");
      fgbug.context = "bug";
      fgbug.model = {};
      
      // Set initial fields structure (without translations first)
      fgbug.fields = [{"id":"severity","name":"Severity","type":"text","required":false,"description":"Impact level (low, medium, high, critical).","label":"Severity"},{"id":"status","name":"Status","type":"text","required":false,"description":"Bug lifecycle status (new, triaged, fixed, verified).","label":"Status"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fgbug.data = { "bug": this._formData.bug || {} };
   
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
    
    const fgbug = this.shadowRoot?.getElementById("fg-bug");
    if (fgbug) {
      fgbug.data = { "bug": this._formData["bug"] || {} };
    }
  
    const fgreview = this.shadowRoot?.getElementById("fg-review");
    if (fgreview) {
      fgreview.data = { "review": this._formData["review"] || {} };
    }
  
  }
}

customElements.define("bug-investigation-triage-triage-bug", BugInvestigationTriageTriageBug);
export default BugInvestigationTriageTriageBug;
