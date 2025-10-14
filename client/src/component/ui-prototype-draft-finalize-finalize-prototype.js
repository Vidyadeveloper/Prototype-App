
import {FormDesignerComponent} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class UiPrototypeDraftFinalizeFinalizePrototype extends FormDesignerComponent {
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
      fgprototype.fields = [{"id":"version","name":"Version","type":"text","required":false,"description":"Prototype version identifier.","label":"Version"},{"id":"createdDate","name":"Created Date","type":"date","required":false,"description":"Date the prototype was created.","label":"Created Date"}];
      
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

customElements.define("ui-prototype-draft-finalize-finalize-prototype", UiPrototypeDraftFinalizeFinalizePrototype);
export default UiPrototypeDraftFinalizeFinalizePrototype;
