let level=null;
let currentSubject=null;
let currentTab="quiz";
let quizIndex=0;
let score=0;

function selectLevel(l){
  level=l;
  document.getElementById("levelSelection").classList.add("hidden");
  document.getElementById("mainContent").classList.remove("hidden");
}

function selectSubject(sub){
  currentSubject=sub;
  document.getElementById("subjectTitle").innerText=sub.toUpperCase();
  showTab("quiz");
}

function showTab(tab){
  currentTab=tab;
  const contentDiv=document.getElementById("tabContent");
  contentDiv.innerHTML="";
  const data=subjectsData[level][currentSubject][tab];
  if(tab==="quiz"){ quizIndex=0; startQuiz(); }
  else if(tab==="exercise"){
    let html="";
    data.forEach(ex=>{
      html+=`<div><h3>${ex.title}</h3><p>${ex.content}</p>`;
      if(ex.image) html+=`<img src="${ex.image}">`;
      html+="</div><hr>";
    });
    contentDiv.innerHTML=html;
  }
  else if(tab==="videos"){
    let html="";
    data.forEach(v=>{
      html+=`<div><h3>${v.title}</h3><video src="${v.src}" controls></video></div><hr>`;
    });
    contentDiv.innerHTML=html;
  }
  else if(tab==="bonus"){
    let html="";
    data.forEach(b=>{
      html+=`<div><h3>${b.title}</h3><p>${b.content}</p></div><hr>`;
    });
    contentDiv.innerHTML=html;
  }
}

function startQuiz(){
  const quizData=subjectsData[level][currentSubject]["quiz"];
  if(quizIndex>=quizData.length){
    document.getElementById("tabContent").innerHTML=`<p>Quiz terminé ! Score : ${score} / ${quizData.length}</p>`;
    updateProgress();
    return;
  }
  const q=quizData[quizIndex];
  let html=`<p>${q.question}</p>`;
  if(q.image) html+=`<img src="${q.image}">`;
  q.choices.forEach(c=>{
    html+=`<button onclick="answerQuiz('${c}')">${c}</button> `;
  });
  document.getElementById("tabContent").innerHTML=html;
}

function answerQuiz(choice){
  const q=subjectsData[level][currentSubject]["quiz"][quizIndex];
  if(choice===q.answer) score++;
  quizIndex++;
  startQuiz();
  updateProgress();
}

function updateProgress(){
  const total=subjectsData[level][currentSubject]["quiz"].length;
  const percent=total>0? Math.round(score/total*100):0;
  document.getElementById("progressFill").style.width=percent+"%";
  document.getElementById("scoreText").innerText=`Score : ${score} / ${total}`;
}
