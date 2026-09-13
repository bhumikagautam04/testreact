function App() {
  return (
    <div>
      <h1>This is react js Scripting</h1>
    
    </div>
  );
}

function MyComponent(props) {
   return(
    <div>
      <h1>Hi Students</h1>
      <h1>{props.message} {props.statename}</h1>
    </div>
   )
}
export default App;
export { MyComponent };