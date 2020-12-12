let state = {
  profilePage: {
    posts: [
      {id: 1, message: "my first post", likes: 15},
      {id: 2, message: "hi, i am a student", likes: 18},
      {id: 3, message: "how are you?", likes: 1},
      {id: 4, message: "great!!!", likes: 151}
    ]
  },
  
  dialogPage: {
    dialogs: [
      {id: 1, name: "Jerry", src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JmA_GJiBQwjc7QYc8YlcwgAAAA%26pid%3DApi&f=1"},
      {id: 2, name: "Tommy", src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.pPbk9i8d_8_8ko7-o8PKGgHaHa%26pid%3DApi&f=1"},
      {id: 3, name: "Antony", src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.4nPTio-zUSnMyOYvdI31ZAHaHa%26pid%3DApi&f=1"},
      {id: 4, name: "David", src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YU6BvZKvxivoEnvqxeG5rwHaIU%26pid%3DApi&f=1"},
      {id: 5, name: "Kelly", src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.nBp7mLoeAgIzk4RslQnFhwHaHa%26pid%3DApi&f=1"},
      {id: 6, name: "Maggy", src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.dE4ObnWQ46TFJp-QbPAkMAHaHa%26o%3D6%26pid%3DApi&f=1"},
      {id: 7, name: "Bill", src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LSjEMQ9v2Fn-pT4GmJFjGgHaHa%26pid%3DApi&f=1"}
    ],
    messages: [
      {id: 1, message: "Hello, how are you?"},
      {id: 2, message: "Hi, I am fine, and you?"},
      {id: 3, message: "Yeah, nice to meet you! See you later!"}
    ]
  },

  sidebarPage: {
    friends: [
      {id: 1, name: 'John'},
      {id: 2, name: 'Peter'},
      {id: 3, name: 'Maria'}
    ]
  }
}

export default state;