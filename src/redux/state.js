const ADD_POST = 'ADD-POST';
const CHANGE_TEXTAREA_TEXT = 'CHANGE-TEXTAREA-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE = 'CHANGE-MESSAGE';

let store = {
  _rerenderTree() {

  },
  _state:  {
    profilePage: {
      posts: [
        {id: 1, message: "my first post", likes: 15},
        {id: 2, message: "hi, i am a student", likes: 18},
        {id: 3, message: "how are you?", likes: 1},
        {id: 4, message: "great!!!", likes: 151}
      ],
  
      newTextarea: ''
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
      ],

      newMessageText: ''
    },
  
    sidebarPage: {
      friends: [
        {id: 1, name: 'John'},
        {id: 2, name: 'Peter'},
        {id: 3, name: 'Maria'}
      ]
    }
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._rerenderTree = observer;
  },

  dispatch(action) {
    if(action.type === ADD_POST) {

      let newPost = {
        id: 5,
        message: this._state.profilePage.newTextarea,
        likes: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newTextarea = '';
      this._rerenderTree(this._state);

    } else if(action.type === CHANGE_TEXTAREA_TEXT) {

      this._state.profilePage.newTextarea = action.newText;
      this._rerenderTree(this._state);

    } else if (action.type === ADD_MESSAGE) {

      let body = this._state.dialogPage.newMessageText
      this._state.dialogPage.newMessageText  = "";
      this._state.dialogPage.messages.push({id: 4, message: body});
      this._rerenderTree(this._state);

    } else if (action.type === CHANGE_MESSAGE) {

      this._state.dialogPage.newMessageText = action.message;
      this._rerenderTree(this._state);
    }
  }
}

export const addPostActionCreator = () => {
  return {type: ADD_POST}
}

export const changeTextareaTextActionCreator = (text) => {
  return {type: CHANGE_TEXTAREA_TEXT, newText: text}
}

export const addMessageActionCreator = () => {
  return {type: ADD_MESSAGE}
}

export const changeMessageCreator = (body) => {
  return {type: CHANGE_MESSAGE, message: body}
}

window.store = store;


export default store;