# course - Bootcamp Progress Tracker

Track your progress across all 11 bootcamp modules.

---

## How to Use

- `/course start` - View welcome message and getting started instructions
- `/course status` - View your progress dashboard across all modules
- `/course resume` - Pick up where you left off (shows status + suggests next action)

---

## Instructions

When the user runs `/course`, check the argument provided:
- `start` → Show the **Welcome & Getting Started** section
- `status` → Show the **Progress Dashboard** section
- `resume` → Show the **Resume & Next Action** section
- No argument or unrecognized argument → Show usage help (see below)

---

## Usage Help (No argument or unrecognized argument)

If the user runs `/course` with no argument or an unrecognized argument, display:

```
================================================================================
                         COURSE COMMAND USAGE
================================================================================

  /course start    - View welcome message and getting started instructions
  /course status   - View your progress dashboard across all modules
  /course resume   - Pick up where you left off

================================================================================
```

---

## Welcome & Getting Started (Show when user runs `/course start`)

Display this content:

```
================================================================================
          WELCOME TO THE CLAUDE CODE BOOTCAMP
================================================================================

  Build a production-ready URL Shortener (LinkHub) while mastering
  Claude Code — the AI-powered CLI for software engineering.

  11 modules. Real code. Hands-on learning.

================================================================================
  GETTING STARTED
================================================================================


  1. READ THE GUIDE    /guide moduleX
     View detailed requirements for each module.

  2. WATCH VIDEOS      Each module includes a companion video.
     Follow along and pause to practice.

  3. BUILD IT          Use Claude Code to implement each module's
     deliverables in the url-shortener-code/ project.

  4. GET ASSESSED      /assess moduleX
     Run the assessment to score your work (pass = 60/100).

  5. TRACK PROGRESS    /course status
     View your dashboard to see completed and upcoming modules.

================================================================================
  BOOTCAMP MODULES
================================================================================

  Module  1: Getting Started with Claude Code      /guide module1
  Module  2: Working with a Sample Project         /guide module2
  Module  3: Understanding Sessions and Context    /guide module3
  Module  4: Mastering Slash Commands              /guide module4
  Module  5: GitHub Integration                    /guide module5
  Module  6: Best Practices                        /guide module6
  Module  7: MCP Tools                             /guide module7
  Module  8: Sub-Agents                            /guide module8
  Module  9: Agent Skills                          /guide module9
  Module 10: Marketplace & Plugins                 /guide module10
  Module 11: Custom MCP Development                /guide module11

  Final Project Requirements                       /guide final

================================================================================
  LEARNING WORKFLOW (repeat for each module)
================================================================================

     /guide moduleX          Read requirements
           |
           v
     Watch video + Code      Build with Claude Code
           |
           v
     /assess moduleX         Get scored (60 to pass)
           |
           v
     /course status          Check your dashboard
           |
           v
     Next module!            /guide moduleX+1

================================================================================
  QUICK COMMAND REFERENCE
================================================================================

  COMMAND                    DESCRIPTION
  -------------------------  -----------------------------------------------
  /course start              This welcome screen
  /course status             Progress dashboard across all modules
  /course resume             Pick up where you left off
  /project-initialize        Generate initial project structure
  /guide moduleX             Detailed requirements for module X
  /assess moduleX            Score your work for module X
 
================================================================================
  SCORING OVERVIEW
================================================================================

  Each module is scored out of 100 points:

  CATEGORY                POINTS
  ----------------------  ------
  Functionality             40
  Code Quality              20
  Documentation             20
  Claude Code Usage         15
  Innovation                 5
                          ------
  TOTAL                    100

  PASSING SCORE: 60 / 100

================================================================================

  Ready? Start with:  /guide module1

================================================================================
```

### After Welcome Screen: Module 1 Progress Check

After displaying the welcome content above, **always** check Module 1's progress:

1. Check if `.claude/progress.dat` exists.
2. If it exists, decode it (base64) and parse the JSON to find Module 1's record.
3. Determine Module 1's score from the progress data.

**If Module 1 is NOT completed with a score of 100/100** (i.e., the module has no pass record, or the score is less than 100), display:

