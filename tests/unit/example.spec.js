describe('Example Component', () => {
  
  test('Debe de ser mayor a 10', () => {
    
    //Preparar
    let value = 5

    //Estimular
    value = value + 2

    //Observar el resultado
    if ( value > 10 ) {
      //TODO Todo bien
    } else {
      throw  `${ value } no es mayor a 10`
    }

  })
  

})