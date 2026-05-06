# Manual Test Case Suite

---

| Field             | Details                                                              |
|-------------------|----------------------------------------------------------------------|
| **Project**       | QA Capstone Project – Comparative Analysis of Market Leaders         |
| **Author**        | Govind Ghatnandrekar                                                 |
| **Role**          | Senior QA Test Engineer                                              |
| **Version**       | 1.0                                                                  |
| **Date**          | May 2026                                                             |
| **Reference**     | Test_Scenarios_QA_Capstone_Project.md v1.0                           |

---

## 📌 Test Case Template

| Field | Description |
|-------|-------------|
| **TC-ID** | Unique Test Case ID |
| **TS-ID** | Linked Test Scenario ID |
| **Module** | Feature being tested |
| **Title** | Short description of the test |
| **Pre-condition** | Setup required before test execution |
| **Test Steps** | Step-by-step actions |
| **Expected Result** | What should happen |
| **Actual Result** | Filled during execution |
| **Status** | Pass / Fail / Blocked |
| **Priority** | Critical / High / Medium / Low |
| **Platform** | Which platform |

---

---

# 🍔 FOOD DELIVERY — Swiggy & Zomato

---

## MODULE 1 — Location Services

---

### TC_FD_001
| Field | Details |
|-------|---------|
| **TC-ID** | TC_FD_001 |
| **TS-ID** | TS_FD_001 |
| **Module** | Location Services |
| **Title** | Verify auto-detection of current location |
| **Pre-condition** | User is on the app homepage; location permission is enabled in browser |
| **Test Steps** | 1. Open Swiggy/Zomato homepage <br> 2. Click "Detect my location" button <br> 3. Allow location permission in browser popup |
| **Expected Result** | App fetches current location and displays the correct area/city name |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Swiggy, Zomato |

---

### TC_FD_002
| Field | Details |
|-------|---------|
| **TC-ID** | TC_FD_002 |
| **TS-ID** | TS_FD_001 |
| **Module** | Location Services |
| **Title** | Verify manual entry of delivery address |
| **Pre-condition** | User is on the homepage |
| **Test Steps** | 1. Open Swiggy/Zomato homepage <br> 2. Click on the location/address field <br> 3. Type a valid address manually (e.g., "Pune, Maharashtra") <br> 4. Select the address from the dropdown suggestions |
| **Expected Result** | App accepts the manually entered address and updates the location |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Swiggy, Zomato |

---

### TC_FD_003
| Field | Details |
|-------|---------|
| **TC-ID** | TC_FD_003 |
| **TS-ID** | TS_FD_003 |
| **Module** | Location Services |
| **Title** | Verify error when location permission is denied |
| **Pre-condition** | Browser location permission is blocked |
| **Test Steps** | 1. Open Swiggy/Zomato homepage <br> 2. Click "Detect my location" <br> 3. Deny location permission in browser popup |
| **Expected Result** | App displays a meaningful error message and prompts user to enter location manually |
| **Actual Result** | |
| **Status** | |
| **Priority** | High |
| **Platform** | Swiggy, Zomato |

---

### TC_FD_004
| Field | Details |
|-------|---------|
| **TC-ID** | TC_FD_004 |
| **TS-ID** | TS_FD_004 |
| **Module** | Location Services |
| **Title** | Verify system handles non-serviceable address |
| **Pre-condition** | User is on homepage |
| **Test Steps** | 1. Open Swiggy/Zomato homepage <br> 2. Enter a remote/non-serviceable address (e.g., a rural area) <br> 3. Confirm the address |
| **Expected Result** | App displays "We don't deliver here yet" or similar message gracefully |
| **Actual Result** | |
| **Status** | |
| **Priority** | High |
| **Platform** | Swiggy, Zomato |

---

