if(localStorage.getItem('a') == 'true'){
    console.log('login');

    const table = document.getElementById('o-table');
    const newM = document.getElementById('new');
    const packedM = document.getElementById('packed');
    const inTransitM = document.getElementById('inTransit');
    const deliveredM = document.getElementById('delivered');
    const orders = document.getElementById('orders')
    const products = document.getElementById('products')
    const users = document.getElementById('users')
    const logout = document.getElementById('logout')
    const count = document.getElementById('count')

    orders.classList.add('header-click-page')

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
    
    $(function(){
        $.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders')
        .done(function(data, status){
            console.log(data[5]);
    
            for(x in data){
                const {id, customerName, orderDate, orderTime, amount, orderStatus} = data[x]
    
                const containerTr = document.createElement('tr')
                const idM = document.createElement('td');
                const customerM = document.createElement('td');
                const dateTimeContainer = document.createElement('td');
                const dateM = document.createElement('div');
                const orderTM = document.createElement('div');
                const amountM = document.createElement('td');
                const statusM = document.createElement('td');
    
                idM.innerText = `${id}`
                customerM.innerText = `${customerName}`
                dateM.innerText = `${orderDate}`
                orderTM.innerText = `${orderTime}`
                amountM.innerText = `$${amount}`
                statusM.innerText = `${orderStatus}`
                count.innerText = `Count: ${++x}`;

                idM.classList.add('td-font-color');
                amountM.classList.add('td-font-color');
                orderTM.classList.add('td-font-color')
                orderTM.classList.add('font-bold')
    
                dateTimeContainer.append(dateM)
                dateTimeContainer.append(orderTM)
                containerTr.append(idM)
                containerTr.append(customerM)
                containerTr.append(dateTimeContainer)
                containerTr.append(amountM)
                containerTr.append(statusM)
                table.appendChild(containerTr)
    
                newM.addEventListener('click', ()=>{
                    if(newM.checked == true && statusM.innerText == 'New'){
                        table.append(containerTr)
                        count.innerText = `Count: ${++x}`;
                        console.log(statusM.innerText);
                    }
                    else if(newM.checked == false && statusM.innerText == 'New'){
                        table.removeChild(containerTr)
                        count.innerText = `Count: ${--x}`;
                        console.log(false);
                    }
                })
    
                packedM.addEventListener('click', ()=>{
                    if(packedM.checked == true && statusM.innerText == 'Packed'){
                        table.append(containerTr)
                        count.innerText = `Count: ${++x}`;
                        console.log(statusM.innerText);
                    }
                    else if(packedM.checked == false && statusM.innerText == 'Packed'){
                        table.removeChild(containerTr)
                        count.innerText = `Count: ${--x}`;
                        console.log(false);
                    }
                })
    
                inTransitM.addEventListener('click', ()=>{
                    if(inTransitM.checked == true && statusM.innerText == 'InTransit'){
                        table.append(containerTr)
                        count.innerText = `Count: ${++x}`;
                        console.log(statusM.innerText);
                    }
                    else if(inTransitM.checked == false && statusM.innerText == 'InTransit'){
                        table.removeChild(containerTr)
                        count.innerText = `Count: ${--x}`;
                        console.log(false);
                    }
                })
    
                deliveredM.addEventListener('click', ()=>{
                    if(deliveredM.checked == true && statusM.innerText == 'Delivered'){
                        table.append(containerTr)
                        count.innerText = `Count: ${++x}`;
                        console.log(statusM.innerText);
                    }
                    else if(deliveredM.checked == false && statusM.innerText == 'Delivered'){
                        table.removeChild(containerTr)
                        count.innerText = `Count: ${--x}`;
                        console.log(false);
                    }
                })
            }
            console.log(status); // for getting the status of get request
        })
        .fail(function () {
            alert('Please wait while we fix this or refresh, an error occured!')
          })
    })
} 
else {
console.log('logout');
}



