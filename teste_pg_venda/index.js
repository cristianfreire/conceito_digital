fetch('http://conceitodigital.herokuapp.com/teste_pg_venda/teste.json')
  .then(response => response.json())
  .then(data => {
    // Modifica os dados
    data.novo_objeto = { nome: 'Exemplo', idade: 25 };
    
    // Envia os dados modificados de volta ao servidor
    fetch('http://conceitodigital.herokuapp.com/teste_pg_venda/teste.json', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        console.log('Modificação bem-sucedida!');
      } else {
        console.error('Erro ao fazer a modificação.');
      }
    });
  });