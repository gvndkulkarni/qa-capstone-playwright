# Test Plan & Strategy Document

---

| Field            | Details                                                              |
|------------------|----------------------------------------------------------------------|
| **Project**      | QA Capstone Project – Comparative Analysis of Market Leaders         |
| **Author**       | Govind Ghatnandrekar                                                 |
| **Role**         | Senior QA Test Engineer                                              |
| **Version**      | 1.0                                                                  |
| **Date**         | May 2026                                                             |
| **Reference SRS**| SRS_QA_Capstone_Project.md v1.0                                      |

---

## 1. Introduction

### 1.1 Purpose
This Test Plan defines the overall **testing strategy, scope, approach, resources, and schedule** for the QA Capstone Project. It covers comparative quality analysis of four market-leading platforms — **Swiggy, Zomato, Flipkart, and Amazon** — across Food Delivery and E-Commerce domains.

### 1.2 Intended Audience
- QA Test Engineers
- Project Reviewers / Mentors
- Stakeholders evaluating platform quality

---

## 2. Test Objectives

| # | Objective |
|---|-----------|
| 1 | Validate all core user flows — Authentication, Search, Cart, Checkout — across all 4 platforms |
| 2 | Identify functional defects and UX inconsistencies across platforms |
| 3 | Execute Smoke and Sanity suites with **100% coverage** |
| 4 | Automate the Search-to-Checkout flow with at least **70% script coverage** using Playwright |
| 5 | Produce a comparative analysis matrix highlighting strengths and gaps per platform |

---

## 3. Scope of Testing

### 3.1 In Scope

| Platform | Modules Under Test |
|----------|--------------------|
| Swiggy | Search & Discovery, Cart, Coupon, Order Tracking |
| Zomato | Search & Discovery, Cart, Coupon, Order Tracking |
| Flipkart | Product Discovery, Filters, Cart, Checkout, Return/Refund |
| Amazon | Product Discovery, Filters, Cart, Checkout, Return/Refund |

**Test Types Included:**
- ✅ Functional Testing
- ✅ UI / UX Consistency Testing
- ✅ Smoke Testing
- ✅ Sanity Testing
- ✅ Compatibility Testing
- ✅ Regression Testing (via Playwright Automation)
- ✅ Negative / Edge Case Testing

### 3.2 Out of Scope
- ❌ Backend API / Database performance tuning
- ❌ Third-party delivery partner / merchant apps
- ❌ Security / Penetration testing

---

## 4. Test Approach

### 4.1 Manual Testing
- Execute test cases covering all in-scope modules on live production environments.
- Use real user accounts (with mock/sandbox payment modes wherever available).
- Document actual results vs expected results for every test case.
- Log defects immediately upon discovery.

### 4.2 Automation Testing (Playwright)
- Automate the **Search-to-Checkout** critical path for all 4 platforms.
- Framework: **Playwright with TypeScript**
- Test execution via **GitHub Actions (CI/CD pipeline)**
- Reports generated using **Allure Reports**

### 4.3 Comparative Analysis
- After execution, compile a **feature comparison matrix** evaluating each platform on:
  - Checkout steps count
  - Payment options available
  - Search relevance
  - UI/UX experience
  - Bug count and severity

---

## 5. Test Types & Definitions

| Test Type | Description | Applicable Platforms |
|-----------|-------------|----------------------|
| **Smoke Test** | Quick validation that core features are working before deep testing | All 4 |
| **Sanity Test** | Narrow regression check after a specific fix or change | All 4 |
| **Functional Test** | Verify each feature works as per SRS requirements | All 4 |
| **UI/UX Test** | Validate design consistency, navigation, and usability heuristics | All 4 |
| **Compatibility Test** | Verify functionality across Chrome, Firefox, Safari | All 4 |
| **Negative Test** | Test system behavior with invalid inputs and edge cases | All 4 |
| **Regression Test** | Re-execute automated suite to catch any regressions | All 4 |

---

## 6. Test Environments

| Environment | Details |
|-------------|---------|
| **OS** | Windows 11 / macOS |
| **Browsers** | Chrome (latest), Firefox (latest), Safari (latest) |
| **Devices** | Desktop (primary), Mobile Web (secondary) |
| **Network** | Stable broadband (simulating normal user conditions) |
| **Test Accounts** | Dedicated test accounts on all 4 platforms |
| **Payment Mode** | Mock/Sandbox credentials; no real transactions |

---

## 7. Entry & Exit Criteria

