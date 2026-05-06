# Playwright Automation Test Cases
## Smoke & Sanity Suite — All 4 Platforms

---

| Field             | Details                                                              |
|-------------------|----------------------------------------------------------------------|
| **Project**       | QA Capstone Project – Comparative Analysis of Market Leaders         |
| **Author**        | Govind Ghatnandrekar                                                 |
| **Role**          | Senior QA Test Engineer                                              |
| **Version**       | 1.0                                                                  |
| **Date**          | May 2026                                                             |
| **Framework**     | Playwright (TypeScript)                                              |
| **Reference**     | Test_Cases_QA_Capstone_Project.md v1.0                               |

---

## 📌 How to Read This Document

| Column | Description |
|--------|-------------|
| **PW-ID** | Unique Playwright Test Case ID |
| **Suite** | Smoke / Sanity |
| **Module** | Feature being tested |
| **Title** | Short description of the test |
| **Pre-condition** | Setup required before test execution |
| **Test Steps** | Step-by-step actions Playwright will perform |
| **Expected Result** | What the automation should assert |
| **Priority** | Critical / High / Medium |
| **Platform** | Which platform |

---

> 💡 **Smoke Tests** = Quick check that core features are working before deep testing
> 💡 **Sanity Tests** = Narrow focused check on a specific feature/fix

---

---

# 🍔 FOOD DELIVERY — Swiggy

---

## 🔥 SMOKE TEST CASES — Swiggy

---

### PW_SW_SMK_001
| Field | Details |
|-------|---------|
| **PW-ID** | PW_SW_SMK_001 |
| **Suite** | Smoke |
| **Module** | Homepage |
| **Title** | Verify Swiggy homepage loads successfully |
| **Pre-condition** | Stable internet connection; Chrome browser available |
| **Test Steps** | 1. Launch browser and navigate to `https://www.swiggy.com` <br> 2. Wait for the page to fully load <br> 3. Assert the page title contains "Swiggy" <br> 4. Assert the location input field is visible |
| **Expected Result** | Homepage loads within 3 seconds; Swiggy logo and location field are visible |
| **Priority** | Critical |
| **Platform** | Swiggy |

---

### PW_SW_SMK_002
| Field | Details |
|-------|---------|
| **PW-ID** | PW_SW_SMK_002 |
| **Suite** | Smoke |
| **Module** | Location |
| **Title** | Verify manual location entry works on Swiggy |
| **Pre-condition** | Swiggy homepage is loaded |
| **Test Steps** | 1. Click on the location input field <br> 2. Type "Pune, Maharashtra" <br> 3. Wait for dropdown suggestions <br> 4. Click on the first suggestion <br> 5. Assert the location is updated |
| **Expected Result** | Location is set to Pune; restaurant listing page loads |
| **Priority** | Critical |
| **Platform** | Swiggy |

---

### PW_SW_SMK_003
| Field | Details |
|-------|---------|
| **PW-ID** | PW_SW_SMK_003 |
| **Suite** | Smoke |
| **Module** | Search |
| **Title** | Verify search functionality works on Swiggy |
| **Pre-condition** | Location is set; homepage is loaded |
| **Test Steps** | 1. Click on the search bar <br> 2. Type "Pizza" <br> 3. Press Enter <br> 4. Assert search results page loads <br> 5. Assert at least one result is visible |
| **Expected Result** | Search results page displays relevant restaurants/items for "Pizza" |
| **Priority** | Critical |
| **Platform** | Swiggy |

---

### PW_SW_SMK_004
| Field | Details |
|-------|---------|
| **PW-ID** | PW_SW_SMK_004 |
| **Suite** | Smoke |
| **Module** | Cart |
| **Title** | Verify item can be added to cart on Swiggy |
| **Pre-condition** | User is logged in; location is set; restaurant page is open |
| **Test Steps** | 1. Navigate to a restaurant page <br> 2. Click "Add" on a food item <br> 3. Assert cart icon count increases to 1 <br> 4. Assert item name appears in cart preview |
| **Expected Result** | Item is added to cart; cart count = 1 |
| **Priority** | Critical |
| **Platform** | Swiggy |

