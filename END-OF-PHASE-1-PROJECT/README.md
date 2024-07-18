!! ================ OVERVIEW ================ !!

Contactify is a web application designed to provide an efficient and user-friendly system for managing contacts. Whether it's personal acquaintances, business associates, or potential clients, Contactify offers a centralized platform to add, edit, and search for contacts with ease. The application is built using HTML, CSS, and JavaScript, and it utilizes a JSON server to handle data operations.

!! ================ FEATURES ================ !!

1. Add New Contacts: Easily add new contacts with details such as name, email, phone number, image URL, and location.

2. View Contacts: Display all contacts in a user-friendly card format.

3. Search Contacts: Real-time search functionality to find contacts by name, email, phone number, or location.

4. Edit Contacts: Update contact details via a modal form.

5. Delete Contacts: Remove contacts from the list with a single click.

6. Responsive Design: Ensures usability across different devices and screen sizes.

!! ================ TECHNOLOGIES USED ================ !!

HTML: Provides the structure of the web application.

CSS: Styles the user interface for a visually appealing design.

JavaScript: Handles dynamic behavior and functionality.

JSON Server: Simulates a REST API to handle data operations.

Fetch API: For making HTTP requests.

!! ================ INSTALLATION & SETUP ================ !!

Step 1:Clone the repository:

git clone git@github.com:code-iddih/task-end-of-phase-1-project.git

cd contactify

Step 2:Install JSON Server:

npm install -g json-server

Step 3:Start JSON Server:

json-server --watch db.json

Step 4:Open index.html in your web browser:

Simply open the <index.html> file in your preferred web browser to start using Contactify.

!! ================ PROJECT STRUCTURE ================ !!

<index.html>: The main HTML file that structures the web application.

<styles.css>: The CSS file that styles the user interface.

<index.js>: The JavaScript file that handles the application's functionality.

<db.json>: The JSON file that acts as the database for storing contact information.

assets: Directory containing images and videos used in the application.

!! ================ USAGE ================ !!

1. Add a Contact:

Fill in the form on the left side of the application with the contact's details.

Click the "Add Contact" button to save the contact.

2. Search for a Contact:

Type into the search bar to find contacts by name, email, phone number, or location.

The contact list will update in real-time to show matching results.

3. Edit a Contact:

Click the "Edit" button on a contact card.

Update the contact details in the modal form that appears.

Click "Update Contact" to save the changes.

4. Delete a Contact:

Click the "Delete" button on a contact card to remove the contact from the list.

!! ================ FUTURE IMPROVEMENTS ================ !!s

Authentication: Implement user login and registration for personalized contact management.

Advanced Search: Introduce filtering and sorting options for better search functionality.

Mobile Application: Develop a mobile app version for better accessibility.

Cloud Integration: Store data on cloud services for better scalability and reliability.

Enhanced UI/UX: Continuous improvements to the design and user experience based on user feedback.

!! ================ CONTRIBUTING ================ !!

I welcome contributions to improve Contactify! To contribute:

Step 1: Fork the repository.

Step 2: Create a new branch for your feature or bugfix.

Step 3: Commit your changes and push your branch.

Step 4: Open a pull request with a detailed description of your changes.

Thank you.