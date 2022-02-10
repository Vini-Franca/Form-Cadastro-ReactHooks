function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"CPF deve ter 11 digitos."}
    }else{
      return {valido:true, texto:""}
    }
  }

  function validarSenha(senha){
    if(senha.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)){
      return {valido:true, texto:""}
    }else{
      return {valido:false, 
      texto:"Senha deve conter: Mínimo de oito caracteres, pelo menos uma letra, um número e um caractere especial"
        }
      }
    }

  function validarNome(nome){
    if(nome.match(/[A-Z][a-z]*/)){
    return {valido:true, texto:""}
  }else{
    return {valido:false, texto:"Nome deve ser composto por iniciais Maísculas"}
    }
  }
  function validarSobrenome(sobrenome){
    if(sobrenome.match(/[A-Z][a-z]* [A-Z][a-z]*/)){
    return {valido:true, texto:""}
  }else{
    return {valido:false, texto:"Sobrenome deve ser composto por iniciais Maísculas"}
    }
  }

  function validarEmail(email){
    if(email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
    )){
    return {valido:true, texto:""}
  }else{
    return {valido:false, texto:"Email Inválido"}
    }
  }

  export{validarCPF, validarSenha, validarNome, validarSobrenome, validarEmail};