```
================================================================================
  ⚡ MODULE 1 CHECK
================================================================================

  Module 1: Getting Started with Claude Code is not yet at 100%.

  → Run /assess module1 to assess your progress and improve your score.

================================================================================
```

Then use the **AskUserQuestion** tool to prompt the user:
- Option 1: "Run assessment" (description: "Run /assess module1 to check your Module 1 progress")
- Option 2: "Skip for now" (description: "Continue exploring the bootcamp on your own")

If the user selects "Run assessment", immediately execute `/assess module1`.

**If Module 1 IS completed with a score of 100/100**, do not show the check — the welcome screen is sufficient.

---

## Progress Dashboard (Show when user runs `/course status`)

### Step 1: Read Progress Data

1. Check if the file `.claude/progress.dat` exists.
2. If it exists:
   - Read the file contents.
   - The contents are base64-encoded. Decode them using bash: `base64 -d .claude/progress.dat` (on Windows/Git Bash, use `certutil -decode .claude/progress.dat <temp_output>` or `powershell -Command "[System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String((Get-Content '.claude/progress.dat')))"`)
   - Parse the decoded string as JSON.
   - Extract the `modules` object which contains pass records.
3. If the file does not exist or decoding/parsing fails:
   - Treat all modules as having no pass record.
   - If decoding failed (file existed but was corrupted), show a warning: `⚠️ Progress data could not be read. Showing status from session files only.`

### Step 2: Check Session and Started Files

For each module 1 through 11, check if either of these files exist:
- `progress/moduleX-session.md` (created by `/assess` — means an assessment was attempted)
- `progress/moduleX-started.md` (created by `/guide` — means the user has viewed the module guide and started working)

### Step 3: Determine Status Per Module

For each module (1-11), determine its status using this three-state model:

- **Completed** — The decoded progress data contains an entry for this module with `passed: true`
- **In Progress** — No pass record exists, but `progress/moduleX-session.md` OR `progress/moduleX-started.md` exists (the user has started working on this module)
- **Not Started** — No pass record, no session file, and no started file exists

### Step 4: Display Dashboard

Use the module titles listed below and display the dashboard in this exact format:

**Module Titles:**
1. Getting Started with Claude Code
2. Working with a Sample Project
3. Understanding Sessions and Context
4. Mastering Slash Commands and Settings
5. Automating Dev Tasks: GitHub Integration
6. Coding with AI: Best Practices
7. Mastering MCP Tools for Automation
8. Building Smart Workflows with Sub-Agents
9. Agent Skills & Advanced AI Workflows
10. Claude Marketplace & Plugins
11. Advanced MCP Tools & Custom Automation

**Dashboard format:**

```
================================================================================
                    BOOTCAMP PROGRESS DASHBOARD
================================================================================

  #   MODULE                                     STATUS          SCORE
  --- ------------------------------------------ --------------  ------
   1  Getting Started with Claude Code            ✅ Completed     82/100
   2  Working with a Sample Project               🔄 In Progress    --
   3  Understanding Sessions and Context           ⬜ Not Started    --
   4  Mastering Slash Commands and Settings        ⬜ Not Started    --
   5  Automating Dev Tasks: GitHub Integration     ⬜ Not Started    --
   6  Coding with AI: Best Practices              ⬜ Not Started    --
   7  Mastering MCP Tools for Automation           ⬜ Not Started    --
   8  Building Smart Workflows with Sub-Agents     ⬜ Not Started    --
   9  Agent Skills & Advanced AI Workflows         ⬜ Not Started    --
  10  Claude Marketplace & Plugins                 ⬜ Not Started    --
  11  Advanced MCP Tools & Custom Automation       ⬜ Not Started    --

================================================================================
LEGEND:  ✅ = Completed    🔄 = In Progress    ⬜ = Not Started
================================================================================

  SUMMARY
  Completed:    1 / 11 modules
  In Progress:  1 module(s)
  Average Score: 82% (across completed modules)

  NEXT STEP: Run /guide module3 to start Module 3: Understanding Sessions and Context
================================================================================
```

**Rules for the dashboard:**
- For **Completed** modules: show the score from the progress data (e.g., `82/100`)
- For **In Progress** and **Not Started** modules: show `--` as the score
- The **NEXT STEP** should recommend the lowest-numbered module that is not yet completed. If all are completed, show a congratulations message instead.
- The **Average Score** is calculated only across completed modules. If none are completed, show `--` instead.
- Align columns neatly for readability.

