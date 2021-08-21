import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

    let wrapper;

    beforeEach( () => {
        wrapper = shallowMount( Counter )
    })

    //Evaluación de sección de HTML del componente---------------
    
    /* test('Debe de hacer match con el snapshot.', () => {
        
        expect( wrapper.html() ).toMatchSnapshot()
        
    }) */
    
    test('La etiqueta h2 debe de tener el valor por defecto "Counter"', () => {
        
        expect( wrapper.find('h2').exists() ).toBeTruthy()
        
        const h2Value = wrapper.find('h2').text()
        
        expect(h2Value).toBe('Counter')
        
    })
    
    test('El valor por defecto de la etiqueta "p" con data-testid="counter" debe de ser 100.', () => {
        
        //Si queremos revisar todas las etiquetas p
        /*  const pTags = wrapper.findAll('p')
        
        pTags.forEach(pTag => {
            expect( pTag.text() ).toContain('100')
        }); */
        
        const value = wrapper.find('[data-testid="counter"]').text()
        
        expect( value ).toBe('100')
        
    })
    
    test('Debe de incrementar en 3 y decrementar en 2 el contador.', async () => {
        
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')
        
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect( value ).toBe('101')

    })

    //-----------------------------------------------------------------
    
    
    

})
