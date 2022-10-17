if(localStorage.getItem('a') == 'true'){
  console.log('login');

  const table = document.getElementById('u-table')
  const nameSearch = document.getElementById('nameSearch')
  const btnReset = document.getElementById('btn-reset')
  const orders = document.getElementById('orders')
  const products = document.getElementById('products')
  const users = document.getElementById('users')
  const logout = document.getElementById('logout')

  users.classList.add('header-click-page')

  orders.addEventListener('click', (e)=>{
    e.preventDefault()
    location.pathname = '/orders/orders.html';
})

products.addEventListener('click', (e)=>{
    e.preventDefault();
    location.pathname = '/products/products.html';
})

users.addEventListener('click', (e)=>{
    e.preventDefault()
    location.pathname = '/users/users.html'
})

logout.addEventListener('click', (e)=>{
    e.preventDefault()
    localStorage.setItem('a', false)
    location.pathname = '/index.html'
})

nameSearch.addEventListener('keypress', (e)=>{
  let nSearchAlert = nameSearch.value;
  if(e.key === 'Enter'){
    e.preventDefault()
    if(nSearchAlert.length < 2){
      alert("Please enter at least 2 characters.")
    } 
  }
})


function getInitialTodoList() {
    const req = new XMLHttpRequest()
  
    
      req.open('get', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users', true)
    
      req.onreadystatechange = function () {
      
        if (this.readyState === 4) {
          if (this.status == 200) {
            const data = JSON.parse(this.responseText)
            // console.log('4 => DONE: ', data)

            for(x in data){
                const {id, profilePic, fullName, dob, gender, currentCity, currentCountry} = data[x]

                const containerTr = document.createElement('tr');
                const idU = document.createElement('td');
                const uAvatar = document.createElement('td');
                const uAvatarImg = document.createElement('img') 
                const fullNameU = document.createElement('td');
                const dobU = document.createElement('td');
                const genderU = document.createElement('td');
                const currentLocation = document.createElement('td');

                idU.innerText = `${id}`;
                uAvatarImg.src = `${profilePic}`;
                fullNameU.innerText = `${fullName}`;
                dobU.innerText = `${dob}`;
                genderU.innerText = `${gender}`;
                currentLocation.innerText = `${currentCity}, ${currentCountry}`;

                uAvatar.append(uAvatarImg)
                containerTr.append(idU)
                containerTr.append(uAvatar)
                containerTr.append(fullNameU)
                containerTr.append(dobU)
                containerTr.append(genderU)
                containerTr.append(currentLocation)
                table.append(containerTr)

                nameSearch.addEventListener('keypress', (e)=>{
                  let fullNameUpper = fullName.toUpperCase();
                  let nSearchValue = nameSearch.value.toUpperCase();
                  let searchVal = fullNameUpper.search(nSearchValue);

                  if(e.key === 'Enter'){
                    e.preventDefault();
                    if(nSearchValue.length >= 2 && searchVal > 0){
                      containerTr.classList.remove('display-none')
                      console.log(nSearchValue.length, searchVal);
                    } else if(nSearchValue.length >= 2 && searchVal < 0){
                      containerTr.classList.add('display-none')
                    }
                  }
                })

                btnReset.addEventListener('click', (e)=>{
                  e.preventDefault()
                  containerTr.classList.remove('display-none')
                  nameSearch.value = '';
                })
            }

          } else {
            console.log('Error:', this.status)
            alert("An error occurred, please wait while we fix this or refresh!")
          } 
        }
      }
      req.send()
  }
  getInitialTodoList()
} 
else {
  console.log('logout');
}

