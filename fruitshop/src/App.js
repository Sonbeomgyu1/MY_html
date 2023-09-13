import {BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {


const [newFruit,setNewFruit] =useState(
{
  name:"",
  price:"",
  amount:""
}

);
const [fruitList,setFruitList] = useState(

[
  {
    name:"수박",
    price:"2000",
    amount:"2"
  },
  {
    name:"복숭아",
    price:"5000",
    amount:"2"
  }
]

);

const onClickHandler=(event)=>{
  if(!newFruit.name|| !newFruit.price|| !newFruit.amount){
    alert("모든값을 입력해주세요")
    return;
  }
  const isExist = fruitList.some((fruit)=>fruit.name ==newFruit.name || fruit.price ==newFruit.price || fruit.amount == newFruit.amount);
  if(isExist){
    alert("이미 등록된 과일이름입니다. 다시 추가해주세요.");
    setNewFruit({...newFruit,["name"]:"value"});
    return;
  }
  console.log("클릭");
  console.log(event.target);
  console.log(newFruit);
  setFruitList([...fruitList,newFruit]);
}

const onChangeHandler=(event)=>{
  console.log("변경");
  console.log(event.target);
  console.log(event.target.name);
  console.log(event.target.value);
  const {name,value}=event.target;
  console.log(name);
  console.log(value);
  console.log(newFruit);
  setNewFruit({...newFruit,[name]:value});
  console.log(newFruit);
  
}

const onClickDeleteHandler=(name)=>{
  console.log(name);
  const filteredFruitList = fruitList.filter((fruit)=> fruit.name !=fruit.price !=fruit.amount);
  console.log(filteredFruitList);
  setFruitList(filteredFruitList);
}


const Home=()=>{

  return(
    <>
      <h1>홈</h1>
      <nav>
        <ul>
          <li><Link to="/list">과일목록</Link></li>
          <li><Link to="/insert">과일추가</Link></li>
        </ul>
      </nav>

      </>
  );
}

const List=()=>{

  return(
    <>
      <h1>과일목록</h1>
      <nav>
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/insert">과일추가</Link></li>
        </ul>
      </nav>
      <div>
        <table>
          <tr>
            <th>이름</th>
            <th>가격</th>
            <th>수량</th>
          </tr>
          <thead>
            <tbody>
              {
                fruitList.map(
                  (fruit) =>{
                    <tr>
                    <td>{fruit.name}</td>
                    <td>{fruit.price}</td>
                    <td>{fruit.amount}</td>
                    <td><button onClick={()=>{onClickDeleteHandler(fruit.name);}} >삭제</button></td>
                    </tr>
                  }
                )
              }
            </tbody>
          </thead>
        </table>
      </div>

      </>
  );
}

const Insert=()=>{

  return(
    <>
      <h1>과일추가</h1>
      <nav>
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/list">과일목록</Link></li>
        </ul>
      </nav>
      <div>
      <div><span>이름</span><input onChange={onChangeHandler} name="name" value={newFruit.name}></input></div>
      <div><span>가격</span><input  onChange={onChangeHandler} name="price" value={newFruit.price}></input></div>
      <div><span>수량</span><input  onChange={onChangeHandler} name="amount" value={newFruit.amount}></input></div>
      <div><button onClick={onClickHandler}>등록</button></div>
      </div>
      
      </>
  );
}
  return (
 <BrowserRouter>
 <div className="App">
  <Routes>
    <Route path='/' element={<Home></Home>}/>
    <Route path='/list' element={<List></List>}/>
    <Route path='/insert' element={<Insert></Insert>}/>
  </Routes>

 </div>
 </BrowserRouter>

    
  );
}

export default App;
