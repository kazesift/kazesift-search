# Kazesift Search - n8n Automation Workflow

This directory contains the n8n workflow configuration to automate the discovery of new cafes and the update process for Kazesift Search.

## Architecture: "Safe Auto-Update" (GitHub PR Strategy)

To ensure quality and prevent bad data from breaking the live site, we use a **Pull Request (PR)** strategy. The automation does NOT write directly to the `main` branch. Instead, it proposes changes via a PR, which you can review and merge.

### Workflow Logic
1.  **Schedule Trigger**: Runs weekly (e.g., Every Monday at 9:00 AM).
2.  **Search Phase**:
    *   Uses **Serper.dev** (Google Search API) or **Google Places API** to search for:
        *   `"Sapporo Cafe New Open [Current Year]"`
        *   `"Sapporo Cafe Trending"`
3.  **Filter Phase**:
    *   Filters results based on:
        *   **Open Date**: Within the last 12 months.
        *   **Rating**: >= 4.0.
        *   **Reviews**: >= 10.
4.  **Format Phase**:
    *   Formats the data into the TypeScript object structure required by `lib/data.ts`.
5.  **GitHub Action**:
    *   Fetches the current `lib/data.ts` content.
    *   Appends the new formatted cafe entry.
    *   Creates a new branch (e.g., `feature/auto-update-[date]`).
    *   Commits the change.
    *   **Creates a Pull Request** to `main` with the title "✨ New Cafe Found: [Cafe Name]".

## Setup Instructions

### 1. Prerequisites
You will need the following API Keys:
*   **n8n instance**: Cloud or Self-hosted.
*   **Serper.dev API Key**: For Google Search results (Free tier available).
    *   Alternative: Google Places API (Requires GCP billing).
*   **GitHub Personal Access Token (Classic)**:
    *   Scopes: `repo` (to read/write code and create PRs).

### 2. Import Workflow
1.  Open your n8n dashboard.
2.  Click **"Add Workflow"**.
3.  Click the three dots `...` in the top right -> **"Import from File"**.
4.  Select the `workflow.json` file in this directory.

### 3. Configure Credentials
In n8n, you will see nodes with red warning signs ("Credentials missing").
1.  **Google/Serp API Node**: Enter your API Key.
2.  **GitHub Node**: Create a credential using your GitHub Personal Access Token and your User/Org name.
3.  **Repository Variables**: In the workflow nodes, verify the repository name is set to `kazesift-search`.

## Maintenance
*   If the structure of `lib/data.ts` changes manually, check if the n8n "Format" node needs updating to match the new schema.
