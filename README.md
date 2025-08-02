
# VervCommerce

A responsive, modern e-commerce dashboard built with **Next.js**, **Tailwind CSS**, **Zustand**, and **shadcn/ui**. VervCommerce provides a sleek user interface for browsing, filtering, and managing products with a functional cart and simulated product creation.


## Demo

https://verv-commerce.vercel.app/


![Logo](https://raw.githubusercontent.com/sabbir-shuvo-ux/VervCommerce/refs/heads/main/public/VervCommerce-home.png)

## 🛍️ Overview

**VervCommerce** is a full-featured e-commerce dashboard interface built using modern tools. It interacts with [FakeStoreAPI](https://fakestoreapi.com/) to display real-time product data. The app features filtering, product details, a shopping cart, and the ability to simulate product creation.

---
## 🚀 Features

#### 🛍️ Product Listing
- Fetches and displays real-time product data from [FakeStoreAPI](https://fakestoreapi.com/).
- Shows product image, title, price, and category.

#### 🗂️ Category Filtering
- Allows users to filter products by category using live data from the API.

#### 🔍 Product Detail View
- Displays detailed product information:
  - Product image
  - Title
  - Rating
  - Description
  - Price

#### 🛒 Add to Cart
- Users can add products to the cart.
- Tracks:
  - Number of items
  - Total price in real-time

#### 🧾 Cart Management Page
- Modify item quantity (increment/decrement)
- Remove individual items
- View live-updated total price

#### ➕ Simulated Add Product Form
- A mock form to simulate product creation.
- Includes a confirmation toast on successful submission.

#### 🔁 "Keep Me on This Page" Toggle
- While adding a product, users can enable a **"Keep me on this page"** option.
- Helps add multiple items without being redirected away from the form.

#### 💡 Loading and Error Handling
- Displays loading skeletons while data is being fetched.
- Handles API errors gracefully with informative error messages.

#### 🔎 Search with Debounce
- Users can search for products by title.
- Includes debounce functionality to reduce unnecessary API calls.

#### ↕️ Product Sorting
- Sort products by:
  - Price (Low to High / High to Low)
  - Rating (High to Low / Low to High)

#### 🧠 Persist Cart with localStorage
- Automatically saves the cart to localStorage.
- Cart items persist across page reloads or browser restarts.

#### 🔄 Infinite Scroll Pagination
- Automatically loads more products as users scroll down.
- Optimized for large product sets.

---
## 🛠️ Tech Stack

- **Next.js** – App Router based architecture
- **Tailwind CSS** – Utility-first styling
- **TypeScript** – Type safety
- **Zustand** – Lightweight state management
- **FakeStoreAPI** – Source for products and categories

---
## 🚀 Getting Started

Follow these steps to run the project locally.

#### 1. Clone the Repository

```bash
git clone https://github.com/sabbir-shuvo-ux/VervCommerce.git
```
#### 2. Navigate to the Project Directory
```bash 
cd VervCommerce
```

#### 3. Install Dependencies
```bash 
npm install
```

#### 4. Run the Development Server
```bash 
npm run dev
```

#### 5. For build the project
```bash 
npm run build
```

#### 6. Preview build project
```bash 
npm start
```

---
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_BASE_URL`=****************************



## API Reference

#### Get all items

```http
  GET https://fakestoreapi.com/products
```

#### Get item

```http
  GET https://fakestoreapi.com/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of item to fetch |

#### Get Categories

```http
  GET https://fakestoreapi.com/products/categories
```
---

## 🔧 Improvements & Enhancements

### ✅ Functionality Enhancements Implemented

- **🧡 Wishlist / Favorites System**  
  Users can mark products as favorites and revisit them anytime.

- **🏷️ Product Tags / Badges**  
  Products display contextual tags like **New**, **On Sale**, or **Low Stock** for better visibility and UX.

- **🔐 Authentication Support**  
  Login/Signup functionality added using JWT/Firebase/Supabase to simulate user-specific carts and favorites.

- **✨ Framer Motion Animations**  
  Smooth and subtle animations enhance the overall user experience.

---

### 🛠️ Current Architecture Notes

- **🧠 Zustand State Management**  
  All state logic is currently organized in a single Zustand hook due to the simplicity of the app. However, the logic can be modularized into slices (`cartSlice`, `productSlice`, etc.) as the application scales.

---

### 📸 Optimization Opportunities

- **🖼️ Third-Party Image Optimization**  
  Currently using third-party images directly. Optimization via `next/image` and placeholder strategies can improve performance and visual loading experience.

---
