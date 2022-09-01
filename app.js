let dropdownkeys = document.getElementById('dropdownkeys')
let dropdownvalues = document.getElementById('dropdownvalues')


let cloths = {
    newArrivals:{
   
        silk:{
             size: 45, 
              color: 12,
              price:12000
          }
          ,
          
          chiffon:{
              size: 45, 
              color: 12,
              price:12000
          }
          ,
          
          lawn:{
              size: 45, 
              color: 12,
              price:12000
          }
      },
      bestsellers:{
  
          silk:{
               size: 45, 
                color: 12,
                price:12000
            }
            ,
            
            chiffon:{
                size: 45, 
                color: 12,
                price:12000
            }
            ,
            
            lawn:{
                size: 45, 
                color: 12,
                price:12000
            }
        },   
     
      festivecollections:{
  
          silk:{
               size: 45, 
                color: 12,
                price:12000
            }
            ,
            
            chiffon:{
                size: 45, 
                color: 12,
                price:12000
            }
            ,
            
            lawn:{
                size: 45, 
                color: 12,
                price:12000
            }
        },
     readytowear:{
  
      silk:{
           size: 45, 
            color: 12,
            price:12000
        }
        ,
        
        chiffon:{
            size: 45, 
            color: 12,
            price:12000
        }
        ,
        
        lawn:{
            size: 45, 
            color: 12,
            price:12000
        }
    },
      unsticthed :{
  
          silk:{
               size: 45, 
                color: 12,
                price:12000
            }
            ,
            
            chiffon:{
                size: 45, 
                color: 12,
                price:12000
            }
            ,
            
            lawn:{
                size: 45, 
                color: 12,
                price:12000
            }
        },

}
var searchItem
function searchfunc() {
    var dressStyle = dropdownvalues.selectedIndex
    let clothmain = Object.values(Object.values(cloths)[dressCode])[dressStyle]
    let clothtitle = Object.keys(clothmain)
    let clothvalue = Object.values(clothmain)
    let title = document.getElementById('title')
    let values = document.getElementById('values')
    for (i = 0; i < clothvalue.length; i++) {
        ` ${title.innerHTML += clothtitle[i]} : 
   ${values.innerHTML += clothvalue[i]}
    `
    } 
}



let clothKeys = Object.keys(cloths)
let clothValues



function fillmainkeys() {
    console.log(clothKeys)
    for (i = 0; i < clothKeys.length; i++) {
        dropdownkeys.innerHTML+= `<option>${clothKeys[i]}</option>`
    }

}
fillmainkeys();

let dressCode
let dressStyle
function fillMainObj() {
    dressCode = dropdownkeys.selectedIndex
    clothValues = Object.keys(Object.values(cloths)[dressCode]) 
    dropdownvalues.disabled = false;
    for (i = 0; i < clothValues.length; i++) {
        dropdownvalues.innerHTML += `<option>${clothValues[i]}</option>`
    }
    let search = document.getElementById('search')
    search.disabled = false;



}
