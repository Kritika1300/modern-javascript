const list = document.querySelector('ul');
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