---

### PW_SW_SMK_005
| Field | Details |
|-------|---------|
| **PW-ID** | PW_SW_SMK_005 |
| **Suite** | Smoke |
| **Module** | Checkout |
| **Title** | Verify checkout page loads from cart on Swiggy |
| **Pre-condition** | At least one item is in the cart; user is logged in |
| **Test Steps** | 1. Open cart <br> 2. Click "Proceed to Checkout" <br> 3. Assert address selection page loads <br> 4. Assert delivery address options are visible |
| **Expected Result** | Checkout page loads; address section is displayed |
| **Priority** | Critical |
| **Platform** | Swiggy |

---

## 🧪 SANITY TEST CASES — Swiggy

---

### PW_SW_SAN_001
| Field | Details |
|-------|---------|
| **PW-ID** | PW_SW_SAN_001 |
| **Suite** | Sanity |
| **Module** | Search |
| **Title** | Verify invalid search shows No Results on Swiggy |
| **Pre-condition** | Location is set; homepage is loaded |
| **Test Steps** | 1. Click on search bar <br> 2. Type "xyzabc123" <br> 3. Press Enter <br> 4. Assert "No results found" message is visible <br> 5. Assert no restaurant cards are displayed |
| **Expected Result** | "No results found" message is shown; page does not crash |
| **Priority** | High |
| **Platform** | Swiggy |

---

### PW_SW_SAN_002
| Field | Details |
|-------|---------|
| **PW-ID** | PW_SW_SAN_002 |
| **Suite** | Sanity |
| **Module** | Cart |
| **Title** | Verify cart quantity update works on Swiggy |
| **Pre-condition** | One item is already in the cart |
| **Test Steps** | 1. Open cart <br> 2. Click "+" button to increase quantity to 2 <br> 3. Assert quantity shows 2 <br> 4. Assert cart total is updated correctly <br> 5. Click "-" to decrease to 1 <br> 6. Assert quantity shows 1 |
| **Expected Result** | Quantity and total update correctly on both increase and decrease |
| **Priority** | Critical |
| **Platform** | Swiggy |

---

### PW_SW_SAN_003
| Field | Details |
|-------|---------|
| **PW-ID** | PW_SW_SAN_003 |
| **Suite** | Sanity |
| **Module** | Coupon |
| **Title** | Verify invalid coupon shows error on Swiggy |
| **Pre-condition** | Items are in cart; checkout page is open |
| **Test Steps** | 1. Open cart <br> 2. Click "Apply Coupon" <br> 3. Enter "INVALIDCODE123" <br> 4. Click Apply <br> 5. Assert error message is visible <br> 6. Assert cart total is unchanged |
| **Expected Result** | Error message shown; no discount applied to cart total |
| **Priority** | High |
| **Platform** | Swiggy |

---

### PW_SW_SAN_004
| Field | Details |
|-------|---------|
| **PW-ID** | PW_SW_SAN_004 |
| **Suite** | Sanity |
| **Module** | Location |
| **Title** | Verify non-serviceable address shows correct message on Swiggy |
| **Pre-condition** | Swiggy homepage is loaded |
| **Test Steps** | 1. Click on location field <br> 2. Enter a remote/rural address <br> 3. Select the address from dropdown <br> 4. Assert error/info message is displayed |
| **Expected Result** | "We don't deliver here" or similar message is shown gracefully |
| **Priority** | High |
| **Platform** | Swiggy |

---

---

# 🍔 FOOD DELIVERY — Zomato

---

## 🔥 SMOKE TEST CASES — Zomato

---

