# UMB React Project - Select Dropdown Component with Number Visualization

In this test, you will be creating a select dropdown component using React that fetches data from an API and displays the list of CPT codes in a dropdown menu. When a user selects a CPT code from the dropdown, a separate component should display the average cost associated with that code.

## Requirements

1. Your select dropdown component should fetch data from the following endpoint: 

   ```
   http://localhost:3001/cpt_codes
   ```

2. The fetched data should be used to populate the options in the select dropdown.

3. When a CPT code is selected, as separate component should display the average cost associated with that code.

4. The component should be well-structured and easy to understand. It should also be responsive and user-friendly.

5. A short video (max 5 minutes) explaining your process and choice of libraries

## Guidelines

1. You can use any React library of your choice to create the select dropdown and visualization components.

2. You are free to use any CSS framework or custom CSS.

3. You can use any additional libraries or tools as needed to complete the task.

4. Your code should be clean, well-structured, and maintainable.

## Submission

1. Fork this repository.

2. Create a new branch with your name.

3. Implement the select dropdown and average cost components according to the requirements.

4. Commit and push your changes to your forked repository.

5. Record a short video (maximum 5 minutes) explaining your process and the libraries you used.

6. Send UMB the link to your forked repository and the video recording.

## Tips

1. Break down the task into smaller, manageable steps.

2. Use React hooks like useState and useEffect to manage the component state and data fetching.

3. Use functional programming principles to write clean and concise code.

4. Test your component thoroughly and handle any errors or edge cases gracefully.

Good luck with the test!

# Vite.js Project with JSON Server

This is a simple project that uses Vite.js and fetches data from a JSON server.

## Prerequisites

Make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/)

## Getting Started

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/umb/umb-react-project.git
   ```

2. Navigate to the project directory:

   ```
   cd umb-react-project
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Start the JSON server:

   ```
   npm run server
   ```

5. In a separate terminal window, start the Vite.js development server:

   ```
   npm run dev
   ```

6. Open your browser and go to `http://localhost:3000` to see the application running.

## Using the Application

The application displays a list of CPT codes and their descriptions. To see the costs associated with each CPT code, select a CPT from the dropdown.

## Data Source

The application fetches data from the following endpoint:

```
http://localhost:3001/cpt_codes
```

The endpoint returns a JSON object with an array of CPT codes, each with an array of costs associated with that code.