### 7.1 Entry Criteria (When to START testing)
- ✅ SRS document is reviewed and approved
- ✅ Test cases are written and reviewed
- ✅ Test environment (browsers, accounts) is set up and accessible
- ✅ Playwright project is initialized and connected to GitHub

### 7.2 Exit Criteria (When to STOP testing)
- ✅ 100% of Smoke and Sanity test cases executed
- ✅ All Critical and High priority defects logged and reported
- ✅ Automation scripts cover at least 70% of Search-to-Checkout flow
- ✅ Comparative Analysis Dashboard is complete
- ✅ Final Defect Summary Report is submitted

---

## 8. Test Deliverables

| # | Deliverable | Status |
|---|-------------|--------|
| 1 | ✅ SRS Document | Done |
| 2 | ✅ Test Plan & Strategy Document | In Progress |
| 3 | 🔲 Manual Test Case Suite | Pending |
| 4 | 🔲 Playwright Automation Script Repository | Pending |
| 5 | 🔲 Defect Summary Report | Pending |
| 6 | 🔲 Comparative Analysis Dashboard | Pending |

---

## 9. Test Schedule (1-Week Plan)

| Day | Activity | Deliverable |
|-----|----------|-------------|
| Day 1 | SRS Review + Test Plan writing | SRS.md + Test Plan.md |
| Day 2 | Write Manual Test Cases — Food Delivery (Swiggy, Zomato) | Test Cases Part 1 |
| Day 3 | Write Manual Test Cases — E-Commerce (Flipkart, Amazon) | Test Cases Part 2 |
| Day 4 | Execute Manual Tests + Log Defects | Defect Report |
| Day 5 | Set up Playwright + Write automation scripts | Scripts on GitHub |
| Day 6 | Run automation + Generate Allure Reports | Allure Report |
| Day 7 | Build Comparative Matrix + Final Review | Analysis Dashboard |

---

## 10. Roles & Responsibilities

| Role | Name | Responsibility |
|------|------|----------------|
| Senior QA Test Engineer | Govind Ghatnandrekar | Test planning, execution, automation, reporting |

---

## 11. Risk & Mitigation

| # | Risk | Impact | Mitigation |
|---|------|--------|------------|
| R-01 | Bot detection blocks Playwright scripts | High | Add delays, throttle requests, use headed mode |
| R-02 | Live production UI changes during testing | Medium | Take screenshots at start of each session |
| R-03 | Real payments triggered accidentally | High | Use mock/sandbox payment modes only |
| R-04 | Test accounts locked due to repeated logins | Medium | Keep backup test accounts ready |
| R-05 | Insufficient time to automate all flows | Medium | Prioritize Search-to-Checkout; skip low-priority flows |

---

## 12. Defect Management

### 12.1 Defect Severity Levels

| Severity | Description | Example |
|----------|-------------|---------|
| **Critical** | Blocks core functionality; app unusable | Payment page crashes |
| **High** | Major feature broken but workaround exists | Coupon code not applying |
| **Medium** | Minor feature issue; partial functionality | Filter not resetting properly |
| **Low** | Cosmetic / UI issue | Misaligned button on desktop |

### 12.2 Defect Lifecycle
```
New → Assigned → In Fix → Retest → Closed
                              ↓
                           Reopened (if still failing)
```

### 12.3 Defect Logging Tool
- **Jira / Zephyr** for defect tracking and test management

---

## 13. Test Metrics & Success Criteria

| Metric | Target |
|--------|--------|
| Smoke & Sanity Suite Execution | **100%** |
| Automation Coverage (Search-to-Checkout) | **≥ 70%** |
| Critical/High Defects Reported | **100%** identified and documented |
| Test Case Pass Rate | **≥ 85%** |
| Comparative Analysis Matrix | Delivered for all 4 platforms |

---

## 14. Tools & Technologies

| Category | Tool |
|----------|------|
| Automation | Playwright (TypeScript) |
| Version Control | GitHub |
| CI/CD | GitHub Actions |
| Test Management | Jira / Zephyr |
| Reporting | Allure Reports |
| Defect Tracking | Jira |
| Documentation | Markdown (.md) |

---

## 15. Approvals

| Role | Name | Signature | Date |
|------|------|-----------|------|
| QA Test Engineer | Govind Ghatnandrekar | | May 2026 |
| Reviewer / Mentor | | | |

---

## 16. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | May 2026 | Govind Ghatnandrekar | Initial Draft |

---

*End of Document*