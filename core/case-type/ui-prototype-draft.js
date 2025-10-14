const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class UiPrototypeDraftCase extends BlazeCase {
  constructor() {
    super(
      "ui-prototype-draft",
      "UI Prototype Draft",
      [
        {
          id: "Drafting",
          label: "Drafting",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "ui-prototype-draft-drafting-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ui.create_mock",
              label: "Create Mock",
              type: "manual",
              status: "pending",
              view: "ui-prototype-draft-drafting-create-mock",
              dataModelReference: { models: ["prototype.name", "prototype.purpose", "prototype.uiMockUrl"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "ui-prototype-draft-drafting-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Iteration",
          label: "Iteration",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "ui-prototype-draft-iteration-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ui.collect_feedback",
              label: "Collect Feedback",
              type: "manual",
              status: "pending",
              view: "ui-prototype-draft-iteration-collect-feedback",
              dataModelReference: { models: ["review.reviewerEmail", "review.findings", "review.reviewDate"] }
            },
            {
              id: "ui.apply_changes",
              label: "Apply Changes",
              type: "manual",
              status: "pending",
              view: "ui-prototype-draft-iteration-apply-changes",
              dataModelReference: { models: ["prototype.version", "prototype.state"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "ui-prototype-draft-iteration-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Finalize",
          label: "Finalize",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "ui-prototype-draft-finalize-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ui.finalize",
              label: "Finalize Prototype",
              type: "manual",
              status: "pending",
              view: "ui-prototype-draft-finalize-finalize-prototype",
              dataModelReference: { models: ["prototype.version", "prototype.createdDate"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "ui-prototype-draft-finalize-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new UiPrototypeDraftCase();