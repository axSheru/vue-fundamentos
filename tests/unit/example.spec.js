describe('Example Component', () => {
  
  test('Debe de ser mayor a 10', () => {
    
    //Preparar
    let value = 10

    //Estimular
    value = value + 2

    //Observar el resultado
    expect( value ).toBeGreaterThan(10)

  })
  

})