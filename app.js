const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: props.name }, props.name),
    React.createElement("p", { key: props.occupation }, props.occupation),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", { className: "first" }, "React is NOW rendered"),
    React.createElement(
      Person,
      { id: 1, name: "first", occupation: "student1" },
      null
    ),
    React.createElement(
      Person,
      { id: 2, name: "second", occupation: "student2" },
      null
    ),
    React.createElement(
      Person,
      { id: 3, name: "third", occupation: "student3" },
      null
    ),
    React.createElement(
      Person,
      { id: 4, name: "fourth", occupation: "student4" },
      null
    )
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
