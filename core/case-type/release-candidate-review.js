const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class ReleaseCandidateReviewCase extends BlazeCase {
  constructor() {
    super(
      "release-candidate-review",
      "Release Candidate Review",
      [
        {
          id: "Prepare",
          label: "Prepare",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "release-candidate-review-prepare-start",
              dataModelReference: { models: [] }
            },
            {
              id: "rc.assemble",
              label: "Assemble RC",
              type: "manual",
              status: "pending",
              view: "release-candidate-review-prepare-assemble-rc",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "release-candidate-review-prepare-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "QA",
          label: "QA",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "release-candidate-review-qa-start",
              dataModelReference: { models: [] }
            },
            {
              id: "rc.qa",
              label: "Run QA",
              type: "manual",
              status: "pending",
              view: "release-candidate-review-qa-run-qa",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "release-candidate-review-qa-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Sign-off",
          label: "Sign-off",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "release-candidate-review-sign-off-start",
              dataModelReference: { models: [] }
            },
            {
              id: "rc.signoff",
              label: "Sign-off Review",
              type: "manual",
              status: "pending",
              view: "release-candidate-review-sign-off-sign-off-review",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "release-candidate-review-sign-off-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new ReleaseCandidateReviewCase();