# Claude Code Bootcamp: Building Production-Ready Applications with AI

## 🎯 Bootcamp Objective

Welcome to the Claude Code Bootcamp! This comprehensive, hands-on program is designed to transform you from an AI-curious developer into a proficient AI-assisted engineer who can leverage Claude Code to build, deploy, and maintain production-ready applications efficiently.

---

## 🚀 What You Will Achieve

Upon successful completion of this bootcamp, you will be able to:

### **Technical Mastery**
- ✅ **Set up and configure** Claude Code in your development environment (VS Code and CLI)
- ✅ **Implement production-grade features** including authentication, analytics, and deployment automation
- ✅ **Design and manage databases** with proper schema design, migrations, and optimization
- ✅ **Create custom automation tools** including slash commands, hooks, and MCP tools
- ✅ **Develop custom Agent Skills** tailored to your project needs

### **AI Collaboration Skills**
- ✅ **Prompt effectively** to get high-quality code and solutions from Claude Code
- ✅ **Manage context and sessions** to maintain continuity across development tasks
- ✅ **Debug intelligently** using AI to identify and fix complex bugs
- ✅ **Refactor confidently** with AI-guided architectural improvements
- ✅ **Document systematically** with AI-generated documentation that's actually useful

### **Tangible Deliverable**
- ✅ **A complete, production-ready URL shortener platform** that you built from scratch, featuring:
  - RESTful API with comprehensive endpoints
  - Interactive analytics dashboard
---
## 📚 Bootcamp Structure

This bootcamp consists of **11 progressive modules**, each building upon the previous:

1. **Getting Started with Claude Code** - Setup and fundamentals
2. **Working with a Sample Project** - Basic usage and context management
3. **Understanding Sessions and Context** - Debugging and continuity
4. **Mastering Slash Commands** - Custom automation
5. **GitHub Integration** - Version control and CI/CD
6. **Best Practices** - Code quality and testing
7. **MCP Tools** - Database integration and analytics
8. **Sub-Agents** - Parallel development workflows
9. **Agent Skills** - Advanced AI capabilities
10. **Marketplace & Plugins** - Performance optimization
11. **Custom MCP Development** - Building deployment automation

Each module includes:
- Hands-on exercises aligned with the URL shortener project
- Clear objectives and deliverables
- Automated review and scoring
- Incremental feature development

---

## 📖 How to Use This Bootcamp

### **Primary Learning Resource**

This bootcamp is designed to work alongside the comprehensive video course:

