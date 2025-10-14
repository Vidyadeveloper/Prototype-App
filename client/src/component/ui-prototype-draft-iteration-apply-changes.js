
import {FormDesignerComponent} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class UiPrototypeDraftIterationApplyChanges extends FormDesignerComponent {
   constructor() {
    super();
  }


  connectedCallback() {
    this.render();
    super.connectedCallback();
  }

  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-prototype" context="prototype"></blaze-field-group>
      
    `;

    
      const fgprototype = this.shadowRoot.getElementById("fg-prototype");
      fgprototype.context = "prototype";
      fgprototype.model = {};
      
      // Set initial fields structure (without translations first)
      fgprototype.fields = [{"id":"version","name":"Version","type":"text","required":false,"description":"Prototype version identifier.","label":"Version"},{"id":"state","name":"State","type":"text","required":false,"description":"Lifecycle state (draft, in-review, approved).","label":"State"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fgprototype.data = { "prototype": this._formData.prototype || {} };
   

  }

  populateForm() {
    
    const fgprototype = this.shadowRoot?.getElementById("fg-prototype");
    if (fgprototype) {
      fgprototype.data = { "prototype": this._formData["prototype"] || {} };
    }
  
  }
}

customElements.define("ui-prototype-draft-iteration-apply-changes", UiPrototypeDraftIterationApplyChanges);
export default UiPrototypeDraftIterationApplyChanges;
