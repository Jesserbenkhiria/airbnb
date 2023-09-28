import Navigation from './components/Navigation.jsx' ;
import Categorys from './components/Categorys.jsx';
import './App.css';
import Cards from './components/Cards.jsx';
import { useEffect, useState } from 'react';
import axios from "axios"
import CardDetails from './components/CardDetails.jsx';
import DashBoard from './components/DashBoard.jsx';
const App = ()=>{
 const [posts,setPosts] = useState([])
 const[view,setView] = useState('home')
 const[currentCard,setCurrentCard] = useState({})
 const[currentUser,setcurrentUser] = useState("connect first")
 const[accomocation,setAccomocation] = useState([])
  const fetchPosts = () =>{
   axios.get("http://localhost:3000/api/post/getAll")
   .then((res)=>{
     console.log(res.data)
     setPosts(res.data)
   })
   .catch((err)=>{
    throw err
   })
  }


  const findPost = async (name)=>{
    if(name){
      await axios.get(`http://localhost:3000/api/post/find/${name}`)
   .then((res)=>{
    setPosts(res.data)
    console.log(res.data)
     console.log("found")
   })
   .catch((err)=>{
      console.log("from search ",err)
   })  
    }else{
      fetchPosts()
    }
  }

  
  const addAccomocation = async (newAcc)=>{
    console.log(newAcc)
      await axios.post(`http://localhost:3000/api/accomocation/add`,newAcc)
   .then((res)=>{
    setcurrentUser(newAcc.username)
   
   })
   .catch((err)=>{
      throw err
   })
  }

  const getUserAccomocation = async ()=>{
      await axios.get(`http://localhost:3000/api/accomocation/find/${currentUser}`)
   .then((res)=>{
    setAccomocation(res.data)
    console.log("newAcc added",res.data)
   })
   .catch((err)=>{
      throw err
   })
  }
 

  const deleteUserAcc = async (id)=>{
    await axios.delete(`http://localhost:3000/api/accomocation/delete/${id}`)
 .then((res)=>{
  getUserAccomocation()
  console.log("deleted",id)
 })
 .catch((err)=>{
    throw err
 })
}

const updateAcc = async (id,obj)=>{
  await axios.put(`http://localhost:3000/api/accomocation/update/${id}`,obj)
.then((res)=>{
getUserAccomocation()
console.log("updateed",id)
})
.catch((err)=>{
  throw err
})
}


const viewChanger = (newView)=>{
   setView(newView)
}

const hundleView = ()=>{
   if(view === "home"){
    return <div>
      <Categorys findPost={findPost} />
      <Cards  posts={posts} viewChanger={viewChanger} setCurrentCard={setCurrentCard}/>
    </div>
   }
   if(view === "cardDetails"){
    return <div>
      <CardDetails currentCard={currentCard} viewChanger={viewChanger} setcurrentUser={setcurrentUser} addAccomocation={addAccomocation}/>
    </div>
   }
   if(view === "dashboard"){
    return <div>
      <DashBoard viewChanger={viewChanger} accomocation={accomocation}  getUserAccomocation={getUserAccomocation} currentUser={currentUser} deleteUserAcc={deleteUserAcc} updateAcc={updateAcc}/>
    </div>
   }
   
}
  useEffect(()=>{
    fetchPosts()
  },[])

  return   (
     <div className="App">
      <Navigation viewChanger={viewChanger} currentUser={currentUser} findPost={findPost}  getUserAccomocation={getUserAccomocation} fetchPosts={fetchPosts} />
      {hundleView()}
      </div>
    )  
  }


export default App;