### PW_ZO_SMK_001
| Field | Details |
|-------|---------|
| **PW-ID** | PW_ZO_SMK_001 |
| **Suite** | Smoke |
| **Module** | Homepage |
| **Title** | Verify Zomato homepage loads successfully |
| **Pre-condition** | Stable internet connection; browser available |
| **Test Steps** | 1. Navigate to `https://www.zomato.com` <br> 2. Wait for full page load <br> 3. Assert page title contains "Zomato" <br> 4. Assert location field is visible |
| **Expected Result** | Homepage loads within 3 seconds; Zomato branding and location field visible |
| **Priority** | Critical |
| **Platform** | Zomato |

---

### PW_ZO_SMK_002
| Field | Details |
|-------|---------|
| **PW-ID** | PW_ZO_SMK_002 |
| **Suite** | Smoke |
| **Module** | Location |
| **Title** | Verify manual location entry works on Zomato |
| **Pre-condition** | Zomato homepage is loaded |
| **Test Steps** | 1. Click on the location input field <br> 2. Type "Pune" <br> 3. Wait for dropdown suggestions <br> 4. Click on "Pune, Maharashtra" from suggestions <br> 5. Assert location is updated |
| **Expected Result** | Location is set; restaurant listing page loads for Pune |
| **Priority** | Critical |
| **Platform** | Zomato |

---

### PW_ZO_SMK_003
| Field | Details |
|-------|---------|
| **PW-ID** | PW_ZO_SMK_003 |
| **Suite** | Smoke |
| **Module** | Search |
| **Title** | Verify search functionality works on Zomato |
| **Pre-condition** | Location is set |
| **Test Steps** | 1. Click on the search bar <br> 2. Type "Biryani" <br> 3. Press Enter <br> 4. Assert results page loads <br> 5. Assert at least one restaurant card is visible |
| **Expected Result** | Search results show relevant restaurants for "Biryani" |
| **Priority** | Critical |
| **Platform** | Zomato |

---

### PW_ZO_SMK_004
| Field | Details |
|-------|---------|
| **PW-ID** | PW_ZO_SMK_004 |
| **Suite** | Smoke |
| **Module** | Cart |
| **Title** | Verify item can be added to cart on Zomato |
| **Pre-condition** | User is logged in; location is set; restaurant menu is open |
| **Test Steps** | 1. Open a restaurant page <br> 2. Click "Add" on any food item <br> 3. Assert cart badge count = 1 <br> 4. Assert item is visible in cart panel |
| **Expected Result** | Item added to cart; cart count increases correctly |
| **Priority** | Critical |
| **Platform** | Zomato |

---

### PW_ZO_SMK_005
| Field | Details |
|-------|---------|
| **PW-ID** | PW_ZO_SMK_005 |
| **Suite** | Smoke |
| **Module** | Checkout |
| **Title** | Verify checkout page loads from cart on Zomato |
| **Pre-condition** | At least one item in cart; user is logged in |
| **Test Steps** | 1. Open cart <br> 2. Click "Proceed to Pay" <br> 3. Assert address page loads <br> 4. Assert saved/new address options are visible |
| **Expected Result** | Checkout/address page loads successfully |
| **Priority** | Critical |
| **Platform** | Zomato |

---

## 🧪 SANITY TEST CASES — Zomato

---

### PW_ZO_SAN_001
| Field | Details |
|-------|---------|
| **PW-ID** | PW_ZO_SAN_001 |
| **Suite** | Sanity |
| **Module** | Search |
| **Title** | Verify cuisine filter works correctly on Zomato |
| **Pre-condition** | Location is set; homepage is loaded |
| **Test Steps** | 1. Navigate to restaurant listing page <br> 2. Click on "Chinese" cuisine filter <br> 3. Assert results update <br> 4. Assert all visible restaurants show Chinese cuisine tag |
| **Expected Result** | Only Chinese cuisine restaurants are displayed |
| **Priority** | High |
| **Platform** | Zomato |

