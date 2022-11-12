import { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [showing, setShowing] = useState(false);

  function Greeting() {
    useEffect(() => {
      console.log("Created :)");
      return(() => {
        console.log("Destroyed :(")
      });
    }, []);
    return(
      <h1>Hello</h1>
    );
  };
  const onClick = () => {
    setShowing((cur) => !cur);
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    console.log("시작할때 한번만 실행됩니다 ex)API 불러오기");
  }, []);

  useEffect(() => {
    console.log("값이 변하면 실행됩니다")
  }, [search]);
  return (
    <div>
      <div>
        <h1>시작해에에에</h1>
        <input type="text" onChange={onChange} value={search}/>
      </div>
      <br/>
      <div>
        <button onClick={onClick}>Click</button>
        {showing ? <Greeting /> : null}
      </div>
    </div>
  );
}

export default App;