// Data Model: bug
module.exports = {
  "id": "bug",
  "label": "Bug Report",
  "description": "Issue details captured during testing or experimentation.",
  "isEditable": true,
  "attributes": [
    {
      "id": "id",
      "type": "string",
      "label": "ID",
      "required": true,
      "unique": true,
      "indexed": true
    },
    {
      "id": "description",
      "type": "string",
      "label": "Description",
      "defaultValue": ""
    },
    {
      "id": "startDate",
      "type": "date",
      "label": "Start Date",
      "required": true
    },
    {
      "id": "endDate",
      "type": "date",
      "label": "End Date"
    },
    {
      "id": "createdBy",
      "type": "string",
      "label": "Created By",
      "accessControl": {
        "read": [
          "admin"
        ],
        "write": [
          "admin"
        ]
      }
    },
    {
      "id": "createdAt",
      "type": "datetime",
      "label": "Created At"
    },
    {
      "id": "status",
      "type": "string",
      "label": "Status",
      "defaultValue": "draft",
      "allowedValues": [
        "draft",
        "active",
        "inactive",
        "archived"
      ]
    },
    {
      "id": "version",
      "type": "number",
      "label": "Version",
      "defaultValue": 1
    },
    {
      "id": "createdAge",
      "type": "computed",
      "label": "Age (days)",
      "dependencies": [
        "createdAt"
      ]
    },
    {
      "id": "bug.title",
      "label": "Title",
      "type": "text",
      "description": "Short summary of the bug.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "bug.description",
      "label": "Description",
      "type": "text",
      "description": "Detailed reproduction steps and expected vs actual.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "bug.severity",
      "label": "Severity",
      "type": "text",
      "description": "Impact level (low, medium, high, critical).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "bug.reporterEmail",
      "label": "Reporter Email",
      "type": "email",
      "description": "Contact email for the person who reported the bug.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "bug.foundInVersion",
      "label": "Found In Version",
      "type": "text",
      "description": "Version or branch where the bug was observed.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "bug.status",
      "label": "Status",
      "type": "text",
      "description": "Bug lifecycle status (new, triaged, fixed, verified).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "bug.createdDate",
      "label": "Created Date",
      "type": "date",
      "description": "Date the bug was reported.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};