### TC_FD_005
| Field | Details |
|-------|---------|
| **TC-ID** | TC_FD_005 |
| **TS-ID** | TS_FD_005 |
| **Module** | Location Services |
| **Title** | Verify saved addresses are displayed on revisit |
| **Pre-condition** | User is logged in; at least one address is saved in the account |
| **Test Steps** | 1. Log in to Swiggy/Zomato <br> 2. Click on the location/address field <br> 3. Observe the dropdown for saved addresses |
| **Expected Result** | Previously saved addresses appear in the dropdown for quick selection |
| **Actual Result** | |
| **Status** | |
| **Priority** | Medium |
| **Platform** | Swiggy, Zomato |

---

## MODULE 2 — Search & Discovery

---

### TC_FD_006
| Field | Details |
|-------|---------|
| **TC-ID** | TC_FD_006 |
| **TS-ID** | TS_FD_006 |
| **Module** | Search & Discovery |
| **Title** | Verify search returns relevant restaurants for valid keyword |
| **Pre-condition** | User is on homepage; location is set |
| **Test Steps** | 1. Click on the search bar <br> 2. Type a valid keyword (e.g., "Pizza") <br> 3. Press Enter or click Search |
| **Expected Result** | Search results display restaurants/items relevant to "Pizza" |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Swiggy, Zomato |

---

### TC_FD_007
| Field | Details |
|-------|---------|
| **TC-ID** | TC_FD_007 |
| **TS-ID** | TS_FD_007 |
| **Module** | Search & Discovery |
| **Title** | Verify search with gibberish keyword shows No Results |
| **Pre-condition** | User is on homepage; location is set |
| **Test Steps** | 1. Click on the search bar <br> 2. Type an invalid keyword (e.g., "xyzabc123") <br> 3. Press Enter |
| **Expected Result** | App displays "No results found" or similar message — no crash or blank screen |
| **Actual Result** | |
| **Status** | |
| **Priority** | High |
| **Platform** | Swiggy, Zomato |

---

### TC_FD_008
| Field | Details |
|-------|---------|
| **TC-ID** | TC_FD_008 |
| **TS-ID** | TS_FD_008 |
| **Module** | Search & Discovery |
| **Title** | Verify cuisine-based filtering works correctly |
| **Pre-condition** | User is on search/home page; location is set |
| **Test Steps** | 1. Browse to food categories/filters section <br> 2. Select a cuisine filter (e.g., "Chinese") <br> 3. Observe the results |
| **Expected Result** | Only restaurants serving Chinese cuisine are displayed |
| **Actual Result** | |
| **Status** | |
| **Priority** | High |
| **Platform** | Swiggy, Zomato |

---

### TC_FD_009
| Field | Details |
|-------|---------|
| **TC-ID** | TC_FD_009 |
| **TS-ID** | TS_FD_009 |
| **Module** | Search & Discovery |
| **Title** | Verify rating-based sorting High to Low works |
| **Pre-condition** | Search results are displayed |
| **Test Steps** | 1. Perform a search (e.g., "Burger") <br> 2. Click on Sort option <br> 3. Select "Rating: High to Low" |
| **Expected Result** | Restaurants/items are sorted with highest rated appearing first |
| **Actual Result** | |
| **Status** | |
| **Priority** | High |
| **Platform** | Swiggy, Zomato |

---

### TC_FD_010
| Field | Details |
|-------|---------|
| **TC-ID** | TC_FD_010 |
| **TS-ID** | TS_FD_010 |
| **Module** | Search & Discovery |
| **Title** | Verify search results update when location is changed |
| **Pre-condition** | User has searched for an item with one location set |
| **Test Steps** | 1. Search for "Biryani" in Location A <br> 2. Note the results <br> 3. Change the location to Location B <br> 4. Observe updated results |
| **Expected Result** | Search results refresh and show restaurants relevant to the new location |
| **Actual Result** | |
| **Status** | |
| **Priority** | High |
| **Platform** | Swiggy, Zomato |

---

## MODULE 3 — Cart Management

---

