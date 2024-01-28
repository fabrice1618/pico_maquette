document.addEventListener('DOMContentLoaded', function() {
    // Récupération des éléments du DOM
    const btnAjouterUtilisateur = document.getElementById('btnAjouterUtilisateur');
    const formUtilisateurAdd = document.getElementById('formUtilisateurAdd');
    formUtilisateurAdd.style.display = 'none';
    const formUtilisateurUpdate = document.getElementById('formUtilisateurUpdate');
    formUtilisateurUpdate.style.display = 'none';
    const formUtilisateurDelete = document.getElementById('formUtilisateurDelete');
    formUtilisateurDelete.style.display = 'none';
    const listUtilisateur = document.getElementById('listUtilisateur');

    //listUtilisateur.style.display = 'block';

    // Afficher le formulaire "Ajouter Utilisateur" lors du clic sur le bouton
    btnAjouterUtilisateur.addEventListener('click', function() {
      // Afficher le formulaire et masquer les boutons de modification/suppression
      formUtilisateurAdd.style.display = 'block';
      formUtilisateurUpdate.style.display = 'none';
      formUtilisateurDelete.style.display = 'none';
      listUtilisateur.style.display = 'none';
      this.style.display = 'none';
    });

    // Ajouter un événement pour le bouton de modification
    document.querySelectorAll('.btn-modifier').forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Empêcher le comportement par défaut du lien

            // Récupérer les informations de l'utilisateur correspondant
            const login = this.closest('.list-group-item').dataset.login;
            const role = this.closest('.list-group-item').dataset.role;
            const actif = this.closest('.list-group-item').dataset.actif;
            const description = this.closest('.list-group-item').dataset.description;

            // Pré-remplir le formulaire de modification avec ces informations
            document.getElementById('inputLoginUpdate').value = login;
            document.getElementById('inputRoleUpdate').value = role;
            document.getElementById('inputDescriptionUpdate').value = description;
            document.getElementById('inputPasswordUpdate').value = '********';
            if (actif === 'Actif') {
              document.getElementById('inputActifUpdate').checked = true;
            } else {
              document.getElementById('inputActifUpdate').checked = false;
            }

            // Afficher le formulaire de modification et masquer les autres
            formUtilisateurAdd.style.display = 'none';
            formUtilisateurUpdate.style.display = 'block';
            formUtilisateurDelete.style.display = 'none';
            listUtilisateur.style.display = 'none';
            btnAjouterUtilisateur.style.display = 'none';
        });
    });

    // Ajouter un événement pour le bouton de suppression
    document.querySelectorAll('.btn-supprimer').forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Empêcher le comportement par défaut du lien

            // Récupérer les informations de l'utilisateur correspondant
            const login = this.closest('.list-group-item').dataset.login;
            const role = this.closest('.list-group-item').dataset.role;
            const actif = this.closest('.list-group-item').dataset.actif;
            const description = this.closest('.list-group-item').dataset.description;

            // Pré-remplir le formulaire de modification avec ces informations
            document.getElementById('inputLoginDelete').value = login;
            document.getElementById('inputRoleDelete').value = role;
            document.getElementById('inputDescriptionDelete').value = description;
            document.getElementById('inputPasswordDelete').value = '********';
            if (actif === 'Actif') {
              document.getElementById('inputActifDelete').checked = true;
            } else {
              document.getElementById('inputActifDelete').checked = false;
            }

            // Afficher le formulaire de suppression et masquer les autres
            formUtilisateurAdd.style.display = 'none';
            formUtilisateurUpdate.style.display = 'none';
            formUtilisateurDelete.style.display = 'block';
            listUtilisateur.style.display = 'none';
            btnAjouterUtilisateur.style.display = 'none';
        });
    });
    
  });

