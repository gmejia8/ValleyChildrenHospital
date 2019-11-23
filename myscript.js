var modal = document.getElementById('id01');
const PatientLogIn = document.querySelector('id01');
const form = document.querySelector('#add-PatientLogIn-form');
console.log(form);
console.log('loglog');


//create elemet and render patient info 
db.collection('PatientLogIn').get().then(snapshot => {

    snapshot.docs.forEach(doc => {

        renderPatientLogIn(doc);

    });

});

function renderPatientLogIn(doc){
    console.log('getting into function');

    let li = document.createElement('li');
    let PatientUserName = document.createElement('span');
    let PatientPassword = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('date-id', doc.id);
    PatientUserName.textContent = doc.data().Username;
    PatientPassword.textContent = doc.data().Password;
    //cross.textContent = 'x';
   
    li.appendChild(PatientUserName);
    li.appendChild(PatientPassword);add-PatientLogIn-form
    li.appendChild(cross);

    PatientLogIn.appendChild(li);
}
    //getting data
   

    //saving the data
    form.addEventListener('submit', (e) => {


    e.preventDefault();
    db.collection('PatientLogIn').add({

    Username: form.uname.value,
    Password: form.psq.value

    });

    form.Username.value = '';
    form.Password.value = '';

 })

window.onclick = function(event){
    if(event.target == modal){
        this.modal.style.display = "none";
    }
    console.log('start');
}
