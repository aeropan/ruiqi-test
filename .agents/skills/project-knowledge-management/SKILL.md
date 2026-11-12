---
name: project-knowledge-management
description: Manage long-running project context, decisions, research deliverables, knowledge persistence, and phase handoffs. Use when a project task is completed, important decisions are made, assumptions change, results need to be saved, or work must be handed over across conversations or tools.
---

# Project Knowledge Management

## 1. Purpose

This skill manages knowledge continuity across long-running projects and multiple AI conversations or tools.

Its purpose is to preserve valuable project knowledge without creating unnecessary documentation.

Follow the project's PROJECT_WORKFLOW.md as the primary management standard.

## 2. When to Use

Activate this skill when:

- A research task or work package is completed.
- An important product or project decision is made.
- A stage is about to be handed over.
- An important assumption or project constraint changes.
- The user asks to summarize, persist, organize, or transfer project context.
- Existing project documentation needs to be reconciled with new findings.

Do not activate it for every ordinary question or discussion.

## 3. Initial Inspection

Before creating or modifying files:

1. Identify the project root.
2. Read PROJECT_CONTEXT.md.
3. Read DECISIONS.md.
4. Read PROJECT_WORKFLOW.md.
5. Inspect existing files relevant to the current task.
6. Identify the new information and its relationship to existing project knowledge.

Do not create duplicate documents when a suitable file already exists.

## 4. Classify Information

Classify important content into three categories:

### Fact
Supported by reliable evidence, explicit user confirmation, or source documents.

### Assumption
A temporary premise used to continue analysis or design.

### Judgment
An interpretation, recommendation, or conclusion based on facts and assumptions.

Never silently convert an assumption into a fact.

## 5. Determine What Needs Persistence

Evaluate the new information:

- Does it affect project direction?
- Does it represent an important decision?
- Is it a completed independent research result?
- Will another task depend on it?
- Does it change an existing assumption?
- Is it needed for a stage handoff?

If none apply, do not create a file.

## 6. Select the Appropriate Destination

Use the following mapping:

| Content | Destination |
|---|---|
| Project background or scope changes | PROJECT_CONTEXT.md |
| Important decisions | DECISIONS.md |
| Industry, customer, or competitor research | research/ |
| Product and business solutions | solution/ |
| Prototype implementation notes | prototype/ |
| Formal reports and presentations | reports/ |
| General collaboration rules | PROJECT_WORKFLOW.md |

Prefer updating existing files.

## 7. Update Procedure

### Step 1: Extract

Extract conclusions rather than copying the full conversation.

### Step 2: Verify

Check the evidence, assumptions, and reasoning.

### Step 3: Compare

Compare new conclusions with existing project decisions and documents.

### Step 4: Resolve Conflicts

If new findings conflict with existing decisions:

- Describe the conflict.
- Explain the supporting evidence.
- Propose a revision.
- Do not silently overwrite an approved decision.

### Step 5: Write

Create or update the appropriate Markdown document.

### Step 6: Review

Check:
- Content completeness.
- Evidence and citations.
- Fact / Assumption / Judgment labels.
- Consistency with project context.
- File location and naming.

## 8. Phase Handoff

When preparing a stage handoff, create a concise summary containing:

### Completed
What has been completed?

### Confirmed
What facts and decisions are established?

### Assumptions
What premises are still unverified?

### Findings
What are the most important conclusions?

### Open Issues
What remains unresolved?

### Next Stage
What should be done next?

### Required Inputs
Which existing files should the next task read?

## 9. Output

After completing knowledge management, report:

1. Whether persistence was necessary.
2. Which files were created or updated.
3. What important content was recorded.
4. Whether any conflicts or unresolved issues remain.
5. What context the next stage can reuse.

Do not claim a file was saved unless the file operation succeeded.

## 10. Core Principle

Preserve valuable knowledge, not every conversation.

Keep project context concise, decisions traceable, research evidence accessible, and stage handoffs actionable.