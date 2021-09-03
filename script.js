let error = document.getElementById("error");

let totalMarks = document.getElementById("total");
let averageMark = document.getElementById("ave");
let gradeMark = document.getElementById("grade");

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");


btn1.addEventListener("click", total);
btn2.addEventListener("click", average);
btn3.addEventListener("click", grade);

function total(){
    let sub1 = parseInt(document.getElementById("eng").value);
    let sub2 = parseInt(document.getElementById("mat").value);
    let sub3 = parseInt(document.getElementById("phy").value);
    let sub4 = parseInt(document.getElementById("comp").value);
    let sub5 = parseInt(document.getElementById("chem").value);
    let sub6 = parseInt(document.getElementById("bio").value);
    let sub7 = parseInt(document.getElementById("geo").value);
    let sub8 = parseInt(document.getElementById("f_maths").value);
    let sub9 = parseInt(document.getElementById("civic").value);
    let sub10 = parseInt(document.getElementById("econ").value);
    
    let i = false;
    [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9, sub10].forEach(value=>{
        if(value > 100){
            i = true;
        }
    });

    if(i){
        error.style.display = "block";
        error.innerHTML = "Please enter a mark in the range of 100";
    }

    // if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100){
    //     alert("Please enter mark in the range of 100")}
    else {
        let sum = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10;
        totalMarks.innerHTML = `English: ${sub1} <br>
         Mathematics: ${sub2} <br>
         Physics: ${sub3} <br>
         Computer: ${sub4} <br>
         Science: ${sub5} <br>
         Biology: ${sub2} <br>
         Geography: ${sub3} <br>
         Further Maths: ${sub4} <br>
         Civic Education: ${sub5} <br>
         Economics: ${sub5} <br>
         <span style= "border: 2px solid green">Total Scores: ${sum}</span>
         ` 
    }
}

function average(){
    let sub1 = parseInt(document.getElementById("eng").value);
    let sub2 = parseInt(document.getElementById("mat").value);
    let sub3 = parseInt(document.getElementById("phy").value);
    let sub4 = parseInt(document.getElementById("comp").value);
    let sub5 = parseInt(document.getElementById("chem").value);
    let sub6 = parseInt(document.getElementById("bio").value);
    let sub7 = parseInt(document.getElementById("geo").value);
    let sub8 = parseInt(document.getElementById("f_maths").value);
    let sub9 = parseInt(document.getElementById("civic").value);
    let sub10 = parseInt(document.getElementById("econ").value);
    
    let i = false;
    [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9, sub10].forEach(value=>{
        if(value > 100){
            i = true;
        }
    });

    if(i){
        error.style.display = "block";
        error.innerHTML = "Please enter a mark in the range of 100";
    }
    // if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100){
    //     alert("Please enter mark in the range of 100")
    // }
     else {
        let sum = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10;
        let ave = sum/10;
        averageMark.innerHTML = `Your average mark is ${ave}`;
    }
}

function grade(){
    let sub1 = parseInt(document.getElementById("eng").value);
    let sub2 = parseInt(document.getElementById("mat").value);
    let sub3 = parseInt(document.getElementById("phy").value);
    let sub4 = parseInt(document.getElementById("comp").value);
    let sub5 = parseInt(document.getElementById("chem").value);
    let sub6 = parseInt(document.getElementById("bio").value);
    let sub7 = parseInt(document.getElementById("geo").value);
    let sub8 = parseInt(document.getElementById("f_maths").value);
    let sub9 = parseInt(document.getElementById("civic").value);
    let sub10 = parseInt(document.getElementById("econ").value);

    let i = false;
    [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9, sub10].forEach(value=>{
        if(value > 100){
            i = true;
        }
    });

    if(i){
        error.style.display = "block";
        error.innerHTML = "Please enter a mark and in the range of 100";
    }

    // if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100){
    //     alert("Please enter mark in the range of 100")}
     else {
        let sum = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10;
        let ave = sum/10;
        
        if(ave >= 80 && ave <=100){
            gradeMark.innerHTML = `Your grade is A`;
        } else if(ave >= 60 && ave <=70){
            gradeMark.innerHTML = `Your grade is B`;
        } else if(ave >= 50 && ave <=60){
            gradeMark.innerHTML = `Your grade is C`;
        } else if(ave >= 45 && ave <=50){
            gradeMark.innerHTML = `Your grade is D`;
        } else if(ave >= 40 && ave <=45){
            gradeMark.innerHTML = `Your grade is E`;
        } else if (ave >= 0 && ave <=40){
            gradeMark.innerHTML = `Your grade is F`;
        } else {
            gradeMark.innerHTML = `No marks entered yet`;
        }
    }

}