### TC_FD_013
| Field | Details |
|-------|---------|
| **TC-ID** | TC_FD_013 |
| **TS-ID** | TS_FD_013 |
| **Module** | Cart Management |
| **Title** | Verify user can add a food item to cart |
| **Pre-condition** | User is logged in; location is set; restaurant page is open |
| **Test Steps** | 1. Open a restaurant page <br> 2. Click "Add" button next to a food item <br> 3. Observe cart icon/count |
| **Expected Result** | Item is added to cart; cart count increases by 1 |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Swiggy, Zomato |

---

### TC_FD_014
| Field | Details |
|-------|---------|
| **TC-ID** | TC_FD_014 |
| **TS-ID** | TS_FD_014 |
| **Module** | Cart Management |
| **Title** | Verify user can increase/decrease item quantity in cart |
| **Pre-condition** | At least one item is in the cart |
| **Test Steps** | 1. Open cart <br> 2. Click "+" to increase quantity <br> 3. Click "-" to decrease quantity |
| **Expected Result** | Quantity updates correctly; cart total recalculates accordingly |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Swiggy, Zomato |

---

### TC_FD_017
| Field | Details |
|-------|---------|
| **TC-ID** | TC_FD_017 |
| **TS-ID** | TS_FD_017 |
| **Module** | Cart Management |
| **Title** | Verify out-of-stock items cannot be added to cart |
| **Pre-condition** | An out-of-stock item is visible on the restaurant page |
| **Test Steps** | 1. Open a restaurant page <br> 2. Locate an item marked as "Out of Stock" <br> 3. Attempt to click "Add" |
| **Expected Result** | "Add" button is disabled or not shown; user cannot add the item |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Swiggy, Zomato |

---

### TC_FD_019
| Field | Details |
|-------|---------|
| **TC-ID** | TC_FD_019 |
| **TS-ID** | TS_FD_019 |
| **Module** | Cart Management |
| **Title** | Verify adding items from two restaurants shows conflict warning |
| **Pre-condition** | User has items from Restaurant A already in cart |
| **Test Steps** | 1. Add item from Restaurant A to cart <br> 2. Navigate to Restaurant B <br> 3. Try to add an item from Restaurant B |
| **Expected Result** | App shows a warning: "Your cart has items from another restaurant. Do you want to clear and add new items?" |
| **Actual Result** | |
| **Status** | |
| **Priority** | High |
| **Platform** | Swiggy, Zomato |

---

## MODULE 4 — Coupon & Offers

---

### TC_FD_020
| Field | Details |
|-------|---------|
| **TC-ID** | TC_FD_020 |
| **TS-ID** | TS_FD_020 |
| **Module** | Coupon & Offers |
| **Title** | Verify valid coupon code is applied successfully |
| **Pre-condition** | User has items in cart; a valid coupon code is available |
| **Test Steps** | 1. Open cart <br> 2. Click "Apply Coupon" <br> 3. Enter a valid coupon code <br> 4. Click Apply |
| **Expected Result** | Coupon is applied; discount is reflected in the order total |
| **Actual Result** | |
| **Status** | |
| **Priority** | High |
| **Platform** | Swiggy, Zomato |

---

### TC_FD_021
| Field | Details |
|-------|---------|
| **TC-ID** | TC_FD_021 |
| **TS-ID** | TS_FD_021 |
| **Module** | Coupon & Offers |
| **Title** | Verify expired coupon shows error message |
| **Pre-condition** | User has items in cart; an expired coupon code is available |
| **Test Steps** | 1. Open cart <br> 2. Click "Apply Coupon" <br> 3. Enter an expired coupon code <br> 4. Click Apply |
| **Expected Result** | App shows "Coupon expired" or similar error; no discount applied |
| **Actual Result** | |
| **Status** | |
| **Priority** | High |
| **Platform** | Swiggy, Zomato |

---

## MODULE 5 — Checkout & Payment

---

### TC_FD_027
| Field | Details |
|-------|---------|
| **TC-ID** | TC_FD_027 |
| **TS-ID** | TS_FD_027 |
| **Module** | Checkout & Payment |
| **Title** | Verify payment via UPI is successful |
| **Pre-condition** | User has items in cart; delivery address is selected; UPI is available |
| **Test Steps** | 1. Proceed to checkout <br> 2. Select UPI as payment method <br> 3. Enter a valid UPI ID <br> 4. Confirm payment |
| **Expected Result** | Payment is processed; order confirmation screen is displayed |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Swiggy, Zomato |

