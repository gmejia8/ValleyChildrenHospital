const PatientLogIn = document.querySelector('#PatientLogIn');
const form = document.querySelector('#add-PatientLogIn-form');
console.log(form);
//create elemet and render patient info 

// window.onclick = function(event){
//     if(event.target == modal){
//         this.modal.style.display = "none";
//     }
// }

function renderPatientLogIn(doc){

    let li = document.createElement('li');
    let PatientUserName = document.createElement('span');
    let PatientPassword = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('date-id', doc.id);
    PatientUserName.textContent = doc.data().Username;
    PatientPassword.textContent = doc.data().Password;


    li.appendChild(PatientUserName);
    li.appendChild(PatientPassword);


    PatientLogIn.appendChild(li);
    
 }

//getting data
// db.collection('PatientLogIn').get().then(snapshot => {

//     snapshot.docs.forEach(doc => {

//         renderPatientLogIn(doc);

//     });

// });
//saving the data
// form.addEventListener('submit', (e) => {


//     e.preventDefault();
//     db.collection('PatientLogIn').add({

//     Username: form.uname.value,
//     Password: form.psq.value

//     });


// });



  
  
function visualacuity(){
    webgazer.setRegression('ridge').setTracker('clmtrackr')
    .setGazeListener(function (data, elapsedTime) {
              if (data == null) {
                  return;
              }
              xprediction = data.x; //these x coordinates are relative to the viewport 
              yprediction = data.y; //these y coordinates are relative to the viewport
          }).begin().showPredictionPoints(true);
        }
       
        
  function Eyemovement(){
    webgazer.setRegression('ridge').setTracker('clmtrackr')
    .setGazeListener(function (data, elapsedTime) {
              if (data == null) {
                  return;
              }
              xprediction = data.x; //these x coordinates are relative to the viewport 
              yprediction = data.y; //these y coordinates are relative to the viewport
          }).begin().showPredictionPoints(true);
        }
function Pulminary(){
    webgazer.setRegression('ridge').setTracker('clmtrackr')
    .setGazeListener(function (data, elapsedTime) {
              if (data == null) {
                  return;
              }
              xprediction = data.x; //these x coordinates are relative to the viewport 
              yprediction = data.y; //these y coordinates are relative to the viewport
          }).begin().showPredictionPoints(true);
        }