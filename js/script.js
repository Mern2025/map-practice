// **protektta function er vitore je first brakcet thake oitake ble perameter/
// **perameter kaj hocche information catch kora

// let result = document.querySelector('.result')

// let myArray = ['Mouse', 'Monitor', 'Keyboard', 'Printer', 'Processor']

// myArray.map((item)=>{
//     let div = document.createElement('div')
//     div.classList.add('product_box')
//     result.appendChild(div)
//   return  result.innerHTML += item + '<br>'
// })



// -----***----------
// filter and find method =>
    // 1 first eitai loop er procces run hoi
   //  2 kaj hocche order wise item search kora

let input = document.querySelector('input')
let button = document.querySelector('button')
let result = document.querySelector('.result')
let shop = ['Mango', 'Apple', 'Banana', 'Jackfruit', 'Orange']
let p = document.querySelector('p')


// button.addEventListener('click',()=>{
//     let findData = shop.find((items)=>{
//       return  items.toLowerCase().trim() === input.value.toLowerCase().trim();
      
//     })
//     console.log(findData)
//     result.innerHTML= input.value

//     // reset part
//     input.value = ''
// })


shop.map((item)=>{
    let div = document.createElement('div')
    div.classList.add('item_box')
     result.innerHTML += item + '<br>'
    result.appendChild(div)
})

button.addEventListener('click',()=>{
    result.innerHTML = ''
    if(input.value == ''){
        p.style.color = 'red'
        return p.innerHTML = 'please Enter a text'
    }
    p.innerHTML = ''
    let findData = shop.find((items)=>{
     return  items == input.value
    })
    console.log(findData)
    result.innerHTML = input.value
    result.style.color = 'green'
    input.value = ''
  
})
