const heading = React.createElement("div", { "id" : "heading"},
    React.createElement("div", {}, 
    [React.createElement("h1",  {}, "Data"),
    React.createElement("h1",  {}, "Data1")]));
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)