const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.themeToggler');

const Orders = [
    {
        productName: 'Foldable Mini Drone',
        productNumber: '85631',
        paymentStatus: 'Due',
        shipping: 'Pending'
    },
    {
        productName: 'LARVENDER KF102 Drone',
        productNumber: '36378',
        paymentStatus: 'Refunded',
        shipping: 'Declined'
    },
    {
        productName: 'Ruko F11 Pro Drone',
        productNumber: '49347',
        paymentStatus: 'Due',
        shipping: 'Pending'
    },
    {
        productName: 'Drone with Camera Drone',
        productNumber: '96996',
        paymentStatus: 'Paid',
        shipping: 'Delivered'
    },
    {
        productName: 'GPS 4k Drone',
        productNumber: '22821',
        paymentStatus: 'Paid',
        shipping: 'Delivered'
    },
    {
        productName: 'DJI Air 2S',
        productNumber: '81475',
        paymentStatus: 'Due',
        shipping: 'Pending'
    },
    {
        productName: 'Lozenge Drone',
        productNumber: '00482',
        paymentStatus: 'Paid',
        shipping: 'Delivered'
    }
]

// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// hide sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})


// fill orders
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                            <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.paymentStatus}</td>
                            <td class="${order.shipping ===
                            'Declined' ? 'danger' : order.shipping ===
                            'Pending' ? 'warning' : 'primary'}">
                            ${order.shipping}</td>
                            <td class="primary">Details</td>
                            `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);                        

})