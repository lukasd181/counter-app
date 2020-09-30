let initialState = {
  count: 0,
  color: null,
  boxList: [],
};

const countReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "INCREMENT":
      
      state.boxList.push({ id: state.count, color: null });
      state.count++;
      return { ...state };
    case "DECREMENT":
      state.count--;
      state.boxList.pop();
      return { ...state };
    case "CHANGECOLOR":
      state.color = payload;
      return { ...state};
    case "CHANGEBOXCOLOR":
      state.boxList[payload.id].color = payload.singleColor
      console.log("hoho9",state.boxList)
      return {...state , boxList:[...state.boxList]};

    default:
      return { ...state };
  }
};

//   if (type === "INCREMENT") {
//     state.count++;
//     console.log("state count", state.count)
//   }
//   return { ...state };
// };

export default countReducer;
