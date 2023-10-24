fetch('https://reqres.in/api/users', {
}).then(response => {
  if (!response.ok) {
    console.log('Error fetching');
    return;
  }
  return response.json()
})
  .then(data => {
    console.log(data.data[2].first_name)
  })
  .catch(error => { console.log(error) });
