const quiz = [
  {
    question: " 1. What is JavaScript?",
    options: [
      "Programming Language",
      "Database",
      "Browser",
      "Operating System"
    ],
    answer: "Programming Language"
  },

  {
    question: " 2. Which keyword is used to declare a variable in JavaScript?",
    options: [
      "let",
      "int",
      "float",
      "char"
    ],
    answer: "let"
  },

  {
    question: " 3. Which company developed JavaScript?",
    options: [
      "Netscape",
      "Microsoft",
      "Google",
      "Apple"
    ],
    answer: "Netscape"
  },

  {
    question: " 4. Which symbol is used for single-line comments?",
    options: [
      "//",
      "/* */",
      "#",
      "."
    ],
    answer: "//"
  },

  {
    question: " 5. Which method displays a message in an alert box?",
    options: [
      "alert()",
      "prompt()",
      "console.log()",
      "print()"
    ],
    answer: "alert()"
  },

  {
    question: " 6. Which method is used to print output in the browser console?",
    options: [
      "console.log()",
      "document.write()",
      "alert()",
      "print()"
    ],
    answer: "console.log()"
  },

  {
    question: " 7. Which keyword is used to define a constant?",
    options: [
      "const",
      "let",
      "var",
      "static"
    ],
    answer: "const"
  },

  {
    question: " 8. Which operator is used for strict equality?",
    options: [
      "===",
      "==",
      "=",
      "!="
    ],
    answer: "==="
  },

  {
    question: " 9. Which loop is guaranteed to execute at least once?",
    options: [
      "do...while",
      "while",
      "for",
      "for...in"
    ],
    answer: "do...while"
  },

  {
    question: " 10. Which method converts JSON data into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "parseInt()",
      "toString()"
    ],
    answer: "JSON.parse()"
  }
];

var index = 0;
var id;
var second;
var score = 0;
var flag = false;
var tempQuaction = 0;
var skip = [];


document.querySelector('.wrapper').style.display = "none";

document.querySelector('h1').onclick = function () {
  document.querySelector('.wrapper').style.display = "block";
  document.querySelector('h1').style.display = "none";
  Quiz(index);

}




function Timer(t1, t2) {
  setTimeout(() => {
    document.querySelectorAll('.timer span')[0].innerHTML = "00";
    second = document.querySelectorAll('.timer span')[1].innerText = "59";
  }, t1)

  id = setInterval(() => {
    if(second == 0)
    {
      clearInterval(id);
      index++;
      Quiz(index);
    }
    document.querySelectorAll('.timer span')[1].innerText = `${second--}`;
  }, t2)
}

function Quiz(index) {
  document.querySelectorAll('.timer span')[0].innerHTML = "01";
  document.querySelectorAll('.timer span')[1].innerText = "00";

  if(index >= quiz.length )
  {
    document.querySelector('.Submit').style.display = "none";
    return;
  }

    document.querySelector('.Submit').style.display = "block";

  if (index == 0) {
    document.querySelector('.pre').classList.add("no-cursor");
    document.querySelector('.pre').disabled = true;
    Timer(1000, 1000);
  }else if (index == 9) {
    document.querySelector('.next').disabled = true;
    document.querySelector('.next').classList.add("no-cursor");

  }else{
    document.querySelector('.pre').classList.remove("no-cursor");
    document.querySelector('.pre').disabled = false;
     document.querySelector('.next').classList.remove("no-cursor");
    document.querySelector('.next').disabled = false;
    Timer(1000, 1000);
  }

  document.querySelector('.quaction').innerHTML = ` 
        
        <div class="">
            <p><b>${quiz[index].question}</b></p>
            
            <div class="options">
            <aside><input name="r" value="${quiz[index].options[0]}" type="radio" form="myform" id="id1" "> <lable for="id1">${quiz[index].options[0]}</lable><br></aside>
            <aside><input name="r" value="${quiz[index].options[1]}" type="radio" form="myform" id="id2" "> <lable for="id2">${quiz[index].options[1]}</lable><br></aside>
            <aside><input name="r" value="${quiz[index].options[2]}" type="radio" form="myform" id="id3" "> <lable for="id3">${quiz[index].options[2]}</lable><br></aside>
            <aside><input name="r" value="${quiz[index].options[3]}" type="radio" form="myform" id="id4" "> <lable for="id4">${quiz[index].options[3]}</lable><br></aside>
            </div>

  
            </div>`


}


document.querySelector('.next').onclick = function (e) {
  e.preventDefault();
  clearInterval(id);
  skip.push(index);
  Quiz(++index);
  // console.log(index);
  
}

document.querySelector('.pre').onclick = function (e) {
  e.preventDefault();
  clearInterval(id);
  Quiz(--index);

}

function result()
{
 document.querySelector('.wrapper').style.display="none";
 document.querySelector('.result').style.display="block";
 document.querySelector('.result').innerHTML = score;
}

document.querySelector('form').onsubmit = function (e) {
  e.preventDefault();
  clearInterval(id);

  for (let i = 0; i < quiz[index].options.length; i++) {

    if (e.target[i].checked) {

      if (e.target[i].value == quiz[index].answer) {
        console.log("right");
        score++;
      }
    }
  }
  
    if(index == quiz.length-1)
    {

      flag = true
      document.querySelector('.pre').style.visibility="hidden";
      document.querySelector('.next').style.visibility="hidden";
       if(skip.length-1 > tempQuaction)
       {
        index = skip[tempQuaction];
       }
       else
       {
        result();
        return;
       }

      
      Quiz(index);
      return;
    }
   
  if(flag)
    {
      if(skip.length-1 > tempQuaction)
      {
        tempQuaction++;
      }
      else
       {
        result();
        return;
       }
      index = skip[tempQuaction];
      Quiz(index);
      return;
    }

  
  
  Quiz(++index);
}