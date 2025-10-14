const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class ExperimentProjectCase extends BlazeCase {
  constructor() {
    super(
      "experiment-project",
      "Experiment Project",
      [
        {
          id: "Planning",
          label: "Planning",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "experiment-project-planning-start",
              dataModelReference: { models: [] }
            },
            {
              id: "exp.define_project",
              label: "Define Project",
              type: "manual",
              status: "pending",
              view: "experiment-project-planning-define-project",
              dataModelReference: { models: ["project.title", "project.summary", "project.ownerEmail"] }
            },
            {
              id: "exp.collect_prototypes",
              label: "Gather Prototypes",
              type: "manual",
              status: "pending",
              view: "experiment-project-planning-gather-prototypes",
              dataModelReference: { models: ["prototype.name", "prototype.purpose", "prototype.uiMockUrl"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "experiment-project-planning-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Execution",
          label: "Execution",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "experiment-project-execution-start",
              dataModelReference: { models: [] }
            },
            {
              id: "exp.development",
              label: "Development",
              type: "manual",
              status: "pending",
              view: "experiment-project-execution-development",
              dataModelReference: { models: ["project.repoUrl", "project.branch", "project.estimateHours"] }
            },
            {
              id: "exp.run_spike",
              label: "Run Spike",
              type: "manual",
              status: "pending",
              view: "experiment-project-execution-run-spike",
              dataModelReference: { models: ["spike.title", "spike.hypothesis", "spike.allocatedHours"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "experiment-project-execution-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Review",
          label: "Review",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "experiment-project-review-start",
              dataModelReference: { models: [] }
            },
            {
              id: "exp.demo_and_review",
              label: "Demo & Review",
              type: "manual",
              status: "pending",
              view: "experiment-project-review-demo-&-review",
              dataModelReference: { models: ["prototype.version", "review.reviewerEmail", "review.findings"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "experiment-project-review-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Completion",
          label: "Completion",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "experiment-project-completion-start",
              dataModelReference: { models: [] }
            },
            {
              id: "exp.archive",
              label: "Archive Project",
              type: "manual",
              status: "pending",
              view: "experiment-project-completion-archive-project",
              dataModelReference: { models: ["project.status", "project.createdDate"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "experiment-project-completion-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new ExperimentProjectCase();