const { posts } = require('../service/service.js');

describe("Test du service ", ()=>{
  it("call axios & not return null" , async ()=>{
    let myPosts = await posts()
    const typeArr = typeof myPosts
    expect(myPosts).not.toBe(null);
  })
  
  it('post are not empty' , async ()=>{
    const myPosts = await posts()
    expect(myPosts).not.toBe([])
  })

  it('post are type of Objet ' , async ()=>{
    const myPosts = await posts()
    const typeArr = typeof myPosts
    expect(typeArr).toBe('object')
  })
  
})