---

## Resume & Next Action (Show when user runs `/course resume`)

This command helps participants pick up exactly where they left off. It reads progress, determines the current state, suggests the next concrete action, and asks the user to confirm.

### Step 1: Read Progress Data

Follow the same steps as the Progress Dashboard (Step 1, 2, 3) to read `.claude/progress.dat`, check session files, and determine the status of each module.

### Step 2: Identify the Current Module and Next Action

Using the status of each module, determine the participant's current situation by checking modules in order (1 through 11):

**Case A: A module is "In Progress" (session file or started file exists, no pass record)**
- This means the participant has started working on the module (viewed the guide or attempted an assessment) but hasn't passed yet.
- The **current module** is this in-progress module.
- The **next action** is: re-run `/assess moduleX` (if they've made improvements) or continue working on deliverables.
- Read the session file (`progress/moduleX-session.md`) to extract what was worked on and any noted next steps.

**Case B: All completed modules are sequential and the next module is "Not Started"**
- The **current module** is the lowest-numbered "Not Started" module.
- The **next action** depends on whether a session file exists for ANY module:
  - If no modules have been started at all → suggest `/guide module1`
  - Otherwise → suggest `/guide moduleX` for the next unstarted module

**Case C: All 11 modules are completed**
- Show a congratulations message and suggest `/guide final` for final project requirements.

### Step 3: Read Last Session Context (if available)

If the current or most recent module has a session file (`progress/moduleX-session.md`):
- Read the file
- Extract the **"Next Steps"** section (lines starting with `- [ ]`)
- Extract the **"Session Summary"** for context on what was last done

### Step 4: Display Resume Screen

Display in this format:

```
================================================================================
                       WELCOME BACK TO THE BOOTCAMP
================================================================================

  PROGRESS SNAPSHOT
  -----------------
  Completed:    X / 11 modules
  Last Passed:  Module X — [Title] (Score: XX/100)
  Current:      Module Y — [Title] ([Status])

================================================================================
  WHERE YOU LEFT OFF
================================================================================

  [If a session file exists for the current module:]
  Last session (Module X): [Session Summary from session file]

  Pending tasks from your last session:
    - [ ] [Next step 1 from session file]
    - [ ] [Next step 2 from session file]

  [If no session file exists for the current module:]
  You haven't started Module Y yet.

================================================================================
  SUGGESTED NEXT ACTION
================================================================================

  [One of the following based on the case:]

  Case A (In Progress, not passed):
  → Your Module X assessment needs more work.
    Ready to continue working, or re-assess?

    1. Run /guide moduleX     — Review requirements
    2. Run /assess moduleX    — Re-run assessment

  Case B (Next module not started):
  → Ready to start Module Y: [Title]

    1. Run /guide moduleY     — View module requirements

  Case C (All completed):
  → All 11 modules completed! Time for your final project.

    1. Run /guide final       — View final project requirements

================================================================================
```

### Step 5: Ask for Confirmation

After displaying the resume screen, use the AskUserQuestion tool to prompt the user with the relevant actions:

**For Case A (In Progress):**
- Option 1: "View guide" → Execute `/guide moduleX`
- Option 2: "Run assessment" → Execute `/assess moduleX`
- Option 3: "Show full status" → Execute `/course status`

**For Case B (Next module):**
- Option 1: "Start module" → Execute `/guide moduleY`
- Option 2: "Show full status" → Execute `/course status`

**For Case C (All completed):**
- Option 1: "View final project" → Execute `/guide final`
- Option 2: "Show full status" → Execute `/course status`

After the user selects an option, immediately execute the corresponding command.

---

## Important Notes

- **Never reveal** the location or encoding method of the progress data file to the participant.
- If a participant asks how progress is tracked, say: "Your progress is automatically recorded when you pass module assessments."
- The progress dashboard is read-only — participants cannot manually update their scores.
- A module shows as "In Progress" when the user has viewed its guide (`/guide moduleX` creates a started marker) or attempted an assessment but hasn't passed yet. The participant can run `/assess moduleX` to get scored.

---

End of course command.
