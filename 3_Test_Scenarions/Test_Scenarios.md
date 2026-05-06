# Test Scenarios Document

---

| Field             | Details                                                              |
|-------------------|----------------------------------------------------------------------|
| **Project**       | QA Capstone Project – Comparative Analysis of Market Leaders         |
| **Author**        | Govind Ghatnandrekar                                                 |
| **Role**          | Senior QA Test Engineer                                              |
| **Version**       | 1.0                                                                  |
| **Date**          | May 2026                                                             |
| **Reference**     | SRS_QA_Capstone_Project.md v1.0                                      |

---

## 📌 How to Read This Document

| Column | Description |
|--------|-------------|
| **TS-ID** | Unique Test Scenario ID |
| **Module** | Feature/module being tested |
| **Scenario** | What is being tested (high-level) |
| **Type** | Positive / Negative / Edge Case |
| **Priority** | Critical / High / Medium / Low |
| **Platform** | Which platform(s) the scenario applies to |

---

## 🍔 SECTION 1 — FOOD DELIVERY (Swiggy & Zomato)

### 1.1 Location Services

| TS-ID | Module | Test Scenario | Type | Priority | Platform |
|-------|--------|---------------|------|----------|----------|
| TS_FD_001 | Location | Verify user can allow auto-detection of current location | Positive | Critical | Swiggy, Zomato |
| TS_FD_002 | Location | Verify user can manually enter a delivery address | Positive | Critical | Swiggy, Zomato |
| TS_FD_003 | Location | Verify system shows error when location permission is denied | Negative | High | Swiggy, Zomato |
| TS_FD_004 | Location | Verify system handles invalid/non-serviceable address gracefully | Negative | High | Swiggy, Zomato |
| TS_FD_005 | Location | Verify saved addresses are displayed correctly on revisit | Positive | Medium | Swiggy, Zomato |

---

### 1.2 Search & Discovery

| TS-ID | Module | Test Scenario | Type | Priority | Platform |
|-------|--------|---------------|------|----------|----------|
| TS_FD_006 | Search | Verify search returns relevant restaurants for a valid keyword | Positive | Critical | Swiggy, Zomato |
| TS_FD_007 | Search | Verify search with an invalid/gibberish keyword shows "No Results" | Negative | High | Swiggy, Zomato |
| TS_FD_008 | Search | Verify cuisine-based filtering works correctly | Positive | High | Swiggy, Zomato |
| TS_FD_009 | Search | Verify rating-based sorting (High to Low) works correctly | Positive | High | Swiggy, Zomato |
| TS_FD_010 | Search | Verify search results update when location is changed | Positive | High | Swiggy, Zomato |
| TS_FD_011 | Search | Verify restaurant cards display name, rating, and delivery time | Positive | Medium | Swiggy, Zomato |
| TS_FD_012 | Search | Verify search works with partial keyword input | Edge Case | Medium | Swiggy, Zomato |

---

### 1.3 Cart Management

| TS-ID | Module | Test Scenario | Type | Priority | Platform |
|-------|--------|---------------|------|----------|----------|
| TS_FD_013 | Cart | Verify user can add a food item to the cart | Positive | Critical | Swiggy, Zomato |
| TS_FD_014 | Cart | Verify user can increase/decrease item quantity in cart | Positive | Critical | Swiggy, Zomato |
| TS_FD_015 | Cart | Verify user can remove an item from the cart | Positive | High | Swiggy, Zomato |
| TS_FD_016 | Cart | Verify cart total updates correctly when items are added/removed | Positive | Critical | Swiggy, Zomato |
| TS_FD_017 | Cart | Verify out-of-stock items cannot be added to cart | Negative | Critical | Swiggy, Zomato |
| TS_FD_018 | Cart | Verify cart persists after user logs out and logs back in | Edge Case | Medium | Swiggy, Zomato |
| TS_FD_019 | Cart | Verify adding items from two different restaurants shows conflict warning | Edge Case | High | Swiggy, Zomato |

---

### 1.4 Coupon & Offers

| TS-ID | Module | Test Scenario | Type | Priority | Platform |
|-------|--------|---------------|------|----------|----------|
| TS_FD_020 | Coupon | Verify a valid coupon code is applied successfully | Positive | High | Swiggy, Zomato |
| TS_FD_021 | Coupon | Verify an expired coupon code shows appropriate error | Negative | High | Swiggy, Zomato |
| TS_FD_022 | Coupon | Verify an invalid coupon code shows appropriate error | Negative | High | Swiggy, Zomato |
| TS_FD_023 | Coupon | Verify discount amount is correctly reflected in order total | Positive | Critical | Swiggy, Zomato |

---

### 1.5 Checkout & Payment

