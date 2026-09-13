# Dev Stack 🚀

Dev Stack is a responsive technology stack explorer built with React, TypeScript, and Tailwind CSS. It allows developers to explore popular technologies and create their own development stack by adding and removing technologies.

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React-Toastify
- JSON
- Vite

## ✨ Features

1. **Technology Explorer**
   Browse popular technologies with their icon, category, description, difficulty level, rating, and badge.

2. **Your Stack**
   Add technologies to your personal stack. You can also remove individual technologies or remove all technologies at once.

3. **Responsive Design & Notifications**
   The website is responsive for mobile, tablet, and desktop devices. React-Toastify is used to show notifications when technologies are added, removed, or when duplicate items are selected.

 📚 React Questions & Answers

1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React UI code easier to read and write.

2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time.

3. What does the useState hook do, and where did you use it in this project?

The `useState` hook is used to store and update data in a React component.

In this project, I used `useState` for:

- Technology data
- Selected stack
- Loading state
- Mobile menu state

 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects after a component renders.

In this project, I used `useEffect` to fetch the technology data from the local `technologies.json` file when the application loads.

5. Why does every item in a .map() list need a unique key prop?

React uses the `key` prop to identify each item in a list.

A unique key helps React understand which item has changed, been added, or been removed. This allows React to update the UI efficiently.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

For example, in this project, I show an empty-stack message when there are no technologies in the stack:


 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. A child can send data back to the parent by calling a callback function provided by the parent through props.



**Dev Stack** — Explore. Compare. Build Your Stack. 🚀
