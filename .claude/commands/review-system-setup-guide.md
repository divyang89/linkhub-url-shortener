# Review System Setup Guide
## How to Install the Automated Assessment System

---

**Time Required:** 5 minutes  
**Difficulty:** Easy  
**Applies to:** All bootcamp participants

---

## Quick Setup (3 Steps)

### Step 1: Create Commands Directory

In your project root, create the Claude Code commands directory:

```bash
mkdir -p .claude/commands
```

### Step 2: Download Review Command

Save the review command file to `.claude/commands/review.md`

You can:
- **Option A:** Copy the content/file from `resources/review.md` (provided by instructor)

### Step 3: Test the Command

```bash
/review module1
```

You should see output like:
```
========================================
MODULE 1 REVIEW RESULTS
========================================
...
```

**That's it!** You're ready to use the review system.

---

## Detailed Setup Instructions

### For Module 1 Participants

Since you're just starting, here's the complete setup:

**1. Open your project in VS Code**
```bash
cd url-shortener-bootcamp
code .
```

**2. Open Claude Code panel**
- Click the Claude Code icon in the left sidebar
- Or press `Ctrl+Shift+P` and select "Claude Code: Open"

**3. Create the commands directory**

Ask Claude Code:
```
Create a .claude/commands directory in my project
```

**4. Create the review command file**

Ask Claude Code:
```
Create a file at .claude/commands/review.md with the bootcamp review rubrics. 
This file should contain evaluation criteria for all 11 modules including:
- Required deliverables for each module
- Scoring rubric (Functionality 40%, Code Quality 20%, Documentation 20%, Claude Code Usage 15%, Innovation 5%)
- Output format template
- Instructions for how to evaluate and provide feedback
```

Claude Code will create the file for you!

**5. Verify the command works**

In Claude Code, type:
```
/review module1
```

You should see the review interface activate.

---

## Verification Checklist

Ensure everything is working:

- [ ] `.claude/commands` directory exists in project root
- [ ] `.claude/commands/review.md` file exists
- [ ] File contains all 11 module rubrics
- [ ] File contains output format template
- [ ] Running `/review module1` produces a review report
- [ ] Review report shows score and feedback

---

## Usage Guide

### Running a Review

**Syntax:**
```bash
/review module1
/review module2
/review module3
# ... etc
```

**When to run:**
- After completing all module deliverables
- Before moving to the next module
- Multiple times to track improvement
- When you think you're ready for assessment

### Understanding the Output

**Score Interpretation:**
```
90-100: Excellent   ⭐⭐⭐⭐⭐
75-89:  Good        ⭐⭐⭐⭐
60-74:  Pass        ⭐⭐⭐
40-59:  Needs Work  ⭐⭐
0-39:   Fail        ⭐
```

**Pass/Fail:**
- ✅ **PASSED:** Score ≥60 (and quiz ≥80% if required)
- ❌ **FAILED:** Score <60 or quiz <80%

### Acting on Feedback

**1. Read the entire report**
- Don't just look at the score
- Understand what you did well
- Note what needs improvement

**2. Review "Improvements Needed" section**
- Each item is specific and actionable
- These are the blockers to passing (if you failed)
- Address these first

**3. Follow "Recommendations"**
- These are concrete next steps
- Often include examples or references
- Prioritize based on impact

**4. Re-run the review**
- After making improvements
- Verify your score improved
- Iterate until you pass

---


## Troubleshooting

### Problem: `/review` command not recognized

**Cause:** Review command file not in correct location or malformed

**Solution:**
1. Check file exists: `ls .claude/commands/review.md`
2. Verify it's in project root (not a subdirectory)
3. Restart VS Code and Claude Code extension
4. Try running: `/help` to see if other commands work

---

### Problem: Review runs but gives errors

**Cause:** Review command file has syntax errors or incomplete rubrics

**Solution:**
1. Verify file content matches the template exactly
2. Check for missing sections
3. Re-download or re-paste the review-command.md content
4. Ask Claude Code: "Check my .claude/commands/review.md for errors"

