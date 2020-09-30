import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Box = () => {
  const boxList = useSelector((state) => state.boxList);

//   const singleColor = useSelector(state=>state.boxList[id])
  const color = useSelector((state) => state.color);
  const dispatch = useDispatch();
  const changeBoxColor = (e, id) => {
    dispatch({ type: "CHANGEBOXCOLOR", payload: {id:id, singleColor:e.target.value} });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {boxList.map((item) => {
        return (
          <div
            id={item.id}
            style={{
              width: "150px",
              height: "200px",
              backgroundColor: item.color ? item.color : color,
              border: "1px red solid",
              marginTop: "30px",
            }}
          >
            <h1>Box {item.id}</h1>
            <input
              style={{ width: "100%" }}
              type="text"
              onChange={(e) => changeBoxColor(e, item.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Box;
