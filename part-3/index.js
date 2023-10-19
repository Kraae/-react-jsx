const App = () => (
  <div>
      <Person
      name="Berry"
      age={40}
      hobbies={["reading", "violin", "hiking"]}
      />
      <Person 
      name="Clark" 
      age={45} 
      hobbies={["drawing", "piano"]} 
      />
      
      <Person
      name="john"
      age={25}
      hobbies={["wrestling", "weight lifting"]}
      />
      
      <Person
      name="sophia"
      age={19}
      hobbies={["drums", "cooking", "yoga"]}
      />
  </div>
)



ReactDOM.render(<App />, document.getElementById("root"))