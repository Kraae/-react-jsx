const App = () => (
  <div>
<Tweet
user = "user1"
name = "Joseph"
date = "October 19th 2023"
message = "boop beep!"
/>
<Tweet
user = "user2"
name = "Karen"
date = "October 19th 2023"
message = "Beep boop!"
/>
<Tweet
user = "user3"
name = "John"
date = "October 19th 2023"
message = "Click clack!"
/>
<Tweet
user = "user4"
name = "Jane"
date = "October 19th 2023"
message = "clack click"
/>
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"))