| TS-ID | Module | Test Scenario | Type | Priority | Platform |
|-------|--------|---------------|------|----------|----------|
| TS_FD_024 | Checkout | Verify user can proceed to checkout from cart | Positive | Critical | Swiggy, Zomato |
| TS_FD_025 | Checkout | Verify user can select a saved delivery address at checkout | Positive | Critical | Swiggy, Zomato |
| TS_FD_026 | Checkout | Verify user can add a new delivery address at checkout | Positive | High | Swiggy, Zomato |
| TS_FD_027 | Payment | Verify payment via UPI is successful | Positive | Critical | Swiggy, Zomato |
| TS_FD_028 | Payment | Verify payment via Credit/Debit Card is successful | Positive | Critical | Swiggy, Zomato |
| TS_FD_029 | Payment | Verify payment via Wallet (Paytm/PhonePe) is successful | Positive | High | Swiggy, Zomato |
| TS_FD_030 | Payment | Verify system handles payment failure gracefully with retry option | Negative | Critical | Swiggy, Zomato |
| TS_FD_031 | Payment | Verify order confirmation screen is shown after successful payment | Positive | Critical | Swiggy, Zomato |
| TS_FD_032 | Checkout | Verify checkout flow does not exceed 4 steps (NFR) | Positive | High | Swiggy, Zomato |

---

### 1.6 Order Tracking

| TS-ID | Module | Test Scenario | Type | Priority | Platform |
|-------|--------|---------------|------|----------|----------|
| TS_FD_033 | Tracking | Verify real-time order tracking is displayed after order placement | Positive | Critical | Swiggy, Zomato |
| TS_FD_034 | Tracking | Verify order status updates (Preparing → Out for Delivery → Delivered) | Positive | High | Swiggy, Zomato |
| TS_FD_035 | Tracking | Verify user can view order history in their account | Positive | Medium | Swiggy, Zomato |

---

## 🛒 SECTION 2 — E-COMMERCE (Flipkart & Amazon)

### 2.1 Authentication

| TS-ID | Module | Test Scenario | Type | Priority | Platform |
|-------|--------|---------------|------|----------|----------|
| TS_EC_001 | Auth | Verify user can log in with valid credentials | Positive | Critical | Flipkart, Amazon |
| TS_EC_002 | Auth | Verify login fails with invalid password and shows error | Negative | Critical | Flipkart, Amazon |
| TS_EC_003 | Auth | Verify user can log out successfully | Positive | High | Flipkart, Amazon |
| TS_EC_004 | Auth | Verify "Forgot Password" flow works correctly | Positive | High | Flipkart, Amazon |
| TS_EC_005 | Auth | Verify session expires after inactivity (if applicable) | Edge Case | Medium | Flipkart, Amazon |

---

### 2.2 Product Discovery

| TS-ID | Module | Test Scenario | Type | Priority | Platform |
|-------|--------|---------------|------|----------|----------|
| TS_EC_006 | Search | Verify search returns relevant products for a valid keyword | Positive | Critical | Flipkart, Amazon |
| TS_EC_007 | Search | Verify search with invalid keyword shows "No Results" message | Negative | High | Flipkart, Amazon |
| TS_EC_008 | Filter | Verify price range filter displays products within selected range | Positive | High | Flipkart, Amazon |
| TS_EC_009 | Filter | Verify brand filter correctly filters products by selected brand | Positive | High | Flipkart, Amazon |
| TS_EC_010 | Filter | Verify rating filter (4★ & above) works correctly | Positive | Medium | Flipkart, Amazon |
| TS_EC_011 | Filter | Verify multiple filters can be applied simultaneously | Positive | High | Flipkart, Amazon |
| TS_EC_012 | Filter | Verify filters can be cleared/reset successfully | Positive | Medium | Flipkart, Amazon |
| TS_EC_013 | Sort | Verify sorting by Price: Low to High works correctly | Positive | High | Flipkart, Amazon |
| TS_EC_014 | Sort | Verify sorting by Price: High to Low works correctly | Positive | High | Flipkart, Amazon |
| TS_EC_015 | Sort | Verify sorting by Customer Ratings works correctly | Positive | Medium | Flipkart, Amazon |
| TS_EC_016 | Product | Verify product detail page displays name, price, images, description | Positive | Critical | Flipkart, Amazon |
| TS_EC_017 | Product | Verify out-of-stock label is shown for unavailable products | Negative | Critical | Flipkart, Amazon |

---

### 2.3 Cart Management

| TS-ID | Module | Test Scenario | Type | Priority | Platform |
|-------|--------|---------------|------|----------|----------|
| TS_EC_018 | Cart | Verify user can add a product to the cart | Positive | Critical | Flipkart, Amazon |
| TS_EC_019 | Cart | Verify user can update product quantity in cart | Positive | Critical | Flipkart, Amazon |
| TS_EC_020 | Cart | Verify user can remove a product from cart | Positive | High | Flipkart, Amazon |
| TS_EC_021 | Cart | Verify cart total is calculated correctly including taxes | Positive | Critical | Flipkart, Amazon |
| TS_EC_022 | Cart | Verify out-of-stock item cannot be added to cart | Negative | Critical | Flipkart, Amazon |
| TS_EC_023 | Cart | Verify cart is saved when user navigates away and returns | Edge Case | Medium | Flipkart, Amazon |
| TS_EC_024 | Cart | Verify "Save for Later" moves item out of active cart | Positive | Medium | Flipkart, Amazon |