---

### PW_ZO_SAN_002
| Field | Details |
|-------|---------|
| **PW-ID** | PW_ZO_SAN_002 |
| **Suite** | Sanity |
| **Module** | Cart |
| **Title** | Verify conflict warning when adding items from two restaurants on Zomato |
| **Pre-condition** | Item from Restaurant A is already in cart |
| **Test Steps** | 1. Add item from Restaurant A to cart <br> 2. Navigate to Restaurant B <br> 3. Click "Add" on an item from Restaurant B <br> 4. Assert conflict warning dialog appears |
| **Expected Result** | Warning dialog shown: "Clear cart and add new item?" |
| **Priority** | High |
| **Platform** | Zomato |

---

### PW_ZO_SAN_003
| Field | Details |
|-------|---------|
| **PW-ID** | PW_ZO_SAN_003 |
| **Suite** | Sanity |
| **Module** | Search |
| **Title** | Verify rating sort High to Low works on Zomato |
| **Pre-condition** | Search results are displayed |
| **Test Steps** | 1. Search for "Burger" <br> 2. Click Sort option <br> 3. Select "Rating: High to Low" <br> 4. Assert first result has higher rating than last result |
| **Expected Result** | Restaurants sorted in descending order of rating |
| **Priority** | High |
| **Platform** | Zomato |

---

---

# 🛒 E-COMMERCE — Flipkart

---

## 🔥 SMOKE TEST CASES — Flipkart

---

### PW_FK_SMK_001
| Field | Details |
|-------|---------|
| **PW-ID** | PW_FK_SMK_001 |
| **Suite** | Smoke |
| **Module** | Homepage |
| **Title** | Verify Flipkart homepage loads successfully |
| **Pre-condition** | Stable internet; browser available |
| **Test Steps** | 1. Navigate to `https://www.flipkart.com` <br> 2. Wait for full page load <br> 3. Assert page title contains "Flipkart" <br> 4. Assert search bar is visible |
| **Expected Result** | Homepage loads within 3 seconds; Flipkart logo and search bar visible |
| **Priority** | Critical |
| **Platform** | Flipkart |

---

### PW_FK_SMK_002
| Field | Details |
|-------|---------|
| **PW-ID** | PW_FK_SMK_002 |
| **Suite** | Smoke |
| **Module** | Authentication |
| **Title** | Verify login page loads on Flipkart |
| **Pre-condition** | Homepage is loaded |
| **Test Steps** | 1. Click "Login" button on homepage <br> 2. Assert login modal/page loads <br> 3. Assert email/mobile input field is visible <br> 4. Assert password field is visible |
| **Expected Result** | Login page/modal loads; input fields are visible and interactable |
| **Priority** | Critical |
| **Platform** | Flipkart |

---

### PW_FK_SMK_003
| Field | Details |
|-------|---------|
| **PW-ID** | PW_FK_SMK_003 |
| **Suite** | Smoke |
| **Module** | Search |
| **Title** | Verify search functionality works on Flipkart |
| **Pre-condition** | Homepage is loaded |
| **Test Steps** | 1. Click on search bar <br> 2. Type "Laptop" <br> 3. Press Enter <br> 4. Assert search results page loads <br> 5. Assert at least one product card is visible |
| **Expected Result** | Search results display relevant laptop products |
| **Priority** | Critical |
| **Platform** | Flipkart |

---

### PW_FK_SMK_004
| Field | Details |
|-------|---------|
| **PW-ID** | PW_FK_SMK_004 |
| **Suite** | Smoke |
| **Module** | Cart |
| **Title** | Verify product can be added to cart on Flipkart |
| **Pre-condition** | User is logged in; product page is open |
| **Test Steps** | 1. Search for "Headphones" <br> 2. Click on first product <br> 3. Click "Add to Cart" button <br> 4. Assert success message is shown <br> 5. Assert cart count increases |
| **Expected Result** | Product added to cart; cart icon count = 1 |
| **Priority** | Critical |
| **Platform** | Flipkart |

