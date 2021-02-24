const list = document.querySelector('ul');
const form = document.querySelector('form');
const addRecipe = (recipe) => {
       const time = recipe.created_at.toDate();
       let html = `<div> <li>${recipe.title}</div>
                  <div> ${time}</li> </div>`
       list.innerHTML += html;
};
db.collection('recipes').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        addRecipe(doc.data());
        //console.log(doc.data());
    });
    }).catch(err => {console.log(err)});

form.addEventListener('submit',e =>{
 e.preventDefault();
 const now = new Date();
 const recipe = {
     title: form.recipe.value,
     created_at: firebase.firestore.Timestamp.fromDate(now)
 };
 db.collection('recipes').add(recipe).then(() => {
    console/log("recipe added").catch(err => console.log(err));
});
});
