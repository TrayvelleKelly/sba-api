// Fetch Request -> JSON placeholder
// https://jsonplaceholder.typicode.com/
export async function getPhotos() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        let body =document.querySelector('body')
        console.log(json[0].thumbnailUrl)
        let image = document.createElement('img')
        image.setAttribute('src', json[0].thumbnailUrl)
        body.append(image)
      });
  }
  
export const handleClick = () => {
    console.log('Button clicked!');

};
// ui.js
export function displayEmployees(employees) {
    const gallery = document.getElementById('employeeGallery');
    gallery.innerHTML = '';

    employees.forEach(employee => {
        const profile = document.createElement('div');
        profile.classList.add('employee-profile');
        profile.innerHTML = `
            <h2>${employee.name}</h2>
            <p>Email: ${employee.email}</p>
            <p>Phone: ${employee.phone}</p>
        `;
        gallery.appendChild(profile);
    });
}