---

### TC_FD_030
| Field | Details |
|-------|---------|
| **TC-ID** | TC_FD_030 |
| **TS-ID** | TS_FD_030 |
| **Module** | Checkout & Payment |
| **Title** | Verify system handles payment failure gracefully |
| **Pre-condition** | User is at payment step; using a test card that triggers failure |
| **Test Steps** | 1. Proceed to checkout <br> 2. Select Card as payment method <br> 3. Enter invalid/expired card details <br> 4. Click Pay |
| **Expected Result** | App shows "Payment Failed" message with option to retry; order is NOT placed |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Swiggy, Zomato |

---

### TC_FD_032
| Field | Details |
|-------|---------|
| **TC-ID** | TC_FD_032 |
| **TS-ID** | TS_FD_032 |
| **Module** | Checkout & Payment |
| **Title** | Verify checkout flow does not exceed 4 steps |
| **Pre-condition** | User has items in cart |
| **Test Steps** | 1. Click "Proceed to Checkout" <br> 2. Count each distinct screen/step until Order Confirmation |
| **Expected Result** | Total checkout steps are 4 or fewer (Cart → Address → Payment → Confirmation) |
| **Actual Result** | |
| **Status** | |
| **Priority** | High |
| **Platform** | Swiggy, Zomato |

---

## MODULE 6 — Order Tracking

---

### TC_FD_033
| Field | Details |
|-------|---------|
| **TC-ID** | TC_FD_033 |
| **TS-ID** | TS_FD_033 |
| **Module** | Order Tracking |
| **Title** | Verify real-time order tracking is displayed after order placement |
| **Pre-condition** | Order has been successfully placed |
| **Test Steps** | 1. Place an order successfully <br> 2. Observe the post-confirmation screen <br> 3. Check for live tracking map or status bar |
| **Expected Result** | Real-time order tracking (map/status) is visible immediately after order confirmation |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Swiggy, Zomato |

---

---

# 🛒 E-COMMERCE — Flipkart & Amazon

---

## MODULE 1 — Authentication

---

### TC_EC_001
| Field | Details |
|-------|---------|
| **TC-ID** | TC_EC_001 |
| **TS-ID** | TS_EC_001 |
| **Module** | Authentication |
| **Title** | Verify user can log in with valid credentials |
| **Pre-condition** | User has a valid registered account |
| **Test Steps** | 1. Open Flipkart/Amazon homepage <br> 2. Click "Sign In" <br> 3. Enter valid email/mobile and password <br> 4. Click Login |
| **Expected Result** | User is logged in successfully and redirected to homepage |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Flipkart, Amazon |

---

### TC_EC_002
| Field | Details |
|-------|---------|
| **TC-ID** | TC_EC_002 |
| **TS-ID** | TS_EC_002 |
| **Module** | Authentication |
| **Title** | Verify login fails with invalid password |
| **Pre-condition** | User has a valid registered account |
| **Test Steps** | 1. Open login page <br> 2. Enter valid email but incorrect password <br> 3. Click Login |
| **Expected Result** | Login fails; error message "Incorrect password" is shown; user stays on login page |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Flipkart, Amazon |

---

### TC_EC_004
| Field | Details |
|-------|---------|
| **TC-ID** | TC_EC_004 |
| **TS-ID** | TS_EC_004 |
| **Module** | Authentication |
| **Title** | Verify Forgot Password flow works correctly |
| **Pre-condition** | User has a registered email account |
| **Test Steps** | 1. Click "Forgot Password" on login page <br> 2. Enter registered email/mobile <br> 3. Submit the form <br> 4. Check email/SMS for reset link/OTP <br> 5. Reset the password |
| **Expected Result** | Password reset link/OTP is received; user can successfully reset and log in with new password |
| **Actual Result** | |
| **Status** | |
| **Priority** | High |
| **Platform** | Flipkart, Amazon |

