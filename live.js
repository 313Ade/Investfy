const result = document.getElementById('result')
const filter = document.getElementById('filter')

const listItems = []
getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=10')
    const { results } = await res.json()

    // clear results
    result.innerHTML = ''

    //create elements using JS
    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li) //push the list items into the list items array

        li.innerHTML = `
        <img src='${user.picture.large}' alt='${user.name.first}'>
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
        `
        //all these above are gotten from the API

        result.appendChild(li)
    })

}

//loop through the input and get matches
function filterData(searchTerm) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide') //remove or add the css class 'hide'
        }
    })
}







//Just trying out ES6 destructuring  assignment

// const obj = {
//     myname: 'Jerry',
//     age: 32,
//     id: 1
// }

// //simple destructuring
// const {myname, age, id} = obj;
// console.log('name and age: ', myname, ',', age)
// const myName = obj.myname ;
// console.log(myName)


// async function myDisplay() {
//     let myPromise = new Promise (function( resolve, reject) {
//         resolve('Ich liebe die')
//     })
//     let demo = await myPromise
//     console.log(demo)
// }


// myDisplay()


