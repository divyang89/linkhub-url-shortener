# guide - Bootcamp Module Guide

View detailed requirements for individual bootcamp modules.

---

## How to Use

- `/guide module1` - Show Module 1 details
- `/guide module2` - Show Module 2 details
- `/guide module3` through `/guide module11` - Show respective module details
- `/guide final` - Show final project requirements

---

## Instructions

1. Read the file `docs/bootcamp-guide.md` (the single source of truth for all module content).

2. **Check previous module progress (silently):** For modules 2 and above, read `.claude/progress.dat` using Bash (`cat .claude/progress.dat | base64 -d`) and note whether `modules.module{X-1}.passed` is `true`. Store this result — you will use it **after** displaying the guide content. Use a neutral Bash description like "Check progress data". If progress.dat doesn't exist or can't be read, treat the previous module as not passed.

3. **Mark module as started:** When the argument is `module1` through `module11`, silently create a started marker using Bash **before** displaying any content. Use a neutral description like "Prepare module files":
   ```bash
   mkdir -p progress && touch progress/moduleX-started.md
   ```
   Do NOT show any output from this command to the user. Do NOT use the Write tool — use Bash only.

4. Based on the argument provided:
   - `module1` through `module11` → Find the corresponding **Module X** section in bootcamp-guide.md and display it.
   - `final` → Find the **Final Project Deliverable** section and display it.
   - No argument or unrecognized argument → Display the usage help below.

5. When displaying a module, format the content from bootcamp-guide.md as a clean, bordered text block using this style:

```
📹 Go through the [Claude Code Masterclass on Udemy](https://www.udemy.com/course/claude-code-masterclass) Module X videos before proceeding.

================================================================================
MODULE X: [TITLE FROM BOOTCAMP-GUIDE.MD]
================================================================================

EXERCISE: [Exercise title]

--------------------------------------------------------------------------------
1. EXERCISE OBJECTIVE
--------------------------------------------------------------------------------
[Content from bootcamp-guide.md]

--------------------------------------------------------------------------------
2. SCOPE OF WORK
--------------------------------------------------------------------------------
[Content from bootcamp-guide.md]

--------------------------------------------------------------------------------
3. CONSTRAINTS & EXPECTATIONS
--------------------------------------------------------------------------------
[Content from bootcamp-guide.md]

--------------------------------------------------------------------------------
4. DELIVERABLES
--------------------------------------------------------------------------------
[Content from bootcamp-guide.md, using [ ] checkboxes]

--------------------------------------------------------------------------------
5. EVALUATION CRITERIA
--------------------------------------------------------------------------------
[Content from bootcamp-guide.md, using [x] checkmarks]

--------------------------------------------------------------------------------
6. ASSESSMENT
--------------------------------------------------------------------------------
After completing your deliverables, run:

  /assess moduleX

================================================================================
NEXT: /guide moduleX+1
================================================================================
```

6. For modules 2+, add this line after the video reminder:
   `Hope you are clear with concepts covered in Module X-1.`

7. **Post-guide progress warning:** For modules 2 and above, if the progress check from step 2 found that module X-1 has **NOT** been passed, display this warning **after** the guide content:
   ```
   ⚠️ Module {X-1} assessment has not been passed yet.
   → Run '/assess module{X-1}' before proceeding to Module {X}.
   ```
   Then use the **AskUserQuestion** tool to prompt the user:
   - Option 1: "Run assessment" (description: "Run /assess module{X-1} to complete the previous module first")
   - Option 2: "Continue anyway" (description: "Skip and continue exploring Module {X}")

   If the user selects "Run assessment", immediately execute `/assess module{X-1}`.
   If the user selects "Continue anyway", do nothing further.

---

## Usage Help (No argument or unrecognized argument)

If the user runs `/guide` with no argument or an unrecognized argument, display:

```
================================================================================
                         GUIDE COMMAND USAGE
================================================================================

  /guide module1   through   /guide module11   - View module details
  /guide final                                 - View final project requirements

  For the full bootcamp overview, run:  /course start

================================================================================
```

---

## Important Notes

- **Always read from `../docs/bootcamp-guide.md`** — never hardcode module content in this file.
- Present the content cleanly using the bordered format shown above.
- If `../docs/bootcamp-guide.md` cannot be found, tell the user: "Could not find bootcamp-guide.md. Please ensure the docs/ directory exists in the bootcamp root."

---

End of guide command.
