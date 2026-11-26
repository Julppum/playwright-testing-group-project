# Swag Labs Test Automation Project

## Course

Fundamentals of Functional Testing (TO00CD53-3002)

## Group Members

- Henkilö 1
- Emma Botha-Sola
- Henkilö 3

---

# Project Description

This project implements automated functional tests for the Swag Labs web application using Playwright and TypeScript.

Swag Labs is a demo e-commerce website developed by Sauce Labs for learning software testing and test automation. The application contains login functionality, product browsing, shopping cart operations, checkout workflows and navigation features.

The purpose of this project is to convert selected test cases from the approved Test Plan into maintainable and repeatable automated tests.

---

# Testing Objectives

The objectives of this project are:

- Verify that key user workflows function correctly.
- Validate both positive and negative test scenarios.
- Implement repeatable automated tests using Playwright.
- Demonstrate the use of Page Object Model design.
- Improve understanding of functional test automation.

---

# Scope

The automated tests cover the following functionalities:

- User Login
- Product Browsing
- Product Sorting
- Shopping Cart Operations
- Checkout Process
- Logout Functionality

Out of scope:

- Security testing
- Performance testing
- Source code review
- Backend or database testing
- Third-party service integration testing

---

# Test Environment

| Item | Value |
|--------|--------|
| Application | Swag Labs |
| URL | https://www.saucedemo.com |
| Framework | Playwright |
| Language | TypeScript |
| Repository | GitHub |
| Browser | Chromium |

---

# Project Structure

```text
playwright-project/
│
├── tests/
│   ├── login.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── test-data/
│   ├── users.ts
│   └── checkoutData.ts
│
├── playwright.config.ts
│
└── README.md
```

---

# Automated Test Cases

| ID | Test Case | Type |
|------|------------|---------|
| TC-01 | Successful Login | Positive |
| TC-02 | Invalid Login | Negative |
| TC-04 | Product Sorting | Positive |
| TC-05 | Add Product to Cart | Positive |
| TC-06 | Remove Product from Cart | Positive |
| TC-07 | Successful Checkout | Positive |
| TC-08 | Checkout with Missing Information | Negative |
| TC-10 | Logout | Positive |

---

# Test Data

Example user accounts used in testing:

| User Type | Username |
|------------|------------|
| Standard User | standard_user |
| Problem User | problem_user |
| Invalid User | wrong_user |

Password:

```text
secret_sauce
```

Example checkout data:

```text
First name: Test
Last name: User
Postal code: 00100
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
cd <repository-name>
```

## Install Dependencies

```bash
npm install
```

## Install Browsers

```bash
npx playwright install
```

---

# Running Tests

Run all tests:

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/login.spec.ts
```

Open test report:

```bash
npx playwright show-report
```

---

# Design Approach

This project follows the Page Object Model (POM) design pattern.

Benefits:

- Improved maintainability
- Reduced code duplication
- Better test readability
- Easier test expansion

Reusable page objects:

- LoginPage
- InventoryPage
- CartPage
- CheckoutPage

---

# Assertions Used

Examples of assertions used in the project:

```typescript
await expect(page).toHaveURL(/inventory/);
```

```typescript
await expect(errorMessage).toBeVisible();
```

```typescript
await expect(cartBadge).toHaveText('1');
```

```typescript
await expect(confirmationMessage).toContainText('Thank you');
```

---

# Collaboration

Development is completed using GitHub with feature branches and pull requests.

Each team member is responsible for their own:

- Page Objects
- Test Cases
- Commits
- Pull Requests

---

# Work Distribution

## Julia

Responsible for:
- LoginPage.ts
- TC-01 Successful Login
- TC-02 Invalid Login

## Login Automation (Julia)
Implemented test cases:
- TC-01 Successful Login
- TC-02 Invalid Login

Components created:
- LoginPage.ts
- users.ts
- login.spec.ts
Execution status: All login tests passed successfully.

## Emma

Responsible for:

Page objectives:
- InventoryPage.ts
- CartPage.ts

Automated test cases:
- TC-04 Product Sorting
- TC-05 Add Product to Cart
- TC-06 Remove Product from Cart

Technology:
- Playwright
- TypeScript

npx playwright test : 9 passed

---

## Marika

Responsible for:

- CheckoutPage.ts
- TC-07 Successful Checkout
- TC-08 Checkout Validation
- TC-10 Logout

---

# Expected Outcome

The project should demonstrate that the primary workflows of the Swag Labs application can be reliably automated using Playwright. The automated tests should provide repeatable and maintainable regression coverage for the selected test scenarios.
