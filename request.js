// buscarEndereco.onclick = async () => {
//     let value = cep.value;

    const buscarEndereco = async () => {
      const response = await fetch(`viacep.com.br/ws/${cep.value}/json/`);
      console.log(response.json());
    };

// resultado  JSON.stringify
// content.innerHTML = JSON.stringify(result);
