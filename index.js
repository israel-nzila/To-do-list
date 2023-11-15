function addTask() {
  // Récupérer la valeur de la nouvelle tâche
  var tanput = document.getElementById("newTask");
  var taskValue = tas.value;

  // Vérifier si la valeur n'est pas vide
  if (taskValue.trim() !== "") {
      // Créer un nouvel élément de liste
      var li = document.createElement("li");
      li.textContent = taskValue;

      // Ajouter la tâche à la liste
      document.getElementById("taskList").appendChild(li);

      // Effacer le champ de saisie
      taskInput.value = "";
  }
}

// document.cookie = "client = utilisateur";
// let cookies= document.cookie = "client = utilisateur; expires= Fri, 10 Nov 2023 14:00:00 UTC";

// console.log(cookies)

let tableau;


localStorage.setItem("client", JSON.stringify(tableau.push));
let storage= localStorage.getItem("client");


