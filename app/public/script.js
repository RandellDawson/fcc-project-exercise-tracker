// const exerciseForm = document.getElementById("exercise-form");

// exerciseForm.addEventListener("submit", () => {
//   const userId = document.getElementById("uid").value;
//   exerciseForm.action = `/api/users/${userId}/exercises`;

//   exerciseForm.submit();
// });

const userForm = document.getElementById('user-form');
const exerciseForm = document.getElementById('exercise-form');

const username = document.getElementById('uname');
const userMessage = document.getElementById('user-message');
const uid = document.getElementById('uid');
const exerciseMessage = document.getElementById('exercise-message');

userForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(userForm);
  const payload = new URLSearchParams(formData);
  fetch('/api/users', {
    method: 'POST',
    body: payload,
  })
    .then(res => res.json())
    .then(data => {
      const message =`<strong>${username.value}</strong> has following _id:
        <br />${data._id}`;
      // username.value = '';
      userMessage.innerHTML = message;
      uid.value = data._id;
    });
})

username.addEventListener('focus', (event) => {
  uid.value = '';
  userMessage.innerHTML = '';
});