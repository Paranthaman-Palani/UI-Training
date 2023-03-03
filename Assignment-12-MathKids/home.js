
let currentShape;
let selectedShapeIndex;
let firstPage=document.querySelector(".firstSession");
let secondPage = document.querySelector(".secondSession");
let thirdPage = document.querySelector(".thirdSession");
let tickMark = document.querySelectorAll(".tickMark");
let nextButton = document.querySelector("#next");
let selectedShape = document.querySelector(".shape");
let shapeKey= ['side','area','perimeter']

// -------------------------------------------------------- START :: SHAPE-CLICK  ---------------------------------------------------------------->
selectedShape.addEventListener("click",(event) =>{
    nextButton.style.display="block";
    currentShape = event.target.className;

    for(let index  in  shape ) {
        if(currentShape==shape[index].name){
            selectedShapeIndex=shape[index].id;
            break;
        }
    }
    mark();
})

/*

-------------@tick-mark function---------------->

*/


function mark(){
    tickMark.forEach(tick => tick.style.display="none");
    tickMark[selectedShapeIndex].style.display="block";
}

// -------------------------------------------------------- END :: SHAPE-CLICK  ---------------------------------------------------------------->

// -------------------------------------------------------- START :: NEXT-BUTTON-CLICK  ---------------------------------------------------------------->

    nextButton.addEventListener("click",()=>{
    firstPage.style.display="none"
//---------SECOND PAGE---------------------------->
    secondPage.style.display="flex"
    secondPage.innerHTML = ""
    let titleBar = document.createElement("h2")
    titleBar.append(shape[selectedShapeIndex]['title'])
    secondPage.append(titleBar);

    let userInput = document.createElement("input")
    userInput.setAttribute("id","input")
    userInput.setAttribute("type","text")
    secondPage.append(userInput)

    let calculateButton = document.createElement("button")
    calculateButton.setAttribute("id","calc")
    calculateButton.append("CALCULATE")
    secondPage.append(calculateButton)  

// -------------------------------------------------------- START :: CALCULATE_BUTTON-CLICK  ---------------------------------------------------------------->
    calculateButton.addEventListener("click",()=>{
    let value = input.value;
    if(value==""){
        alert("Please enter the value");
    }

    //START :: ELSE-BLOCK
    else{
        secondPage.style.display="none"
        thirdPage.style.display="flex"
        thirdPage.innerHTML=""
        shape[selectedShapeIndex].calculate(value);

        let shapeImage = document.createElement("div")
        shapeImage.setAttribute("class",currentShape)
        thirdPage.append(shapeImage)

        let shapeName = document.createElement("h2")
        shapeName.append(shape[selectedShapeIndex]['shapeName'])
        thirdPage.append(shapeName)
    
        let table = document.createElement("table")
        table.setAttribute("class","outputBox")
        for(let key of shapeKey){
             let row = document.createElement("tr");
             row.setAttribute("class","row")

            for(let i=0 ;i<shapeKey.length;i++){
                let box = document.createElement("td")
                box.setAttribute("class","tableData")
                  if(i==2) 
                      box.innerHTML=localStorage.getItem(key)
                else 
                    box.innerHTML=shape[selectedShapeIndex][key][i];
                row.append(box);
        }
        table.append(row)
    }
    thirdPage.append(table)
// -------------------------------------------------------- START :: START AGAIN BUTTON-CLICK  ---------------------------------------------------------------->
    let againButton = document.createElement("button");
    againButton.setAttribute("class","startAgain")
    againButton.append("START AGAIN")
    thirdPage.append(againButton)

    againButton.addEventListener("click",()=>{

            localStorage.clear();

            thirdPage.style.display="none";
            firstPage.style.display="block";
            tickMark[selectedShapeIndex].style.display="none";
            nextButton.style.display="none";

    });
// -------------------------------------------------------- END :: START-AGAIN-BUTTON-CLICK  ---------------------------------------------------------------->
    }
    //--------END::ELSE BLOCK


});
// -------------------------------------------------------- END :: CALCULATE-BUTTON-CLICK  ---------------------------------------------------------------->

});
// -------------------------------------------------------- END :: NEXT-BUTTON-CLICK  ---------------------------------------------------------------->

//----------------------------------------------------------- START :: SHAPE OBJECT ----------------------------------------------------->
const shape = [{
                    
                'id':0,
                'name':'circle',
                'title':'2. Enter Radius',
                'side' : ['RADIUS','r','cm'],
                'area' : ['AREA','&pi;r&#178','sq cm'],
                'perimeter' : ['PERIMETER','2&pi;r','cm'],
                'shapeName' : 'Circle',
                calculate : (value)=>{
                    localStorage.setItem('side', (value)+" "+shape[0].side[2]);
                    localStorage.setItem('area',(3.141*value*value).toFixed(2)+" "+shape[0].area[2]);
                    localStorage.setItem('perimeter',(2*3.141*value).toFixed(2)+" "+shape[0].perimeter[2]);   }
                    },
                {
                'id':1,
                'name':'triangle',
                'title':'2. Enter Side (Base & Height)',
                'side' : ['SIDE','s','cm'],
                'area' : ['AREA','0.433 * s * s','sq cm'],
                'perimeter' : ['PERIMETER','3 * s','cm'],
                'shapeName' : 'Equilateral Triangle',
                calculate : (value)=>{
                    localStorage.setItem('side', (value)+" "+shape[1].side[2]);
                    localStorage.setItem('area',(0.433*value*value).toFixed(2)+" "+shape[1].area[2]);
                    localStorage.setItem('perimeter',(3*value).toFixed(2)+" "+shape[1].perimeter[2]);   }
                },
                {
                    'id':2,
                    'name':'square',
                    'title':'2. Enter Side',
                    'side' : ['SIDE','s','cm'],
                    'area' : ['AREA','0.433 * s * s','sq cm'],
                    'perimeter' : ['PERIMETER','3 * s','cm'],
                    'shapeName' : 'Square',
                    calculate : (value)=>{
                        localStorage.setItem('side', (value)+" "+shape[2].side[2]);
                        localStorage.setItem('area',(value*value).toFixed(2)+" "+shape[2].area[2]);
                        localStorage.setItem('perimeter',(4*value).toFixed(2)+" "+shape[2].perimeter[2]);   }
                }]


//----------------------------------------------------------- END :: SHAPE OBJECT ----------------------------------------------------->