---

### PW_FK_SMK_005
| Field | Details |
|-------|---------|
| **PW-ID** | PW_FK_SMK_005 |
| **Suite** | Smoke |
| **Module** | Checkout |
| **Title** | Verify checkout page loads from cart on Flipkart |
| **Pre-condition** | Item is in cart; user is logged in |
| **Test Steps** | 1. Open cart page <br> 2. Click "Place Order" / "Proceed to Checkout" <br> 3. Assert address selection page loads <br> 4. Assert address form or saved addresses are visible |
| **Expected Result** | Checkout page loads with address selection options |
| **Priority** | Critical |
| **Platform** | Flipkart |

---

## 🧪 SANITY TEST CASES — Flipkart

---

### PW_FK_SAN_001
| Field | Details |
|-------|---------|
| **PW-ID** | PW_FK_SAN_001 |
| **Suite** | Sanity |
| **Module** | Authentication |
| **Title** | Verify invalid login shows error on Flipkart |
| **Pre-condition** | Login page is open |
| **Test Steps** | 1. Enter valid registered email <br> 2. Enter incorrect password <br> 3. Click Login <br> 4. Assert error message is visible <br> 5. Assert user remains on login page |
| **Expected Result** | "Incorrect password" error shown; login does not succeed |
| **Priority** | Critical |
| **Platform** | Flipkart |

---

### PW_FK_SAN_002
| Field | Details |
|-------|---------|
| **PW-ID** | PW_FK_SAN_002 |
| **Suite** | Sanity |
| **Module** | Filter |
| **Title** | Verify price range filter works on Flipkart |
| **Pre-condition** | Search results page is displayed for "Mobile Phones" |
| **Test Steps** | 1. Search for "Mobile Phones" <br> 2. Set price filter to ₹10,000 – ₹20,000 <br> 3. Apply filter <br> 4. Assert all displayed products are within the price range |
| **Expected Result** | Only products priced ₹10,000 – ₹20,000 are shown |
| **Priority** | High |
| **Platform** | Flipkart |

---

### PW_FK_SAN_003
| Field | Details |
|-------|---------|
| **PW-ID** | PW_FK_SAN_003 |
| **Suite** | Sanity |
| **Module** | Cart |
| **Title** | Verify cart total calculation is correct on Flipkart |
| **Pre-condition** | Multiple items are added to cart |
| **Test Steps** | 1. Add 2 products to cart <br> 2. Open cart page <br> 3. Note individual prices <br> 4. Assert cart subtotal = sum of item prices <br> 5. Assert final total = subtotal + delivery charges |
| **Expected Result** | Cart total is mathematically accurate |
| **Priority** | Critical |
| **Platform** | Flipkart |

---

### PW_FK_SAN_004
| Field | Details |
|-------|---------|
| **PW-ID** | PW_FK_SAN_004 |
| **Suite** | Sanity |
| **Module** | Return |
| **Title** | Verify return window expiry message on Flipkart |
| **Pre-condition** | An order with expired return window exists in My Orders |
| **Test Steps** | 1. Navigate to My Orders <br> 2. Open an order with expired return window <br> 3. Assert "Return" button is disabled or absent <br> 4. Assert expiry message is visible |
| **Expected Result** | Return option is unavailable; expiry message shown clearly |
| **Priority** | High |
| **Platform** | Flipkart |

---

---

# 🛒 E-COMMERCE — Amazon

---

## 🔥 SMOKE TEST CASES — Amazon

---

