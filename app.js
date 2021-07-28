// Make a Reducer with an action type switch case
// Create a Store
// windows.onload for button addEventListener

const INITIAL_STATE = {mood: ''}

const moodReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case 'HAPPY':
            return {...state, mood: 'o͡͡͡╮། ❛ั ╭ ͟ʖ╮ ❛ั །╭o͡͡͡'};
        case 'SAD':
            return {...state, mood: '໒( ಥ Ĺ̯ ಥ )७'};
        case 'ANGRY':
            return {...state, mood: '(ノ͡° ͜ʖ ͡°)ノ︵┻┻'};
        case 'CONFUSED':
            return {...state, mood: '(ʘ言ʘ╬)'};
        default:
            return state;
    }
}

const store = Redux.createStore(moodReducer);
const moodElement = document.querySelector('#emoji');
const happyBtn = document.querySelector('#happy');
const sadBtn = document.querySelector('#sad');
const angryBtn = document.querySelector('#angry');
const confusedBtn = document.querySelector('#confused');

window.onload = () => {
    happyBtn.addEventListener('click', () => {
        store.dispatch({type: 'HAPPY'});
        const currentMood = store.getState().mood;
        moodElement.innerText = currentMood;
    })
    sadBtn.addEventListener('click', () => {
        store.dispatch({type: 'SAD'});
        const currentMood = store.getState().mood;
        moodElement.innerText = currentMood;
    })
    angryBtn.addEventListener('click', () => {
        store.dispatch({type: 'ANGRY'});
        const currentMood = store.getState().mood;
        moodElement.innerText = currentMood;
    })
    confusedBtn.addEventListener('click', () => {
        store.dispatch({type: 'CONFUSED'});
        const currentMood = store.getState().mood;
        moodElement.innerText = currentMood;
    })
}