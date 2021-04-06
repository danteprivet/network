import {renderEntireTree} from '../render';

let state =  {
  profilePage: {
    posts:[
  {id: 1, message: 'Hi how are you', likesCount: 9},
  {id: 2, message: "Life is beautiful thing", likesCount: 24}
  ]
},
  dialogsPage: {
    dialogs:[
  {id: 1, name: 'Masha'},
  {id: 2, name: 'Nikita'},
  {id: 3, name: 'Dima'},
  {id: 4, name: 'Igor'},
  {id: 5, name: 'Vanessa'},
  {id: 6, name: 'Vika'},
  {id: 7, name: 'Oleg'},
  {id: 8, name: 'Sasha'}
],
    messages:[
{id: 1, message: 'Hi how are you'},
{id: 2, message: "I'm busy can't do today"},
{id: 3, message: 'Yes ok see you late'}
]
  }

}

export let addPost = (postMessage) => {
  let newPost = {
   id: 5,
   message: postMessage,
   likesCount: 0
 };

 state.profilePage.posts.push(newPost);
 renderEntireTree(state);
}

export default state;
