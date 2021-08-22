import { shallowMount, mount } from '@vue/test-utils'
import Indecision from '@/components/Indecision'

describe('Indecision Component', () => {

    let wrapper;

    beforeEach( () => {
        wrapper = shallowMount( Indecision )
    })
    
     test('Debe de hacer match con el snapshot.', () => {
        
        expect( wrapper.html() ).toMatchSnapshot()
        
    })

    test('Escribir en el input no debe de disparar nada (console.log() .)', () => {
        
    })

    test('Escribir el símbolo "?" debe de disparar el fetch.', () => {
        
    })

    test('Pruebas en el método getAnswer()', () => {
        
    })

    test('Pruebas en el método getAnswer() - Fallo en el API.', () => {
        
    })
    
    
    
    

})
