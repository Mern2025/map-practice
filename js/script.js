// **protektta function er vitore je first brakcet thake oitake ble perameter/
// **perameter kaj hocche information catch kora

let result = document.querySelector('.result')

let myArray = ['Mouse', 'Monitor', 'Keyboard', 'Printer', 'Processor']

myArray.map((item)=>{
    let div = document.createElement('div')
    div.classList.add('product_box')
    result.appendChild(div)
  return  result.innerHTML += item + '<br>'
})



  