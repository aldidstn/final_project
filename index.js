function getPassword() {
  let chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789 !@#$%^&*()_+?<>:{}[]"~`/|';
  let passLength = 20;
  let password = '';

  for (let i = 0; i < passLength; i++) {
    let temp = Math.floor(Math.random() * chars.length);
    password += chars.substring(temp, temp + 1);
  }
  document.getElementById('password').value = password;
}

function resetPass(){
  let password='';
  document.getElementById('password').value = password;
}