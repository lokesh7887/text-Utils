
import './App.css';
import Header from './mycomponents/Header';
import {Todo}  from './mycomponents/Todo';
import {Footer} from './mycomponents/Footer';
function App() {

  const onDelete = (todo) =>{
    console.log("i am ondelete of todo", "todo");
    let index = todos.indexOf(todo);
    todos.splice(index,1)
  }

  let todos =[
    {
      sno: 1,
      title: "market",
      desc : "going market"
    },
    {
      sno: 2,
      title: "gym",
      desc : "going gym"
    },
    {
      sno: 3,
      title: "home",
      desc : "going homet"
    }
  ]
  return (
    <>
   <Header title= "my todos list" searchBar= {true}/>
   <Todo/>
   <Footer/>
  </>
  );
}

export default App;
