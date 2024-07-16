document.addEventListener('DOMContentLoaded', function () {
  const contactsList = document.getElementById('contactsList');
  const searchInput = document.getElementById('searchInput');
  const addBtn = document.getElementById('addBtn');
  const editModal = document.getElementById('editModal');
  const editContactForm = document.getElementById('editContactForm');
  const closeBtn = editModal.querySelector('.close');

  // Function to fetch contacts from the server
  function fetchContacts() {
    fetch('http://localhost:3000/contacts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayContacts(data);
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
      });
  }

  // Function to display contacts in the UI
  function displayContacts(contacts) {
    contactsList.innerHTML = '';
    contacts.forEach(contact => {
      const contactCard = createContactCard(contact);
      contactsList.appendChild(contactCard);
    });
  }

  // Function to create a contact card element
  function createContactCard(contact) {
    const contactCard = document.createElement('div');
    contactCard.classList.add('contact-card');
    contactCard.innerHTML = `
      <img src="${contact.image}" alt="${contact.name}">
      <h3>${contact.name}</h3>
      <p>Email: ${contact.email}</p>
      <p>Phone: ${contact.phone}</p>
      <p>Location: ${contact.location}</p>
      <button class="editBtn" data-id="${contact.id}">Edit</button>
      <button class="deleteBtn" data-id="${contact.id}">Delete</button>
    `;

    // Event listener for edit button in each contact card
    const editBtn = contactCard.querySelector('.editBtn');
    editBtn.addEventListener('click', () => openEditModal(contact));

    // Event listener for delete button in each contact card
    const deleteBtn = contactCard.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', () => handleDelete(contact.id));

    return contactCard;
  }

  // Function to open edit modal with contact details
  function openEditModal(contact) {
    document.getElementById('editId').value = contact.id;
    document.getElementById('editName').value = contact.name;
    document.getElementById('editEmail').value = contact.email;
    document.getElementById('editPhone').value = contact.phone;
    document.getElementById('editImage').value = contact.image;
    document.getElementById('editLocation').value = contact.location;

    editModal.style.display = 'block'; // Display the modal
  }

  // Function to handle contact update
  editContactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const id = document.getElementById('editId').value;
    handleUpdate(id);
  });

  function handleUpdate(id) {
    const name = document.getElementById('editName').value;
    const email = document.getElementById('editEmail').value;
    const phone = document.getElementById('editPhone').value;
    const image = document.getElementById('editImage').value;
    const location = document.getElementById('editLocation').value;

    fetch(`http://localhost:3000/contacts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, image, location }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Contact updated:', data);
        editModal.style.display = 'none'; // Close the modal after update
        fetchContacts(); // Refresh contacts list
      })
      .catch(error => {
        console.error('Error updating contact:', error);
      });
  }

  // Function to handle contact deletion
  function handleDelete(id) {
    fetch(`http://localhost:3000/contacts/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Contact deleted:', data);
        fetchContacts(); // Refresh contacts list
      })
      .catch(error => {
        console.error('Error deleting contact:', error);
      });
  }

  // Event listener for close button in modal
  closeBtn.addEventListener('click', () => {
    editModal.style.display = 'none'; // Close the modal if close button is clicked
  });

  // Event listener for adding a new contact
  addBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const image = document.getElementById('image').value;
    const location = document.getElementById('location').value;

    fetch('http://localhost:3000/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, image, location }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Contact added:', data);
        fetchContacts(); // Refresh contacts list after adding
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('image').value = '';
        document.getElementById('location').value = '';
      })
      .catch(error => {
        console.error('Error adding contact:', error);
      });
  });

  // Function to perform search
  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    fetch('http://localhost:3000/contacts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const filteredContacts = data.filter(contact =>
          contact.name.toLowerCase().includes(searchTerm) ||
          contact.email.toLowerCase().includes(searchTerm) ||
          contact.phone.toLowerCase().includes(searchTerm) ||
          contact.location.toLowerCase().includes(searchTerm)
        );
        displayContacts(filteredContacts);
      })
      .catch(error => {
        console.error('Error fetching contacts for search:', error);
      });
  }

  // Event listener for typing in search input (to trigger on input change)
  searchInput.addEventListener('input', performSearch);

  // Fetch and display contacts when the page loads
  fetchContacts();
});
