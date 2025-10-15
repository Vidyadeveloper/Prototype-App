
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class BugInvestigationReportReportBug extends DynamicHtmlElement {
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
      fgbug.fields = [{"id":"title","name":"Title","type":"text","required":false,"description":"Short summary of the bug.","label":"Title"},{"id":"description","name":"Description","type":"text","required":false,"description":"Detailed reproduction steps and expected vs actual.","label":"Description"},{"id":"reporterEmail","name":"Reporter Email","type":"email","required":false,"description":"Contact email for the person who reported the bug.","label":"Reporter Email"},{"id":"foundInVersion","name":"Found In Version","type":"text","required":false,"description":"Version or branch where the bug was observed.","label":"Found In Version"}];
      
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

customElements.define("bug-investigation-report-report-bug", BugInvestigationReportReportBug);
export default BugInvestigationReportReportBug;
