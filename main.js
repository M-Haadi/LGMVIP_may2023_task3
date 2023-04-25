
const names=document.getElementById('name')
const email=document.getElementById('email')
const website=document.getElementById('website')
const imgLink=document.getElementById('image-link')
const gender=document.querySelectorAll('input[type="radio"]');
const skills=document.querySelectorAll('input[type="checkbox"]');
const Enrollbtn=document.getElementById('EnrollStudent');
const Clearbtn=document.getElementById('clear');

const mydiv=document.querySelector('.enrolled-student-div')
const student_list=document.querySelector('.student-list')


let stDataDiv=false;  //already created means if the container that will hold info about student is already created so that th enext time we dont need to create it again instead add info in that.
Enrollbtn.addEventListener('click',()=>{
     
     
     if(names.value!="" && email.value!="" && website.value!="" && imgLink.value!="")
     {

          // student_list.style.height="300px"
if(stDataDiv==false){
     studentData=document.createElement('div');
          studentData.classList.add('studentData')
          stDataDiv=true;
}
          
          
let genders;
let skill=""

        for(i of gender)
        {
          if(i.checked){
                genders=i.value;
          }
        }
        for(i of skills){
          if(i.checked){
                skill+=i.value+" ";
          }
        }
       
        
        
        
        

          const HtmlData=` 
       
          <div class="stData_info">
            <p class="st-name">${names.value}</p>
            <p class="st-gender">${genders}</p>
            <p class="st-email">${email.value}</p>
            <p><a href="#" class="st-website">${website.value}</a></p>
            <p class="st-lang">${skill}</p>
          </div>
          <div class="st-img">
          <img
          src="${imgLink.value}"
          alt="student image"
          width="150"
          height="150"
        />
          `
         studentData.insertAdjacentHTML('beforeend',HtmlData)
          student_list.insertAdjacentElement('beforeend',studentData);

     }
})

Clearbtn.addEventListener('click',()=>{
    let inputs= document.getElementsByTagName('input');
    
    
   for(i of inputs)
   if(i.type=='checkbox' || i.type=='radio' ){
  
     i.checked=false;
   }
   else{
       i.value="";
   }
   
    
    
})
   


