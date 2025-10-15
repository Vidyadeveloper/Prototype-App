
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class UiPrototypeDraftDraftingCreateMock extends DynamicHtmlElement {
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
      fgprototype.fields = [{"id":"name","name":"Prototype Name","type":"text","required":false,"description":"Name or short identifier for the prototype.","label":"Prototype Name"},{"id":"purpose","name":"Purpose","type":"text","required":false,"description":"Intent or user need the prototype aims to validate.","label":"Purpose"},{"id":"uiMockUrl","name":"UI Mock URL","type":"text","required":false,"description":"Link to design mockups or interactive prototype.","label":"UI Mock URL"}];
      
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

customElements.define("ui-prototype-draft-drafting-create-mock", UiPrototypeDraftDraftingCreateMock);
export default UiPrototypeDraftDraftingCreateMock;
