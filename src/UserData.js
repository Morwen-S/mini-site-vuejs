
// save user's data in localStorage

export function save(userData) {
  const serialObj = JSON.stringify(userData);
  localStorage.setItem(userData.userLogin, serialObj);
  return "Sucsess!";
}

// extract user's data from localStorage

export function extract(userLogin) {
  const userData = JSON.parse(localStorage.getItem(userLogin));
  return userData;
}
