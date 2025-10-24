const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class BugInvestigationCase extends BlazeCase {
  constructor() {
    super(
      "bug-investigation",
      "Bug Investigation",
      [
        {
          id: "Report",
          label: "Report",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "bug-investigation-report-start",
              dataModelReference: { models: [] }
            },
            {
              id: "bug.report",
              label: "Report Bug",
              type: "manual",
              status: "pending",
              view: "bug-investigation-report-report-bug",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "bug-investigation-report-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Triage",
          label: "Triage",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "bug-investigation-triage-start",
              dataModelReference: { models: [] }
            },
            {
              id: "bug.triage",
              label: "Triage Bug",
              type: "manual",
              status: "pending",
              view: "bug-investigation-triage-triage-bug",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "bug-investigation-triage-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Fix_&_Verify",
          label: "Fix & Verify",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "bug-investigation-fix-&-verify-start",
              dataModelReference: { models: [] }
            },
            {
              id: "bug.fix",
              label: "Fix Issue",
              type: "manual",
              status: "pending",
              view: "bug-investigation-fix-&-verify-fix-issue",
              dataModelReference: { models: [] }
            },
            {
              id: "bug.verify",
              label: "Verify Fix",
              type: "manual",
              status: "pending",
              view: "bug-investigation-fix-&-verify-verify-fix",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "bug-investigation-fix-&-verify-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new BugInvestigationCase();