let getElement_Buy_Ticket = document.querySelectorAll('.btn-buy-ticket');
let getElement_modal = document.querySelector('.modal');
let getElement_close = document.querySelector(".close-modal");
let getElement_modalcontainer = document.querySelector(".modal-container")
let header = document.querySelector('#header')
let mobileMenu = document.querySelector('#mobile-menu')
let heartHeight = header.clientHeight
let listNav = document.querySelectorAll("#nav li a")
let li_end = document.querySelector(".nav_end")
let li_firt = document.querySelector("#nav>.nav_firt")




li_firt.onclick = function(){
    header.style.height = null

}


listNav.forEach(obj=>{
    obj.onclick = function(event){
        if (obj.classList ==="nav_firt"){
            header.style.height = null

        }else if (obj.classList ==="nav_end"){
            header.style.height = "auto"
        

        }else if (header.clientHeight === heartHeight){
            header.style.height = "auto"
        
    
        }else{
            header.style.height = null
            
        }
        
            
        


    }
})


li_end.onclick = function(event){
    event.preventDefault()
    
    
}





let open_modal = function(){
    getElement_modal.classList.add("open");
};

let close_modal = function(){
    getElement_modal.classList.remove('open')
}


mobileMenu.onclick = function(){
    if (header.clientHeight === heartHeight ){
        header.style.height = "auto"

    }else{
        header.style.height = null;
    }
}

getElement_Buy_Ticket.forEach(function(obj){
    obj.addEventListener('click',open_modal)

    })
   
getElement_close.addEventListener('click',close_modal)

getElement_modal.addEventListener("click",close_modal);


getElement_modalcontainer.addEventListener('click',function(event){
    event.stopPropagation()
})



   
     

    


