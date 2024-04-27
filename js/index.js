/*
  HTML for the project.
  Template
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">FULLNAME HERE</h5>
    </div>
  <small>EMAIL HERE<</small>
  </div>
*/

// Function to fetch contacts data
async function getContacts() {
  try {
      const response = await fetch('public/data/contacts.json');
      const contacts = await response.json();
      console.log(contacts);  // Logging the fetched data to the console
      renderContacts(contacts);  // Call to render the contacts
  } catch (error) {
      console.error('Failed to fetch contacts:', error);
  }
}

// Function to render contacts in the HTML
function renderContacts(contacts) {
  const contactsDiv = document.getElementById('contacts');
  contactsDiv.innerHTML = '';  // Clearing the initial text

  contacts.forEach(contact => {
      contactsDiv.innerHTML += `
          <div class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">${contact.name}</h5>
              </div>
              <small>${contact.email}</small>
          </div>
      `;
  });
}

// Initial call to fetch contacts
getContacts();