---

## MODULE 2 — Product Discovery

---

### TC_EC_006
| Field | Details |
|-------|---------|
| **TC-ID** | TC_EC_006 |
| **TS-ID** | TS_EC_006 |
| **Module** | Product Discovery |
| **Title** | Verify search returns relevant products for valid keyword |
| **Pre-condition** | User is on homepage (logged in or guest) |
| **Test Steps** | 1. Click on the search bar <br> 2. Type a valid keyword (e.g., "Laptop") <br> 3. Press Enter or click Search icon |
| **Expected Result** | Search results page displays products relevant to "Laptop" |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Flipkart, Amazon |

---

### TC_EC_008
| Field | Details |
|-------|---------|
| **TC-ID** | TC_EC_008 |
| **TS-ID** | TS_EC_008 |
| **Module** | Product Discovery |
| **Title** | Verify price range filter displays products within selected range |
| **Pre-condition** | Search results page is displayed |
| **Test Steps** | 1. Search for "Mobile Phones" <br> 2. In the filter panel, set price range (e.g., ₹10,000 – ₹20,000) <br> 3. Apply the filter |
| **Expected Result** | Only products priced between ₹10,000 and ₹20,000 are displayed |
| **Actual Result** | |
| **Status** | |
| **Priority** | High |
| **Platform** | Flipkart, Amazon |

---

### TC_EC_011
| Field | Details |
|-------|---------|
| **TC-ID** | TC_EC_011 |
| **TS-ID** | TS_EC_011 |
| **Module** | Product Discovery |
| **Title** | Verify multiple filters can be applied simultaneously |
| **Pre-condition** | Search results page is displayed |
| **Test Steps** | 1. Search for "Headphones" <br> 2. Apply Brand filter (e.g., Sony) <br> 3. Apply Rating filter (4★ & above) <br> 4. Apply Price filter (₹1,000 – ₹5,000) |
| **Expected Result** | Results show only Sony headphones rated 4★+ within the price range |
| **Actual Result** | |
| **Status** | |
| **Priority** | High |
| **Platform** | Flipkart, Amazon |

---

### TC_EC_017
| Field | Details |
|-------|---------|
| **TC-ID** | TC_EC_017 |
| **TS-ID** | TS_EC_017 |
| **Module** | Product Discovery |
| **Title** | Verify out-of-stock label is shown for unavailable products |
| **Pre-condition** | An out-of-stock product page is accessible |
| **Test Steps** | 1. Navigate to an out-of-stock product page <br> 2. Observe the product status and Add to Cart button |
| **Expected Result** | "Out of Stock" label is clearly visible; "Add to Cart" button is disabled or hidden |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Flipkart, Amazon |

---

## MODULE 3 — Cart Management

---

### TC_EC_018
| Field | Details |
|-------|---------|
| **TC-ID** | TC_EC_018 |
| **TS-ID** | TS_EC_018 |
| **Module** | Cart Management |
| **Title** | Verify user can add a product to cart |
| **Pre-condition** | User is logged in; product page is open |
| **Test Steps** | 1. Open a product page <br> 2. Click "Add to Cart" button <br> 3. Observe cart icon count |
| **Expected Result** | Product is added to cart; cart count increases; success message is shown |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Flipkart, Amazon |

---

### TC_EC_021
| Field | Details |
|-------|---------|
| **TC-ID** | TC_EC_021 |
| **TS-ID** | TS_EC_021 |
| **Module** | Cart Management |
| **Title** | Verify cart total is calculated correctly including taxes |
| **Pre-condition** | Multiple items are in the cart |
| **Test Steps** | 1. Add 2–3 products to cart <br> 2. Open cart <br> 3. Observe price breakdown (subtotal, tax, delivery, total) |
| **Expected Result** | Total = Subtotal + Taxes + Delivery charges; calculation is accurate |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Flipkart, Amazon |

---

## MODULE 4 — Checkout & Payment

---