---

### Problem: Review says files are missing, but they exist

**Cause:** Files in wrong location or naming mismatch

**Solution:**
1. Double-check exact file paths required by module
2. Verify file names match exactly (case-sensitive)
3. Run: `find . -name "README.md"` to locate files
4. Move files to correct locations if needed

---

### Problem: Score seems wrong or unfair

**Cause:** May be legitimate concern or misunderstanding of rubric

**Solution:**
1. Review the module rubric criteria carefully
2. Check if you met ALL requirements (not just some)
3. Verify file contents match what's expected
4. If still unclear, contact instructor with:
   - Your review output
   - Links to your files
   - Specific concerns about scoring

---

### Problem: Quiz score not calculated

**Cause:** Review system doesn't track quiz scores automatically

**Solution:**
- Quiz must be completed separately on the course platform
- Verify quiz score ≥80% on Udemy
- Mention quiz completion in your progress log
- Instructor may request quiz screenshot

---

## Tips for Better Scores

### Before Starting a Module
✅ Read the module rubric first  
✅ Understand what "excellent" looks like  
✅ Plan your work to hit all criteria  

### During the Module
✅ Follow deliverables checklist  
✅ Document as you go (don't wait until end)  
✅ Test everything works before review  
✅ Commit frequently with good messages  

### Before Running Review
✅ Complete ALL deliverables  
✅ Double-check file locations  
✅ Proofread documentation  
✅ Run any code/tests to verify functionality  
✅ Review your own work critically  

### After Getting Feedback
✅ Address all "Improvements Needed" items  
✅ Implement recommendations in priority order  
✅ Test changes work  
✅ Re-run review to verify improvements  

---

## Advanced: Customizing the Review

### Adding Your Own Checks

You can customize `.claude/commands/review.md` to add extra checks:

**Example: Check for .gitignore**
```markdown
**Additional Check:**
- [ ] .gitignore file exists (bonus 2 pts to Innovation)
```

**Example: Stricter Documentation Requirements**
```markdown
**Documentation Enhanced (25 points instead of 20):**
- [ ] README.md exists and comprehensive (12 pts)
- [ ] Architecture.md with diagrams (8 pts)
- [ ] API documentation (5 pts)
```

### Adding Module-Specific Notes

Add a "Notes" section for reminders:

```markdown
### MODULE X NOTES

**Common Mistakes:**
- Forgetting to update claude.md
- Hardcoding configuration values
- Not testing edge cases

**Time-Savers:**
- Use /generate-docs command
- Template files available in /examples
- Reference Module X sample project
```

---

## Success Strategy

### The Passing Formula

1. **Read rubric before starting** (5 min)
2. **Complete deliverables checklist** (module time)
3. **Self-review before /review** (10 min)
4. **Run /review** (5 min)
5. **Address feedback** (varies)
6. **Re-run /review** (5 min)
7. **Pass and move on!** ✅

### Time Management

**First attempt:**
- Usually takes: Module time + 1 hour
- Pass rate: ~60-70%

**Second attempt:**
- Usually takes: 30-60 minutes
- Pass rate: ~90%

**Third+ attempt:**
- Usually takes: 15-30 minutes
- Pass rate: ~98%

**Pro tip:** Better to pass on first or second attempt. Taking time upfront saves time overall!

---

## Conclusion

The review system is your personal assessment tool. Use it liberally:
- ✅ Early and often (don't wait)
- ✅ To guide your work (not just evaluate it)
- ✅ To build confidence (you'll see improvement)
- ✅ To learn systematically (feedback teaches)

Remember: **Failing a review is not failing the bootcamp!** It's feedback to help you improve. Everyone needs multiple attempts sometimes.

**You've got this!** 🚀

---

**Questions?**  
Contact your bootcamp instructor or post in the discussion forum.

**Ready?**  
Run `/review module1` and start your learning journey!