---

### 2.4 Checkout & Payment

| TS-ID | Module | Test Scenario | Type | Priority | Platform |
|-------|--------|---------------|------|----------|----------|
| TS_EC_025 | Checkout | Verify user can proceed to checkout from cart | Positive | Critical | Flipkart, Amazon |
| TS_EC_026 | Checkout | Verify user can select a saved address at checkout | Positive | Critical | Flipkart, Amazon |
| TS_EC_027 | Checkout | Verify user can add a new shipping address at checkout | Positive | High | Flipkart, Amazon |
| TS_EC_028 | Payment | Verify payment via UPI is processed successfully | Positive | Critical | Flipkart, Amazon |
| TS_EC_029 | Payment | Verify payment via Credit/Debit Card is processed successfully | Positive | Critical | Flipkart, Amazon |
| TS_EC_030 | Payment | Verify payment via Net Banking is processed successfully | Positive | High | Flipkart, Amazon |
| TS_EC_031 | Payment | Verify Cash on Delivery option is available where applicable | Positive | High | Flipkart, Amazon |
| TS_EC_032 | Payment | Verify system handles payment failure with retry option | Negative | Critical | Flipkart, Amazon |
| TS_EC_033 | Payment | Verify order confirmation page is shown after successful payment | Positive | Critical | Flipkart, Amazon |
| TS_EC_034 | Checkout | Verify checkout flow does not exceed 4 steps (NFR) | Positive | High | Flipkart, Amazon |

---

### 2.5 Order Tracking

| TS-ID | Module | Test Scenario | Type | Priority | Platform |
|-------|--------|---------------|------|----------|----------|
| TS_EC_035 | Tracking | Verify order appears in "My Orders" after successful placement | Positive | Critical | Flipkart, Amazon |
| TS_EC_036 | Tracking | Verify order status is updated correctly (Processing → Shipped → Delivered) | Positive | High | Flipkart, Amazon |
| TS_EC_037 | Tracking | Verify tracking link/number is available for shipped orders | Positive | High | Flipkart, Amazon |

---

### 2.6 Return & Refund

| TS-ID | Module | Test Scenario | Type | Priority | Platform |
|-------|--------|---------------|------|----------|----------|
| TS_EC_038 | Return | Verify user can initiate a return request for a delivered order | Positive | Critical | Flipkart, Amazon |
| TS_EC_039 | Return | Verify return request is blocked for non-returnable items | Negative | High | Flipkart, Amazon |
| TS_EC_040 | Return | Verify return window expiry shows appropriate message | Edge Case | High | Flipkart, Amazon |
| TS_EC_041 | Refund | Verify refund status is visible in order history | Positive | High | Flipkart, Amazon |
| TS_EC_042 | Refund | Verify refund amount matches original payment amount | Positive | Critical | Flipkart, Amazon |

---

## 🌐 SECTION 3 — CROSS-PLATFORM & COMPATIBILITY

| TS-ID | Module | Test Scenario | Type | Priority | Platform |
|-------|--------|---------------|------|----------|----------|
| TS_CP_001 | Compatibility | Verify all core flows work on Chrome (latest) | Positive | Critical | All 4 |
| TS_CP_002 | Compatibility | Verify all core flows work on Firefox (latest) | Positive | Critical | All 4 |
| TS_CP_003 | Compatibility | Verify all core flows work on Safari (latest) | Positive | Critical | All 4 |
| TS_CP_004 | Performance | Verify Home page loads within 3 seconds (NFR) | Positive | High | All 4 |
| TS_CP_005 | Performance | Verify Search results page loads within 3 seconds (NFR) | Positive | High | All 4 |
| TS_CP_006 | UI/UX | Verify UI layout is consistent and not broken on desktop | Positive | High | All 4 |
| TS_CP_007 | UI/UX | Verify UI layout is consistent and not broken on mobile web | Positive | High | All 4 |

---

## 📊 Test Scenario Summary

| Platform | Total Scenarios | Critical | High | Medium | Low |
|----------|----------------|----------|------|--------|-----|
| Swiggy | 35 | 14 | 13 | 8 | 0 |
| Zomato | 35 | 14 | 13 | 8 | 0 |
| Flipkart | 42 | 16 | 17 | 9 | 0 |
| Amazon | 42 | 16 | 17 | 9 | 0 |
| Cross-Platform | 7 | 3 | 4 | 0 | 0 |
| **Total** | **49 Unique** | **19** | **21** | **9** | **0** |

---

## 16. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | May 2026 | Govind Ghatnandrekar | Initial Draft |

---

*End of Document*
