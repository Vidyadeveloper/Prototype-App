
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class BugInvestigationFixVerifyVerifyFix extends DynamicHtmlElement {
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
      fgbug.fields = [{"id":"status","name":"Status","type":"text","required":false,"description":"Bug lifecycle status (new, triaged, fixed, verified).","label":"Status"},{"id":"createdDate","name":"Created Date","type":"date","required":false,"description":"Date the bug was reported.","label":"Created Date"}];
      
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

customElements.define("bug-investigation-fix-verify-verify-fix", BugInvestigationFixVerifyVerifyFix);
export default BugInvestigationFixVerifyVerifyFix;
