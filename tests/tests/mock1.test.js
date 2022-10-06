const age  = require('../mocks/mock1.js')
console.log(age)


it('Should return age' , ()=>{
  /**
   * le mock sert à remplacer une valeur dans une fonction ou une fonction complète
   */
  /** si par exemple le params monage vient d'un appel asyn dou d'une autre source  on peut le remplacer  */
   const mockAge  = jest.fn().mockReturnValue(40)
   console.log(mockAge)
   
   const a = age(mockAge()) //? attention c'est une focntion() elle simule l'age passée
    expect(a).toBe(40)
})