### PW_AM_SMK_001
| Field | Details |
|-------|---------|
| **PW-ID** | PW_AM_SMK_001 |
| **Suite** | Smoke |
| **Module** | Homepage |
| **Title** | Verify Amazon homepage loads successfully |
| **Pre-condition** | Stable internet; browser available |
| **Test Steps** | 1. Navigate to `https://www.amazon.in` <br> 2. Wait for full page load <br> 3. Assert page title contains "Amazon" <br> 4. Assert search bar is visible |
| **Expected Result** | Homepage loads within 3 seconds; Amazon logo and search bar visible |
| **Priority** | Critical |
| **Platform** | Amazon |

---

### PW_AM_SMK_002
| Field | Details |
|-------|---------|
| **PW-ID** | PW_AM_SMK_002 |
| **Suite** | Smoke |
| **Module** | Authentication |
| **Title** | Verify login page loads on Amazon |
| **Pre-condition** | Amazon homepage is loaded |
| **Test Steps** | 1. Click "Sign In" on homepage <br> 2. Assert login page loads <br> 3. Assert email input field is visible <br> 4. Assert Continue button is visible |
| **Expected Result** | Login page loads correctly with email input and Continue button |
| **Priority** | Critical |
| **Platform** | Amazon |

---

### PW_AM_SMK_003
| Field | Details |
|-------|---------|
| **PW-ID** | PW_AM_SMK_003 |
| **Suite** | Smoke |
| **Module** | Search |
| **Title** | Verify search functionality works on Amazon |
| **Pre-condition** | Homepage is loaded |
| **Test Steps** | 1. Click on search bar <br> 2. Type "Wireless Earbuds" <br> 3. Press Enter <br> 4. Assert results page loads <br> 5. Assert at least one product card is visible |
| **Expected Result** | Search results display relevant earbuds products |
| **Priority** | Critical |
| **Platform** | Amazon |

---

### PW_AM_SMK_004
| Field | Details |
|-------|---------|
| **PW-ID** | PW_AM_SMK_004 |
| **Suite** | Smoke |
| **Module** | Cart |
| **Title** | Verify product can be added to cart on Amazon |
| **Pre-condition** | User is logged in; product page is open |
| **Test Steps** | 1. Search for "USB Cable" <br> 2. Click on first product <br> 3. Click "Add to Cart" button <br> 4. Assert "Added to Cart" confirmation is shown <br> 5. Assert cart count increases |
| **Expected Result** | Product added to cart; cart icon count increases |
| **Priority** | Critical |
| **Platform** | Amazon |

---

### PW_AM_SMK_005
| Field | Details |
|-------|---------|
| **PW-ID** | PW_AM_SMK_005 |
| **Suite** | Smoke |
| **Module** | Checkout |
| **Title** | Verify checkout page loads from cart on Amazon |
| **Pre-condition** | Item is in cart; user is logged in |
| **Test Steps** | 1. Open cart page <br> 2. Click "Proceed to Buy" <br> 3. Assert address selection page loads <br> 4. Assert delivery address options are visible |
| **Expected Result** | Checkout page loads with delivery address section |
| **Priority** | Critical |
| **Platform** | Amazon |

---

## 🧪 SANITY TEST CASES — Amazon

---

### PW_AM_SAN_001
| Field | Details |
|-------|---------|
| **PW-ID** | PW_AM_SAN_001 |
| **Suite** | Sanity |
| **Module** | Authentication |
| **Title** | Verify invalid login shows error on Amazon |
| **Pre-condition** | Login page is open |
| **Test Steps** | 1. Enter valid registered email <br> 2. Click Continue <br> 3. Enter incorrect password <br> 4. Click Sign In <br> 5. Assert error message is visible |
| **Expected Result** | "Your password is incorrect" error shown; login fails |
| **Priority** | Critical |
| **Platform** | Amazon |

---