🎓 **[Claude Code Masterclass - Complete Course](https://www.udemy.com/course/claude-code-masterclass)**

### **Learning Workflow**

Follow this structured approach for each module:

1. **📹 Watch the Course Videos**
2. **💻 Work on Deliverables**
3. **✅ Assess deliverables**
   - Complete all deliverables locally
   - run the assess command: `/assess moduleX`
   - Receive automated feedback and scoring
   - Address any gaps before moving to the next module
4. **🔄 Iterate and Progress**
   - Only move to the next module after passing the current one
   - Each module builds on previous work
   - Your project grows incrementally

## 🎓 Learning Approach

### **Hands-On & Project-Based**
Every concept is immediately applied to building your URL shortener. No abstract examples—only practical, real-world implementation.

### **Incremental Building**
The project grows with you:
- Module 1-2: Setup and basic URL shortening
- Module 3-4: Bug fixing and automation
- Module 5-6: GitHub workflow and testing
- Module 7-8: Database and analytics
- Module 9-10: Advanced features and optimization
- Module 11: Deployment automation

### **Automated Assessment**
After each module, you'll run a review command that:
- Evaluates your deliverables
- Provides actionable feedback
- Assigns a score
- Determines pass/fail status

---

## 🎯 Success Criteria

To successfully complete this bootcamp, you must:

- ✅ Complete all 11 modules with passing scores (≥75% average, no module below 60%)
- ✅ Submit all required deliverables
- ✅ Build a fully functional URL shortener platform
- ✅ Create comprehensive documentation
- ✅ Present a 10-minute demo of your final project

---

# 📋 Module-by-Module Exercise Structure


## **Module 1: Getting Started with Claude Code**

### **Exercise: Set up Claude Code and configure your development environment**

#### **1. Exercise Objective**
Set up Claude Code and configure your development environment

> 📹 *Go through the [Udemy course] Module 1 videos before proceeding.*

#### **2. Scope of Work**
- Install Claude Code CLI and VS Code extension
- Configure API key and verify connectivity

#### **3. Constraints & Expectations**
- Use Claude Code for all setup commands

#### **4. Deliverables**
- Verification of successful Claude Code installation and connection test
- Verification of Claude Code running in VS Code

#### **5. Evaluation Criteria**
- ✅ Claude Code properly installed and authenticated

#### **6. Assessment**
After completing your deliverables, run the assess command:
```bash
/assess module1
```

#### **7. After Completing Module 1: Use Claude Code Commands**

Once you've passed Module 1, navigate to your `url-shortener-code` project and use these commands directly in Claude Code:

```
/guide module2      # View specific module details (module1-module11)
/project-initialize # Initialize project structure (Module 2)
```

These commands provide real-time guidance and automated assessment as you progress through the bootcamp.

---

## **Module 2: Working with a Sample Project & Claude Code Basics**

### **Exercise: Create claude.md and Define Project Context**

#### **1. Exercise Objective**
Use Claude Code's `/init` command to create a comprehensive `claude.md` file that will guide AI-assisted development throughout the bootcamp.

> 📹 *Go through the [Udemy course] Module 2 videos before proceeding.*

#### **2. Scope of Work**
- Run `/project-initialize` to generate folder structure for frontend and backend with stubs
- Run `/init` to generate `claude.md` (now based on actual project structure)
- Customize `claude.md` with URL shortener project specifications
- Configure Claude Code plugin settings (Ask Before Edit, Plan Mode)
- Practice terminal commands with Claude Code
- Create initial API endpoint stubs (no implementation)

#### **3. Constraints & Expectations**
- `claude.md` must include:
  - Project goals (URL shortening with analytics)
  - Tech stack (to be decided: Node.js/Python for backend, React/Vue for frontend)
  - Coding standards (style guide, naming conventions)
  - Development workflow
- Enable "Ask Before Edit" mode initially
- Use Plan Mode for structural changes

#### **4. Deliverables**
- Complete `claude.md` file (minimum 50 lines, covering project context)
- Project directory structure showing:
  - `/backend` (placeholder)
  - `/frontend` (placeholder)
  - `README.md` with project overview
- Backend folder with:
  - Entry point file (`app.py` or `server.js`)
  - Route file with stub endpoints: `POST /shorten`, `GET /:shortCode`

#### **5. Evaluation Criteria**
- ✅ `claude.md` is comprehensive and project-specific
- ✅ Plugin settings appropriately configured and documented
- ✅ Stub endpoints created with clear TODO comments

#### **6. Assessment**
After completing your deliverables, run the assess command:
```bash
/assess module2
```

---

## **Module 3: Understanding Sessions and Context with Hands-On Bug Fixing**

### **Exercise: Implement Core URL Shortening Logic and Fix Bugs Using Sessions**

#### **1. Exercise Objective**
- Apply the context and session management concepts from the Module 3 course videos
- Use custom prompts, context-setting techniques, and session strategies to guide Claude Code through implementing your stub endpoints from Module 2
- Intentionally introduce realistic bugs into the implementation
- Use multiple Claude Code sessions to identify and fix the bugs
- Practice providing context when switching between sessions

> 📹 *Go through the [Udemy course] Module 3 videos before proceeding.*

#### **2. Scope of Work**

**Part A: Implementation (First Session)**
- Using Claude Code, design and implement the frontend and backend for:
  1. **Create Short URL** — POST endpoint + form to shorten a URL (6-8 char alphanumeric code)
  2. **Redirect** — GET endpoint + frontend integration to redirect short codes to original URLs
- Handle duplicate URLs (return existing short code)
- Start both servers and create a few short links for valid long URLs (e.g., https://www.google.com)

**Part B: Bug Introduction (Prepare for Learning)**
- **Intentionally introduce 2-3 realistic bugs** such as:
  - Bug 1: Invalid URL validation missing (accepts malformed URLs)
- Document what bugs you introduced for later reference in documentation/bugs-fixed.md file

**Part C: Bug Fixing (Multiple Sessions)**
- Start a NEW Claude Code session
- Use Claude Code to identify bugs without telling it what they are
- Fix only introduced bugs across at least 2 separate sessions

#### **3. Constraints & Expectations**
- No database yet—use in-memory storage only
- Short codes must be 6-8 characters (alphanumeric)
- Must handle duplicate URLs (return existing short code)
- Bugs must be realistic (not obvious syntax errors)
- Use at least 2 separate Claude Code sessions for debugging
- Close first session before starting debugging session to practice context management

#### **4. Deliverables**
- Working backend code with:
  - Complete implementation of functionality to generate shortCode
  - Complete implementation of functionality to redirect from short to long URL
  - In-memory storage structure (dictionary/map)
- Working front end code with:
  - Integration of of `shorten_url()` function
  - Integration of `redirect()` function
- `/documentation/bugs-fixed.md` documenting:
  - **Part 1: Bugs Introduced**
    - Each bug you introduced (for your reference)
  - **Part 2: Bug Fixing Process**
    - Fixes applied

#### **5. Evaluation Criteria**
- ✅ URL shortening implementation works correctly
- ✅ Redirect functionality operational
- ✅ All intentional bugs identified and fixed

#### **6. Assessment**
After completing your deliverables, run the assess command:
```bash
/assess module3
```

---

## **Module 4: Mastering Slash Commands and Settings in Claude Code**

### **Exercise: Create Custom Slash Commands for Development Workflow**

#### **1. Exercise Objective**
Build custom slash commands that automate repetitive tasks in your URL shortener development for notifications.

> 📹 *Go through the [Udemy course] Module 4 videos before proceeding.*

#### **2. Scope of Work**
- Create at least 2 custom slash commands:
  1. `/generate-docs` - Auto-generates API documentation from code
  2. `/check-urls` - Validates all stored URLs are still accessible
  
#### **3. Constraints & Expectations**
- Slash commands must be stored in `.claude/commands/` directory
- Each command must have clear documentation

#### **4. Deliverables**
- `.claude/commands/` directory with both custom commands


#### **5. Evaluation Criteria**
- ✅ All custom slash commands work correctly

#### **6. Assessment**
After completing your deliverables, run the assess command:
```bash
/assess module4
```

---

## **Module 5: Automating Dev Tasks: Claude Code + GitHub Integration**

### **Exercise: Establish GitHub Workflow with Automated Issue Resolution**

#### **1. Exercise Objective**
Connect your URL shortener project to GitHub, establish a proper branching strategy, and use Claude Code to automatically resolve GitHub issues.

> 📹 *Go through the [Udemy course] Module 5 videos before proceeding.*

#### **2. Scope of Work**
- Create GitHub repository for the project
- Set up branch protection rules (main/develop branches)
- Configure GitHub Actions for basic CI/CD (linting, tests)
- Create 3 GitHub issues representing real tasks:
  - Add URL expiration feature (data structure only)
  - Implement rate limiting (basic counter logic)
  - Add custom short code support (allow user-specified codes)
- Use Claude Code to auto-fix at least 1 issue and create PR

#### **3. Constraints & Expectations**
- Use conventional commit messages
- All work must be done in feature branches
- PRs must pass automated checks before merge
- Claude Code must be used via CLI for GitHub integration
- Document your branching strategy in `docs/git-workflow.md`

#### **4. Deliverables**
- Public/private GitHub repository link
- `.github/workflows/` directory with CI/CD configuration
- 3 closed issues with linked commits
- At least 1 PR created automatically by Claude Code
- Screenshot of GitHub Actions run
- `url-shortener-code/documentation/git-workflow.md` explaining:
  - Branching strategy
  - PR process
  - How Claude Code assisted
- Implementation of at least 2 of the 3 features (basic versions)

#### **5. Evaluation Criteria**
- ✅ Repository properly configured with branch protection
- ✅ GitHub Actions successfully running
- ✅ Issues properly documented and resolved
- ✅ PR created via Claude Code demonstrates automation
- ✅ Git workflow documentation is clear
- ✅ At least 2 new features implemented and tested

#### **6. Assessment**
After completing your deliverables, run the assess command:
```bash
/assess module5
```

---

## **Module 6: Coding with AI: Best Practices for Claude Code**

### **Exercise: Refactor and Test with AI Best Practices**

#### **1. Exercise Objective**
Apply AI coding best practices to refactor existing code, implement comprehensive testing, and establish code quality standards.

> 📹 *Go through the [Udemy course] Module 6 videos before proceeding.*

#### **2. Scope of Work**
- Refactor existing codebase following best practices:
  - Separation of concerns (routes, services, data access)
  - Error handling and logging
- Implement comprehensive test suite:
  - Unit tests (minimum 80% coverage)
  - Edge case testing

#### **3. Constraints & Expectations**
- Use Claude Code to identify refactoring opportunities
- Follow SOLID principles where applicable
- All tests must be automated and repeatable
- Code must pass linting without warnings
- Document your prompting strategy for AI-assisted refactoring

#### **4. Deliverables**
- Refactored codebase with clear architecture:
  - `/routes` or `/controllers`
  - `/services`
  - `/models`
  - `/utils`
- Test suite with:
  - Minimum 15 test cases
  - Test coverage report (screenshot)
- `pytest.ini`, `.eslintrc`, or equivalent configuration files
- Generated API documentation (HTML or Markdown)
- `url-shortener-code/documentation/refactoring-log.md` explaining:
  - Changes made
  - AI prompts used
  - Lessons learned

#### **5. Evaluation Criteria**
- ✅ Code structure significantly improved
- ✅ Test coverage ≥ 80%
- ✅ All tests passing
- ✅ Code quality tools configured and passing
- ✅ API documentation complete and accurate
- ✅ Refactoring log demonstrates thoughtful AI collaboration

#### **6. Assessment**
After completing your deliverables, run the assess command:
```bash
/assess module6
```

---

## **Module 7: Mastering MCP Tools for Real-World Automation**

### **Exercise: Integrate Database with MCP Tools and Implement Analytics**

#### **1. Exercise Objective**
Automating UI testing with Playwright

> 📹 *Go through the [Udemy course] Module 7 videos before proceeding.*

#### **2. Scope of Work**
- Automating UI testing with Playwright 

#### **3. Constraints & Expectations**
- Use MCP tools exclusively for automating UI Testing

#### **4. Deliverables**
- Playwright scripts

#### **5. Evaluation Criteria**
- ✅ MCP properly set up 

#### **6. Assessment**
After completing your deliverables, run the assess command:
```bash
/assess module7
```

---

## **Module 8: Building Smart Workflows with Sub-Agents**

### **Exercise: Create Sub-Agents for Modular Development**

#### **1. Exercise Objective**
Implement sub-agents to parallelize development of the frontend dashboard and additional backend features.

> 📹 *Go through the [Udemy course] Module 8 videos before proceeding.*

#### **2. Scope of Work**
- Create 3 sub-agents:
  1. **Frontend Agent** - Responsible for building the dashboard UI
  2. **API Agent** - Responsible for backend enhancements
- Use sub-agents to simultaneously work on:
  - Frontend: Basic dashboard showing URL list and analytics
  - Backend: Bulk URL import feature, URL expiration logic
- Create custom commands for coordinating sub-agents

#### **3. Constraints & Expectations**
- Each sub-agent must have a dedicated configuration file
- Sub-agents should have specific, non-overlapping responsibilities
- Use sub-agents to demonstrate parallel workflow (at least 2 active simultaneously)
- Frontend must be a separate application (React, Vue, or similar)
- Document communication patterns between sub-agents

#### **4. Deliverables**
- `.claude/agents/` directory with 3 sub-agent configurations
- Frontend application in `/frontend` with:
  - Dashboard showing list of shortened URLs
  - Basic analytics visualization (bar chart or table)
  - Form to create new short URLs
- Backend enhancements:
  - Bulk import endpoint (`POST /bulk-import`)
  - URL expiration field in database
  - Background job to clean expired URLs (simple cron-like implementation)
- `url-shortener-code/documentation/sub-agents-workflow.md` explaining:
  - How sub-agents were configured
  - Task delegation strategy
  - Coordination between agents
  - Challenges and solutions

#### **5. Evaluation Criteria**
- ✅ Both sub-agents properly configured
- ✅ Frontend dashboard functional and displays data
- ✅ Sub-agent workflow demonstrates effective parallel development

#### **6. Assessment**
After completing your deliverables, run the assess command:
```bash
/assess module8
```

---

## **Module 9: Masterclass: Agent Skills & Advanced AI Workflows**

### **Exercise: Build Custom Skills for Enhanced Development**

#### **1. Exercise Objective**
Create custom agent skills that enhance Claude Code's capabilities specifically for your URL shortener project.

> 📹 *Go through the [Udemy course] Module 9 videos before proceeding.*

#### **2. Scope of Work**
- Build 2 custom skills:
  1. **URL Validator Skill** - Advanced URL validation with domain reputation checking
  2. **Analytics Reporter Skill** - Generates formatted analytics reports
- Enhance frontend with:
  - Advanced analytics dashboard (time-series charts)
  - User authentication (simple JWT-based)
  - Settings page for URL customization

#### **3. Constraints & Expectations**
- Skills must follow Anthropic's skill architecture guidelines
- Skills should integrate seamlessly with existing Claude Code workflow
- Frontend enhancements must be production-ready quality
- Document when to use Skills vs MCP vs Sub-agents vs Slash Commands
- A/B testing must track which variant gets more clicks

#### **4. Deliverables**
- `/skills` directory with 2 custom skills:
  - `url-validator/SKILL.md` and implementation
  - `analytics-reporter/SKILL.md` and implementation

#### **5. Evaluation Criteria**
- ✅ Custom skills implemented and functional
- ✅ Skills properly documented with SKILL.md files

#### **6. Assessment**
After completing your deliverables, run the assess command:
```bash
/assess module9
```

---

## **Module 10: Claude Marketplace & Plugins: The Efficiency Multiplier**

### **Exercise: Integrate Marketplace Plugins and Optimize Performance**

#### **1. Exercise Objective**
Leverage Claude Marketplace plugins to enhance your URL shortener and optimize overall system performance.

> 📹 *Go through the [Udemy course] Module 10 videos before proceeding.*

#### **2. Scope of Work**
- Explore and integrate relevant Claude plugins for:
  - API documentation generation
  - Performance monitoring
  - Security scanning
- Implement performance optimizations:
  - Caching layer (Redis or in-memory)
  - Database query optimization (indexes, query analysis)
  - API rate limiting
  - Response compression
- Add link preview generation (fetch title, description, image from target URLs)
- Implement URL blacklist checking (prevent malicious links)

#### **3. Constraints & Expectations**
- Must use at least 2 plugins from Claude Marketplace
- Performance improvements must be measurable (before/after metrics)
- Caching must invalidate appropriately
- Link previews must be generated asynchronously
- Security scanning must be automated in CI/CD pipeline

#### **4. Deliverables**
- Documentation of plugins used (`docs/plugins-used.md`):
  - Which plugins selected
  - Why chosen
  - Integration process
  - Results/benefits
- Implemented caching layer with:
  - Configuration documentation
  - Cache invalidation strategy
  - Hit/miss metrics endpoint
- Performance optimization report:
  - Before/after load testing results
  - Database query performance improvements
  - Response time improvements
- New features:
  - Link preview generation working
  - URL blacklist checking functional
  - Blacklist management API endpoints
- Updated frontend showing link previews in dashboard

#### **5. Evaluation Criteria**
- ✅ At least 2 marketplace plugins successfully integrated
- ✅ Measurable performance improvements (≥20% faster response times)
- ✅ Caching layer working correctly
- ✅ Link previews display properly
- ✅ URL blacklist prevents malicious links
- ✅ Performance documentation includes concrete metrics

#### **6. Assessment**
After completing your deliverables, run the assess command:
```bash
/assess module10
```

---

## **Module 11: Advanced MCP Tools & Custom AI Automation**

### **Exercise: Build Custom MCP Tool for Deployment Automation**

#### **1. Exercise Objective**
Create a custom MCP tool using FastMCP that automates deployment workflows and monitoring for your URL shortener.

> 📹 *Go through the [Udemy course] Module 11 videos before proceeding.*

#### **2. Scope of Work**
- Set up Python environment with `uv` package manager
- Build custom MCP tool with FastMCP that provides:
  - Deployment automation (to staging/production)
  - Health check monitoring
  - Log aggregation and analysis
  - Automated rollback capability
- Integrate custom MCP tool with Claude Code
- Create deployment pipeline:
  - Automated testing
  - Database migration execution
  - Zero-downtime deployment strategy
  - Post-deployment verification
- Add monitoring dashboard for system health

#### **3. Constraints & Expectations**
- MCP tool must be packaged and reusable
- Deployment must support environment-specific configurations
- Rollback must be automated and safe
- Health checks must cover all critical endpoints
- Tool must provide clear feedback to Claude Code

#### **4. Deliverables**
- `/mcp-tools/deployment-automation/` directory with:
  - FastMCP implementation code
  - `pyproject.toml` or `package.json`
  - Configuration for Claude Code integration
  - README with usage instructions
- Deployment pipeline configuration:
  - CI/CD workflow files
  - Environment configuration templates
  - Migration execution scripts
  - Rollback procedures
- Monitoring dashboard (simple web interface) showing:
  - System health status
  - Recent deployments
  - Error rates
  - Response times
- `url-shortener-code/documentation/deployment-guide.md` explaining:
  - How to use the custom MCP tool
  - Deployment workflow
  - Rollback procedures
  - Monitoring alerts
- `url-shortener-code/documentation/mcp-development-log.md` documenting:
  - Development process
  - Challenges encountered
  - How FastMCP was utilized
  - Testing approach

#### **5. Evaluation Criteria**
- ✅ Custom MCP tool successfully built with FastMCP
- ✅ Tool integrates with Claude Code
- ✅ Monitoring dashboard provides real-time insights
- ✅ Documentation enables others to use and extend the tool
- ✅ Complete system deployed and operational

#### **6. Assessment**
After completing your deliverables, run the assess command:
```bash
/assess module11
```

---

## **Final Project Deliverable: Complete URL Shortener Platform**

### **Comprehensive Submission Requirements**

At the end of the bootcamp, participants must submit a complete, production-ready URL shortener platform that includes:

#### **System Components**
1. **Backend API** with all endpoints functional
2. **Database** with proper schema and migrations
3. **Frontend Dashboard** with analytics visualization

#### **Success Metrics**
- System handles at least 100 URLs reliably
- Frontend is responsive and user-friendly
- API response times < 200ms (excluding external link previews)
- Test coverage ≥ 80%
- Zero critical security vulnerabilities
- Successfully deployed and accessible via public URL

---

## 📞 Support & Resources

### **Course Resources**
- **Main Course:** [Claude Code Masterclass on Udemy](https://www.udemy.com/course/claude-code-masterclass)
- **Prerequisite Course:** [SDLC with AI & GitHub Copilot](https://nagarro.udemy.com/course/software-development-life-cycle-sdlc-with-ai-github-copilot/)
- **Official Documentation:** [Claude Code Docs](https://docs.claude.com)

### **Getting Help**
- **Technical Issues:** [Your Support Channel]
- **Questions:** [Your Q&A Platform]
- **Community:** [Your Community Forum]

### **Quick Links**
- Course Q&A section on Udemy
- Claude Code official support
- Bootcamp instructor office hours (if applicable)

---

*This bootcamp is designed for internal organizational training. All exercises and assessments are aligned with industry best practices and Claude Code capabilities as of January 2025.*
