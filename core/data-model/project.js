// Data Model: project
module.exports = {
  "id": "project",
  "label": "Project",
  "description": "Core project record for experiments, linking code, estimates, and status.",
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
      "id": "project.title",
      "label": "Title",
      "type": "text",
      "description": "Short, descriptive project title.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "project.summary",
      "label": "Summary",
      "type": "text",
      "description": "High-level summary and goals for the project.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "project.ownerEmail",
      "label": "Owner Email",
      "type": "email",
      "description": "Email of the developer or owner responsible for the project.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "project.repoUrl",
      "label": "Repository URL",
      "type": "text",
      "description": "Source repository location (HTTP/SSH URL).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "project.branch",
      "label": "Branch",
      "type": "text",
      "description": "Branch used for the experiment or candidate.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "project.estimateHours",
      "label": "Estimated Hours",
      "type": "number",
      "description": "Estimated effort in hours.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "project.createdDate",
      "label": "Created Date",
      "type": "date",
      "description": "Date the project/case was created.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "project.status",
      "label": "Status",
      "type": "text",
      "description": "Current lifecycle status (draft, active, completed, archived).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};