### TC_EC_025
| Field | Details |
|-------|---------|
| **TC-ID** | TC_EC_025 |
| **TS-ID** | TS_EC_025 |
| **Module** | Checkout & Payment |
| **Title** | Verify user can proceed to checkout from cart |
| **Pre-condition** | User is logged in; items are in cart |
| **Test Steps** | 1. Open cart page <br> 2. Click "Proceed to Checkout" / "Buy Now" button |
| **Expected Result** | User is navigated to the address selection/checkout page |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Flipkart, Amazon |

---

### TC_EC_028
| Field | Details |
|-------|---------|
| **TC-ID** | TC_EC_028 |
| **TS-ID** | TS_EC_028 |
| **Module** | Checkout & Payment |
| **Title** | Verify payment via UPI is processed successfully |
| **Pre-condition** | User is at payment step; UPI option is available |
| **Test Steps** | 1. Proceed to checkout <br> 2. Select UPI payment method <br> 3. Enter valid UPI ID <br> 4. Confirm payment |
| **Expected Result** | Payment is processed; order confirmation page is displayed with order ID |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Flipkart, Amazon |

---

### TC_EC_032
| Field | Details |
|-------|---------|
| **TC-ID** | TC_EC_032 |
| **TS-ID** | TS_EC_032 |
| **Module** | Checkout & Payment |
| **Title** | Verify system handles payment failure with retry option |
| **Pre-condition** | User is at payment step |
| **Test Steps** | 1. Select Card payment <br> 2. Enter invalid card details <br> 3. Click Pay |
| **Expected Result** | "Payment Failed" message is shown; user is offered a Retry option; order is NOT placed |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Flipkart, Amazon |

---

## MODULE 5 — Order Tracking

---

### TC_EC_035
| Field | Details |
|-------|---------|
| **TC-ID** | TC_EC_035 |
| **TS-ID** | TS_EC_035 |
| **Module** | Order Tracking |
| **Title** | Verify order appears in My Orders after successful placement |
| **Pre-condition** | User has successfully placed an order |
| **Test Steps** | 1. After order confirmation, navigate to Account → My Orders <br> 2. Observe the order list |
| **Expected Result** | The newly placed order appears at the top of My Orders with correct details |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Flipkart, Amazon |

---

### TC_EC_036
| Field | Details |
|-------|---------|
| **TC-ID** | TC_EC_036 |
| **TS-ID** | TS_EC_036 |
| **Module** | Order Tracking |
| **Title** | Verify order status updates correctly |
| **Pre-condition** | Order has been placed and is in processing state |
| **Test Steps** | 1. Go to My Orders <br> 2. Click on the order <br> 3. Observe status progression over time |
| **Expected Result** | Status updates correctly: Processing → Shipped → Out for Delivery → Delivered |
| **Actual Result** | |
| **Status** | |
| **Priority** | High |
| **Platform** | Flipkart, Amazon |

---

## MODULE 6 — Return & Refund

---

### TC_EC_038
| Field | Details |
|-------|---------|
| **TC-ID** | TC_EC_038 |
| **TS-ID** | TS_EC_038 |
| **Module** | Return & Refund |
| **Title** | Verify user can initiate a return request for delivered order |
| **Pre-condition** | Order status is "Delivered"; item is within return window |
| **Test Steps** | 1. Go to My Orders <br> 2. Select the delivered order <br> 3. Click "Return" button <br> 4. Select reason for return <br> 5. Submit return request |
| **Expected Result** | Return request is submitted successfully; confirmation message is shown |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Flipkart, Amazon |

---

### TC_EC_040
| Field | Details |
|-------|---------|
| **TC-ID** | TC_EC_040 |
| **TS-ID** | TS_EC_040 |
| **Module** | Return & Refund |
| **Title** | Verify return window expiry shows appropriate message |
| **Pre-condition** | Order return window has expired |
| **Test Steps** | 1. Go to My Orders <br> 2. Open an order whose return window has passed <br> 3. Observe the return option |
| **Expected Result** | "Return window has expired" message is shown; Return button is disabled |
| **Actual Result** | |
| **Status** | |
| **Priority** | High |
| **Platform** | Flipkart, Amazon |

