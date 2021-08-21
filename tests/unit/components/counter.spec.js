import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {
    
    /* test('Debe de hacer match con el snapshot.', () => {

        const wrapper = shallowMount( Counter )
        
        expect( wrapper.html() ).toMatchSnapshot()
        
    }) */
    
    test('La etiqueta h2 debe de tener el valor por defecto "Counter"', () => {
        
        const wrapper = shallowMount( Counter )
        
        expect( wrapper.find('h2').exists() ).toBeTruthy()
        
        const h2Value = wrapper.find('h2').text()
        
        expect(h2Value).toBe('Counter')
        
    })
    
    test('El valor por defecto de la etiqueta "p" con data-testid="counter" debe de ser 100.', () => {
        
        const wrapper = shallowMount( Counter )

        //Si queremos revisar todas las etiquetas p
       /*  const pTags = wrapper.findAll('p')

        pTags.forEach(pTag => {
            expect( pTag.text() ).toContain('100')
        }); */

        const value = wrapper.find('[data-testid="counter"]').text()

        expect( value ).toBe('100')

    })
    
    

})