### PW_AM_SAN_002
| Field | Details |
|-------|---------|
| **PW-ID** | PW_AM_SAN_002 |
| **Suite** | Sanity |
| **Module** | Filter |
| **Title** | Verify multiple filters work simultaneously on Amazon |
| **Pre-condition** | Search results page is displayed for "Headphones" |
| **Test Steps** | 1. Search for "Headphones" <br> 2. Apply Brand filter: Sony <br> 3. Apply Rating filter: 4★ & above <br> 4. Assert all results are Sony brand <br> 5. Assert all results have 4★+ rating |
| **Expected Result** | Only Sony headphones with 4★+ rating are shown |
| **Priority** | High |
| **Platform** | Amazon |

---

### PW_AM_SAN_003
| Field | Details |
|-------|---------|
| **PW-ID** | PW_AM_SAN_003 |
| **Suite** | Sanity |
| **Module** | Cart |
| **Title** | Verify out-of-stock product cannot be added to cart on Amazon |
| **Pre-condition** | An out-of-stock product page is accessible |
| **Test Steps** | 1. Navigate to an out-of-stock product page <br> 2. Assert "Add to Cart" button is absent or disabled <br> 3. Assert "Currently unavailable" message is visible |
| **Expected Result** | Out-of-stock product cannot be added; message displayed clearly |
| **Priority** | Critical |
| **Platform** | Amazon |

---

### PW_AM_SAN_004
| Field | Details |
|-------|---------|
| **PW-ID** | PW_AM_SAN_004 |
| **Suite** | Sanity |
| **Module** | Return |
| **Title** | Verify return request can be initiated on Amazon |
| **Pre-condition** | A delivered order within return window exists in My Orders |
| **Test Steps** | 1. Go to Account → My Orders <br> 2. Select a delivered order <br> 3. Click "Return or Replace Items" <br> 4. Select return reason <br> 5. Submit return request <br> 6. Assert confirmation message is shown |
| **Expected Result** | Return request submitted; confirmation shown with return details |
| **Priority** | Critical |
| **Platform** | Amazon |

---

---

# 🌐 CROSS-PLATFORM SMOKE & SANITY

---

### PW_CP_SMK_001
| Field | Details |
|-------|---------|
| **PW-ID** | PW_CP_SMK_001 |
| **Suite** | Smoke |
| **Module** | Compatibility |
| **Title** | Verify all 4 platform homepages load on Chrome |
| **Pre-condition** | Latest Chrome browser available |
| **Test Steps** | 1. Open Swiggy on Chrome — assert homepage loads <br> 2. Open Zomato on Chrome — assert homepage loads <br> 3. Open Flipkart on Chrome — assert homepage loads <br> 4. Open Amazon on Chrome — assert homepage loads |
| **Expected Result** | All 4 homepages load without errors on Chrome |
| **Priority** | Critical |
| **Platform** | All 4 |

---

### PW_CP_SMK_002
| Field | Details |
|-------|---------|
| **PW-ID** | PW_CP_SMK_002 |
| **Suite** | Smoke |
| **Module** | Performance |
| **Title** | Verify homepage load time is under 3 seconds for all platforms |
| **Pre-condition** | Stable broadband connection |
| **Test Steps** | 1. Record start time before navigating to each homepage <br> 2. Navigate to Swiggy — assert load time < 3000ms <br> 3. Navigate to Zomato — assert load time < 3000ms <br> 4. Navigate to Flipkart — assert load time < 3000ms <br> 5. Navigate to Amazon — assert load time < 3000ms |
| **Expected Result** | All homepages load within 3 seconds (NFR-01) |
| **Priority** | High |
| **Platform** | All 4 |

---

### PW_CP_SAN_001
| Field | Details |
|-------|---------|
| **PW-ID** | PW_CP_SAN_001 |
| **Suite** | Sanity |
| **Module** | UI/UX |
| **Title** | Verify no UI layout breaks on desktop for all platforms |
| **Pre-condition** | Desktop browser at 1920x1080 resolution |
| **Test Steps** | 1. Open each platform at 1920x1080 <br> 2. Navigate to Home, Search, Cart pages <br> 3. Assert no overlapping elements <br> 4. Assert all buttons and inputs are visible and clickable |
| **Expected Result** | All pages render correctly with no layout breaks |
| **Priority** | High |
| **Platform** | All 4 |

