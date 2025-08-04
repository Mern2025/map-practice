// **protektta function er vitore je first brakcet thake oitake ble perameter/
// **perameter kaj hocche information catch kora

let result = document.querySelector('.result')

let myArray = ['Mouse', 'Monitor', 'Keyboard', 'Printer']

myArray.map((item)=>{
  return  result.innerHTML += item + '<br>'
})



  