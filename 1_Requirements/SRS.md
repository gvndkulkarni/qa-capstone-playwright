# Software Requirement Specification (SRS)

---

| Field        | Details                                                              |
|--------------|----------------------------------------------------------------------|
| **Project**  | QA Capstone Project – Comparative Analysis of Market Leaders         |
| **Author**   | Govind Ghatnandrekar                                                 |
| **Role**     | Senior QA Test Engineer                                              |
| **Version**  | 1.0                                                                  |
| **Date**     | May 2026                                                             |

---

## 1. Project Title

**Cross-Domain Comparative Quality Assurance: A Comparative Study of Market Leaders in Food Delivery and E-Commerce**

---

## 2. Project Overview

This project focuses on executing a rigorous, comparative QA analysis across four industry-leading platforms:

- 🍔 **Food Delivery:** Swiggy and Zomato
- 🛒 **E-Commerce:** Flipkart and Amazon

The goal is to evaluate the **robustness**, **user experience**, and **functional parity** of these platforms — to identify performance gaps and ensure a seamless end-to-end user journey.

---

## 3. Objectives

### 3.1 Business Perspective

- Assess market competitiveness through **feature-by-feature benchmarking**.
- Identify critical friction points in the **checkout and payment funnels** that lead to cart abandonment.

### 3.2 QA Perspective

- Validate the reliability of **core workflows** under standard and edge-case scenarios.
- Implement a scalable **automation framework using Playwright** to increase regression efficiency.
- Perform **cross-platform consistency checks (UI/UX)** between competitors.

---

## 4. Scope

### 4.1 In Scope

| Area | Details |
|------|---------|
| Core User Flows | Authentication, Search, Cart Management, Checkout |
| Functional Testing | Order Tracking, Return/Refund modules |
| Automation | Smoke and Sanity test suites |
| Compatibility | Chrome, Firefox, and Safari |

### 4.2 Out of Scope

- ❌ Backend API / Database performance tuning
- ❌ Testing of third-party delivery partner / merchant apps
- ❌ Security / Penetration testing

---

## 5. Application Modules

### 5.1 Food Delivery — Swiggy & Zomato

| Module | Description |
|--------|-------------|
| Search & Discovery | Location-based restaurant filtering, cuisines, and ratings |
| Order Management | Cart additions, coupon application, and real-time tracking |

### 5.2 E-Commerce — Flipkart & Amazon

| Module | Description |
|--------|-------------|
| Product Discovery | Categories, advanced filters, and product comparisons |
| Post-Purchase | Order history, tracking, and cancellation/return requests |

---

## 6. Detailed User Flows

### 6.1 Search to Checkout Flow

```
Select Location
      ↓
Search Item / Restaurant
      ↓
Add to Cart
      ↓
Select Address
      ↓
Payment Selection
      ↓
Order Confirmation ✅
```

### 6.2 Account Management Flow

```
Profile Update → Saved Addresses → View Order History
```

### 6.3 Support Flow

```
Order Issue → Help Center → Chat / Call Support Initiation
```

---

## 7. Functional Requirements

| ID   | Requirement | Description |
|------|-------------|-------------|
| FR-01 | Location Services | System must accurately fetch the current user location or allow manual entry |
| FR-02 | Search Accuracy | Search results must display relevant products/restaurants based on keywords |
| FR-03 | Inventory Validation | Out-of-stock items must be clearly labeled and prevented from being added to cart |
| FR-04 | Payment Gateway | Must support UPI, Cards, Wallets and handle transaction failures gracefully |

---

## 8. Non-Functional Requirements

| ID    | Category | Requirement |
|-------|----------|-------------|
| NFR-01 | Performance | Critical pages (Home, Search) must load within **3 seconds** under normal network conditions |
| NFR-02 | Usability | Navigation must follow standard mobile-web heuristics; checkout flow must not exceed **4 steps** |
| NFR-03 | Compatibility | Application must be fully functional on the latest stable versions of **Chrome, Edge, and Safari** |

---

## 9. Assumptions

- ✅ Stable internet connectivity is available for testing real-world cloud-hosted environments.
- ✅ Test accounts with mock payment credentials / sandboxes are accessible where applicable.
- ✅ Production environments remain stable and do not undergo major UI revamps during the sprint.

---

## 10. Constraints

| Constraint | Description |
|------------|-------------|
| Rate Limiting | Automation scripts must be throttled to avoid triggering "Bot Detection" or IP blocking |
| Live Data | Testing is conducted on live production sites; real transactions may have financial implications if not handled via mock/test modes |

---

## 11. Tools & Technologies

| Category | Tool / Technology |
|----------|-------------------|
| Automation Framework | Playwright (TypeScript / JavaScript) |
| Version Control | GitHub |
| Test Management | Jira / Zephyr |
| CI/CD | GitHub Actions |
| Reporting | Allure Reports |

---

## 12. Deliverables

| # | Deliverable |
|---|-------------|
| 1 | 📄 Test Plan & Strategy Document |
| 2 | 🧪 Comprehensive Test Case Suite (Manual) |
| 3 | 🤖 Playwright Automation Script Repository |
| 4 | 📊 Defect Summary Report & Comparative Analysis Dashboard |

---

## 13. Success Criteria

| Criteria | Target |
|----------|--------|
| Smoke & Sanity Suite Execution | **100%** completion |
| Automation Coverage (Search-to-Checkout) | At least **70%** |
| Critical & High Priority Defects | All identified, documented, and reported |
| Comparative Matrix | Clear UX/Functional strengths of each platform delivered |

---

## 14. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | May 2026 | Govind Ghatnandrekar | Initial Draft |

---

*End of Document*