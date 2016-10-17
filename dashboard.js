// 1. Count the number of records in the "Current Quarter Details" table.
var recordNum = document.querySelectorAll('td');
var howMany = recordNum.length;
console.log(howMany)

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.

var fourimgs = document.querySelectorAll('img');
fourimgs[0].setAttribute('src', 'http://unsplash.it/400?image=401')
fourimgs[0].setAttribute('alt', 'Image 1')
fourimgs[1].setAttribute('src', 'http://unsplash.it/400?image=501')
fourimgs[1].setAttribute('alt', 'Image 2')
fourimgs[2].setAttribute('src', 'http://unsplash.it/400?image=601')
fourimgs[2].setAttribute('alt', 'Image 3')
fourimgs[3].setAttribute('src', 'http://unsplash.it/400?image=701')
fourimgs[3].setAttribute('alt', 'Image 4')
console.log(fourimgs)

// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.

var threeDots = document.querySelectorAll('.text-muted');
threeDots.forEach(function(threeDot) {
    var rando = '$' + (Math.random().toFixed(2) * 10000)
    threeDot.innerHTML = rando
    console.log(threeDot)
})


// 4. Change the currently selected left side menu item from Overview to Reports.

var menus = document.querySelectorAll('.nav-sidebar > li')
menus[0].classList.remove('active')
menus[1].classList.add('active')
console.log(menus)

// 5. Set the default search input value to "Q4 sales".

var qSales = document.querySelectorAll('.form-control')
qSales.forEach(function(qSale) {
    qSale.setAttribute('placeholder', 'Q4 sales')
    console.log(qSale)
})
//console.log(qSale)

// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.

var rows = document.querySelectorAll('.table')
rows.forEach(function(row) {
    row.classList.add('table-hover')
})


// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
var successClass = document.querySelectorAll('tbody > tr')
    successClass[6].classList.add('success')
    successClass[7].classList.add('success')
    successClass[8].classList.add('success')
    successClass[9].classList.add('success')
console.log(successClass)

// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.

var rows = document.querySelectorAll('thead > tr > th')
    rows[0].innerHTML = 'ID'
    rows[1].innerHTML = 'First Name'
    rows[2].innerHTML = 'Last Name'
    rows[3].innerHTML = 'Department'
    rows[4].innerHTML = 'Client'

    console.log(rows)


// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]

var arrayOfObjects = []
var moreObjects = document.querySelectorAll('tbody > tr')
moreObjects.forEach(function(moreObject) {
    var rowOfObject = {
        id:Number(moreObject.children[0].innerHTML.replace(',', '')),
        firstName:moreObject.children[1].innerHTML,
        lastName:moreObject.children[2].innerHTML,
        department:moreObject.children[3].innerHTML,
        client:moreObject.children[4].innerHTML,
    }
    arrayOfObjects.push(rowOfObject)
})
console.log(arrayOfObjects)


// 10. Make each word in the table capitalized.

var tableCaps = document.querySelectorAll('table');
tableCaps.forEach(function(tableCap){
    tableCap.classList.add('text-capitalize')
})
