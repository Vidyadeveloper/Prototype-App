const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class FeatureSpikeCase extends BlazeCase {
  constructor() {
    super(
      "feature-spike",
      "Feature Spike",
      [
        {
          id: "Initiation",
          label: "Initiation",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "feature-spike-initiation-start",
              dataModelReference: { models: [] }
            },
            {
              id: "spike.kickoff",
              label: "Kickoff Spike",
              type: "manual",
              status: "pending",
              view: "feature-spike-initiation-kickoff-spike",
              dataModelReference: { models: ["spike.title", "spike.hypothesis", "spike.dueDate"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "feature-spike-initiation-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Research",
          label: "Research",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "feature-spike-research-start",
              dataModelReference: { models: [] }
            },
            {
              id: "spike.execute",
              label: "Conduct Research",
              type: "manual",
              status: "pending",
              view: "feature-spike-research-conduct-research",
              dataModelReference: { models: ["spike.allocatedHours", "spike.outcome"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "feature-spike-research-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Decision",
          label: "Decision",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "feature-spike-decision-start",
              dataModelReference: { models: [] }
            },
            {
              id: "spike.recommendation",
              label: "Recommendation",
              type: "manual",
              status: "pending",
              view: "feature-spike-decision-recommendation",
              dataModelReference: { models: ["spike.outcome", "project.status"] }
            },
            {
              id: "spike.review",
              label: "Review Findings",
              type: "manual",
              status: "pending",
              view: "feature-spike-decision-review-findings",
              dataModelReference: { models: ["review.reviewerEmail", "review.decision"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "feature-spike-decision-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new FeatureSpikeCase();