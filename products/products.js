if(localStorage.getItem('a') == 'true'){
    console.log('login');

    const table = document.getElementById('p-table')
    const expired = document.getElementById('expired')
    const lowStock = document.getElementById('lowStock')
    const orders = document.getElementById('orders')
    const products = document.getElementById('products')
    const users = document.getElementById('users')
    const logout = document.getElementById('logout')
    const count = document.getElementById('count')

    products.classList.add('header-click-page')

    orders.addEventListener('click', (e) => {
        e.preventDefault()
        location.pathname = '/orders/orders.html';
    })
    
    products.addEventListener('click', (e) => {
        e.preventDefault();
        location.pathname = '/products/products.html';
    })
    
    users.addEventListener('click', (e) => {
        e.preventDefault()
        location.pathname = '/users/users.html'
    })
    
    logout.addEventListener('click', (e) => {
        e.preventDefault()
        localStorage.setItem('a', false)
        location.pathname = '/index.html'
    })
    
    $(function () {
        $.ajax({
            url: 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products',
            type: 'GET',
            data: {
                format: 'json',
            },
            success: function (data, status) {
                // console.log(data);
                for (x in data) {
                    const { id, medicineName, medicineBrand, expiryDate, unitPrice, prescriptionRequired, stock } = data[x]
    
                    const containerTr = document.createElement('tr')
                    const idP = document.createElement('td');
                    const mNameP = document.createElement('td');
                    const mBrandP = document.createElement('td');
                    const expDateP = document.createElement('td');
                    const uPriceP = document.createElement('td');
                    const stockP = document.createElement('td');
                    
                    idP.innerText = `${id}`;
                    mNameP.innerText = `${medicineName}`;
                    mBrandP.innerText = `${medicineBrand}`;
                    expDateP.innerText = `${expiryDate}`;
                    uPriceP.innerText = `${unitPrice}`;
                    stockP.innerText = `${stock}`;
                    count.innerText = `Count: ${++x}`;
    
                    containerTr.append(idP);
                    containerTr.append(mNameP);
                    containerTr.append(mBrandP);
                    containerTr.append(expDateP);
                    containerTr.append(uPriceP);
                    containerTr.append(stockP);
                    table.append(containerTr);
    
                    lowStock.addEventListener('click', ()=>{
                        if(lowStock.checked == true){
                            table.append(containerTr)
                            if(stockP.innerText < 100){
                                count.innerText = `Count: ${++x}`
                            }
                        }
                        if(lowStock.checked == false && stockP.innerText < 100){
                            table.removeChild(containerTr)
                            count.innerText = `Count: ${--x}`
                        }
                    })
    
                    let expMonth = expiryDate.slice(3, 6);
                    let expMM = 0;
                    let expDD = +expiryDate.slice(0, 2)
                    let expYYYY = +expiryDate.slice(7, 11)
    
                    switch(expMonth){
                        case "Jan":
                            expMM = 01;
                            break;
                        case "Feb":
                            expMM = 02;
                            break;
                        case "Mar":
                            expMM = 03;
                            break;
                        case "Apr":
                            expMM = 04;
                            break;
                        case "May":
                            expMM = 05;
                            break;
                        case "Jun":
                            expMM = 06;
                            break;
                        case "Jul":
                            expMM = 07;
                            break;
                        case "Aug":
                            expMM = 08;
                            break;
                        case "Sep":
                            expMM = 09;
                            break;
                        case "Oct":
                            expMM = 10;
                            break;
                        case "Nov":
                            expMM = 11;
                            break;
                        case "Dec":
                            expMM = 12;
                            break;
                    }
    
                    // console.log(expiryDate.slice(3, 6), expMM, expDD, expYYYY);
    
                    let d = `${expYYYY}-${expMM}-${expDD}`;
                    let d1 = Date.now();
                    let d2 = new Date(d)
    
                    // console.log(d, d1, d2);
    
                    expired.addEventListener('click', ()=>{
                        if(expired.checked == true){
                            table.append(containerTr);
                            if(d1 > d2){
                                count.innerText = `Count: ${++x}`
                            }
                        }
                        if(expired.checked == false && d1 > d2){
                            table.removeChild(containerTr);
                            count.innerText = `Count: ${--x}`
                        }
                    })
                }
                console.log(status); // for the status of ajax request
            },
            error: function (xhr, status, error) {
                console.log('xhr error:', status, error, xhr)
                alert('Error: something went wrong, please wait or refresh!')
            },
        })
    })
} 
else {
console.log('logout');
}