---

## 📊 Playwright Test Case Summary

| Platform | Smoke TCs | Sanity TCs | Total |
|----------|-----------|------------|-------|
| Swiggy | 5 | 4 | 9 |
| Zomato | 5 | 3 | 8 |
| Flipkart | 5 | 4 | 9 |
| Amazon | 5 | 4 | 9 |
| Cross-Platform | 2 | 1 | 3 |
| **Total** | **22** | **16** | **38** |

---

## 📋 Playwright Test Execution Checklist

| PW-ID | Suite | Platform | Status |
|-------|-------|----------|--------|
| PW_SW_SMK_001 | Smoke | Swiggy | ⬜ |
| PW_SW_SMK_002 | Smoke | Swiggy | ⬜ |
| PW_SW_SMK_003 | Smoke | Swiggy | ⬜ |
| PW_SW_SMK_004 | Smoke | Swiggy | ⬜ |
| PW_SW_SMK_005 | Smoke | Swiggy | ⬜ |
| PW_SW_SAN_001 | Sanity | Swiggy | ⬜ |
| PW_SW_SAN_002 | Sanity | Swiggy | ⬜ |
| PW_SW_SAN_003 | Sanity | Swiggy | ⬜ |
| PW_SW_SAN_004 | Sanity | Swiggy | ⬜ |
| PW_ZO_SMK_001 | Smoke | Zomato | ⬜ |
| PW_ZO_SMK_002 | Smoke | Zomato | ⬜ |
| PW_ZO_SMK_003 | Smoke | Zomato | ⬜ |
| PW_ZO_SMK_004 | Smoke | Zomato | ⬜ |
| PW_ZO_SMK_005 | Smoke | Zomato | ⬜ |
| PW_ZO_SAN_001 | Sanity | Zomato | ⬜ |
| PW_ZO_SAN_002 | Sanity | Zomato | ⬜ |
| PW_ZO_SAN_003 | Sanity | Zomato | ⬜ |
| PW_FK_SMK_001 | Smoke | Flipkart | ⬜ |
| PW_FK_SMK_002 | Smoke | Flipkart | ⬜ |
| PW_FK_SMK_003 | Smoke | Flipkart | ⬜ |
| PW_FK_SMK_004 | Smoke | Flipkart | ⬜ |
| PW_FK_SMK_005 | Smoke | Flipkart | ⬜ |
| PW_FK_SAN_001 | Sanity | Flipkart | ⬜ |
| PW_FK_SAN_002 | Sanity | Flipkart | ⬜ |
| PW_FK_SAN_003 | Sanity | Flipkart | ⬜ |
| PW_FK_SAN_004 | Sanity | Flipkart | ⬜ |
| PW_AM_SMK_001 | Smoke | Amazon | ⬜ |
| PW_AM_SMK_002 | Smoke | Amazon | ⬜ |
| PW_AM_SMK_003 | Smoke | Amazon | ⬜ |
| PW_AM_SMK_004 | Smoke | Amazon | ⬜ |
| PW_AM_SMK_005 | Smoke | Amazon | ⬜ |
| PW_AM_SAN_001 | Sanity | Amazon | ⬜ |
| PW_AM_SAN_002 | Sanity | Amazon | ⬜ |
| PW_AM_SAN_003 | Sanity | Amazon | ⬜ |
| PW_AM_SAN_004 | Sanity | Amazon | ⬜ |
| PW_CP_SMK_001 | Smoke | All 4 | ⬜ |
| PW_CP_SMK_002 | Smoke | All 4 | ⬜ |
| PW_CP_SAN_001 | Sanity | All 4 | ⬜ |

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | May 2026 | Govind Ghatnandrekar | Initial Draft |

---

*End of Document*
