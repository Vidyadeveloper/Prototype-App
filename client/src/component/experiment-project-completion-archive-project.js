
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class ExperimentProjectCompletionArchiveProject extends DynamicHtmlElement {
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
      
    `;

    
      const fgproject = this.shadowRoot.getElementById("fg-project");
      fgproject.context = "project";
      fgproject.model = {};
      
      // Set initial fields structure (without translations first)
      fgproject.fields = [{"id":"status","name":"Status","type":"text","required":false,"description":"Current lifecycle status (draft, active, completed, archived).","label":"Status"},{"id":"createdDate","name":"Created Date","type":"date","required":false,"description":"Date the project/case was created.","label":"Created Date"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fgproject.data = { "project": this._formData.project || {} };
   

  }

  populateForm() {
    
    const fgproject = this.shadowRoot?.getElementById("fg-project");
    if (fgproject) {
      fgproject.data = { "project": this._formData["project"] || {} };
    }
  
  }
}

customElements.define("experiment-project-completion-archive-project", ExperimentProjectCompletionArchiveProject);
export default ExperimentProjectCompletionArchiveProject;
