# React Form Handling using useState and Props

This project demonstrates how to handle forms in a React application using the `useState` hook and props for state management and data flow.

## Overview

In this example, we create a simple form that captures user input and manages the form state using React's `useState` hook. The form data is then passed to child components via props, showcasing effective parent-child communication in React.

## Features

- **useState Hook**: Manage form state efficiently within functional components.
- **Props**: Pass data and event handlers to child components to handle user input and form submission.
- **Controlled Components**: Implement form elements whose values are controlled by React state.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Manav2311/React-FormHandling-using-UseState_and_Props.git
   cd React-FormHandling-using-UseState_and_Props
   ```

2. **Install dependencies**:

   Ensure you have [Node.js](https://nodejs.org/) installed, then run:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

   The application should now be running on [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── components/
│   ├── FormComponent.js
│   └── DisplayComponent.js
├── App.js
└── index.js
```

- `FormComponent.js`: Contains the form and manages input state using `useState`.
- `DisplayComponent.js`: Receives form data via props and displays it.
- `App.js`: Parent component that holds the main state and handles data flow between `FormComponent` and `DisplayComponent`.

## Usage

- **Filling the Form**: Enter data into the form fields. As you type, the state updates accordingly.
- **Form Submission**: Upon submitting the form, the data is passed to the `DisplayComponent` and rendered on the screen.

## Learn More

To learn more about React form handling, consider the following resources:

- [React Docs: Forms](https://reactjs.org/docs/forms.html)
- [React Docs: Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
- [React Docs: Hooks - useState](https://reactjs.org/docs/hooks-state.html)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

