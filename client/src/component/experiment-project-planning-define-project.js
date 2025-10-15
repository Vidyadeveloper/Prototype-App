
import {FormDesignerComponent} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class ExperimentProjectPlanningDefineProject extends DynamicHtmlElement {
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
      fgproject.fields = [{"id":"title","name":"Title","type":"text","required":false,"description":"Short, descriptive project title.","label":"Title"},{"id":"summary","name":"Summary","type":"text","required":false,"description":"High-level summary and goals for the project.","label":"Summary"},{"id":"ownerEmail","name":"Owner Email","type":"email","required":false,"description":"Email of the developer or owner responsible for the project.","label":"Owner Email"}];
      
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

customElements.define("experiment-project-planning-define-project", ExperimentProjectPlanningDefineProject);
export default ExperimentProjectPlanningDefineProject;
