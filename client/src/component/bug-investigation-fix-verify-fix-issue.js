
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class BugInvestigationFixVerifyFixIssue extends DynamicHtmlElement {
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
      
        <blaze-field-group id="fg-bug" context="bug"></blaze-field-group>
      
    `;

    
      const fgproject = this.shadowRoot.getElementById("fg-project");
      fgproject.context = "project";
      fgproject.model = {};
      
      // Set initial fields structure (without translations first)
      fgproject.fields = [{"id":"repoUrl","name":"Repository URL","type":"text","required":false,"description":"Source repository location (HTTP/SSH URL).","label":"Repository URL"},{"id":"branch","name":"Branch","type":"text","required":false,"description":"Branch used for the experiment or candidate.","label":"Branch"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fgproject.data = { "project": this._formData.project || {} };
   
      const fgbug = this.shadowRoot.getElementById("fg-bug");
      fgbug.context = "bug";
      fgbug.model = {};
      
      // Set initial fields structure (without translations first)
      fgbug.fields = [{"id":"status","name":"Status","type":"text","required":false,"description":"Bug lifecycle status (new, triaged, fixed, verified).","label":"Status"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fgbug.data = { "bug": this._formData.bug || {} };
   

  }

  populateForm() {
    
    const fgproject = this.shadowRoot?.getElementById("fg-project");
    if (fgproject) {
      fgproject.data = { "project": this._formData["project"] || {} };
    }
  
    const fgbug = this.shadowRoot?.getElementById("fg-bug");
    if (fgbug) {
      fgbug.data = { "bug": this._formData["bug"] || {} };
    }
  
  }
}

customElements.define("bug-investigation-fix-verify-fix-issue", BugInvestigationFixVerifyFixIssue);
export default BugInvestigationFixVerifyFixIssue;
