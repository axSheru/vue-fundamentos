import { shallowMount, mount } from '@vue/test-utils'
import Indecision from '@/components/Indecision'

describe('Indecision Component', () => {

    let wrapper;
    let clgSpy;

    //En node no existe el método fetch.
    global.fetch = jest.fn( () => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }) )

    beforeEach( () => {
        wrapper = shallowMount( Indecision )
        clgSpy = jest.spyOn( console, 'log' )
        jest.clearAllMocks()
    })
    
     test('Debe de hacer match con el snapshot.', () => {
        
        expect( wrapper.html() ).toMatchSnapshot()
        
    })

    test('Escribir en el input no debe de disparar nada (console.log() .)', async () => {

        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )
        
        const input = wrapper.find('input')

        await input.setValue('Hola mundo')

        expect( clgSpy ).toHaveBeenCalled()
        expect( getAnswerSpy ).not.toHaveBeenCalled()
        //expect( getAnswerSpy ).toHaveBeenCalledTimes(0)//Alternativa

    })

    test('Escribir el símbolo "?" debe de disparar el getAnswer().', async () => {

        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )
        
        const input = wrapper.find('input')

        await input.setValue('Hola mundo?')

        expect( getAnswerSpy ).toHaveBeenCalled()
        
    })

    test('Pruebas en el método getAnswer()', () => {
        
    })

    test('Pruebas en el método getAnswer() - Fallo en el API.', () => {
        
    })
    
    
    
    

})