---

### TC_EC_042
| Field | Details |
|-------|---------|
| **TC-ID** | TC_EC_042 |
| **TS-ID** | TS_EC_042 |
| **Module** | Return & Refund |
| **Title** | Verify refund amount matches original payment amount |
| **Pre-condition** | Return request has been approved |
| **Test Steps** | 1. Go to My Orders <br> 2. Open the returned order <br> 3. Check refund details |
| **Expected Result** | Refund amount matches the original payment amount exactly |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | Flipkart, Amazon |

---

---

# 🌐 CROSS-PLATFORM & COMPATIBILITY

---

### TC_CP_001
| Field | Details |
|-------|---------|
| **TC-ID** | TC_CP_001 |
| **TS-ID** | TS_CP_001 |
| **Module** | Compatibility |
| **Title** | Verify all core flows work on Chrome (latest) |
| **Pre-condition** | Latest version of Chrome is installed |
| **Test Steps** | 1. Open each platform in Chrome <br> 2. Execute Search → Cart → Checkout flow |
| **Expected Result** | All flows work without UI breaks or functional errors on Chrome |
| **Actual Result** | |
| **Status** | |
| **Priority** | Critical |
| **Platform** | All 4 |

---

### TC_CP_004
| Field | Details |
|-------|---------|
| **TC-ID** | TC_CP_004 |
| **TS-ID** | TS_CP_004 |
| **Module** | Performance |
| **Title** | Verify Home page loads within 3 seconds |
| **Pre-condition** | Stable broadband connection available |
| **Test Steps** | 1. Open browser DevTools → Network tab <br> 2. Navigate to the homepage of each platform <br> 3. Note the page load time |
| **Expected Result** | Homepage fully loads within 3 seconds as per NFR-01 |
| **Actual Result** | |
| **Status** | |
| **Priority** | High |
| **Platform** | All 4 |

---

### TC_CP_006
| Field | Details |
|-------|---------|
| **TC-ID** | TC_CP_006 |
| **TS-ID** | TS_CP_006 |
| **Module** | UI/UX |
| **Title** | Verify UI layout is consistent on desktop |
| **Pre-condition** | Desktop browser is open (1920x1080 resolution) |
| **Test Steps** | 1. Open each platform on desktop <br> 2. Navigate through Home, Search, Cart, Checkout pages <br> 3. Observe for layout breaks, overlapping elements, or misalignments |
| **Expected Result** | All pages render correctly with no UI breaks on desktop |
| **Actual Result** | |
| **Status** | |
| **Priority** | High |
| **Platform** | All 4 |

---

## 📊 Test Case Execution Summary

| Module | Total TCs | Critical | High | Medium | Low |
|--------|-----------|----------|------|--------|-----|
| Location Services | 5 | 2 | 2 | 1 | 0 |
| Search & Discovery (FD) | 5 | 1 | 4 | 0 | 0 |
| Cart Management (FD) | 4 | 3 | 1 | 0 | 0 |
| Coupon & Offers | 2 | 0 | 2 | 0 | 0 |
| Checkout & Payment (FD) | 3 | 2 | 1 | 0 | 0 |
| Order Tracking (FD) | 1 | 1 | 0 | 0 | 0 |
| Authentication (EC) | 3 | 2 | 1 | 0 | 0 |
| Product Discovery (EC) | 4 | 2 | 2 | 0 | 0 |
| Cart Management (EC) | 2 | 2 | 0 | 0 | 0 |
| Checkout & Payment (EC) | 3 | 3 | 0 | 0 | 0 |
| Order Tracking (EC) | 2 | 1 | 1 | 0 | 0 |
| Return & Refund | 3 | 2 | 1 | 0 | 0 |
| Cross-Platform | 3 | 1 | 2 | 0 | 0 |
| **TOTAL** | **40** | **22** | **17** | **1** | **0** |

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | May 2026 | Govind Ghatnandrekar | Initial Draft |

---

*End of Document*
