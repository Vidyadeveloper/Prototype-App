
import {FormDesignerComponent} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class ExperimentProjectExecutionDevelopment extends FormDesignerComponent {
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
      fgproject.fields = [{"id":"repoUrl","name":"Repository URL","type":"text","required":false,"description":"Source repository location (HTTP/SSH URL).","label":"Repository URL"},{"id":"branch","name":"Branch","type":"text","required":false,"description":"Branch used for the experiment or candidate.","label":"Branch"},{"id":"estimateHours","name":"Estimated Hours","type":"number","required":false,"description":"Estimated effort in hours.","label":"Estimated Hours"}];
      
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

customElements.define("experiment-project-execution-development", ExperimentProjectExecutionDevelopment);
export default ExperimentProjectExecutionDevelopment;
