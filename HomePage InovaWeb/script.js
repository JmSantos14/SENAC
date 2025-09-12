



const buyModal = document.getElementById('buyModal')

function openModal() {
   buyModal.style.display = 'flex'
   document.body.style.overflow = 'hidden'

}

function closeModal() {
   buyModal.style.display = 'none'
   document.body.style.overflow = ''
}


const form = document.getElementById("formulario");

form.addEventListener("submit", function(e) {
   e.preventDefault(); 

   const name = document.getElementById("name");
   const email = document.getElementById("email");
   const password = document.getElementById("password");

   if (name.value.trim() === "") {
      alert("Nome não pode estar vazio");
      name.style.border = '1px solid red'
      return;
   }

   if (email.value.trim() === "") {
      alert("Email não pode estar vazio");
      email.style.border = '1px solid red'
      return;
   }

   if (password.value.trim() === "") {
      alert("Senha não pode estar vazia");
      password.style.border = '1px solid red'
      return;
   }

   alert("Formulário enviado com sucesso!");
   form.submit();
});

closeModal()




    