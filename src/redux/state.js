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
      {id: 1, name: "Jerry"},
      {id: 2, name: "Tommy"},
      {id: 3, name: "Antony"},
      {id: 4, name: "David"},
      {id: 5, name: "Kelly"},
      {id: 6, name: "Maggy"},
      {id: 7, name: "Bill"}
    ],
    messages: [
      {id: 1, message: "Hello, how are you?"},
      {id: 2, message: "Hi, I am fine, and you?"},
      {id: 3, message: "Yeah, nice to meet you! See you later!"},
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