import {  useEffect, useState } from 'react'
import { Post } from './types/Post';
import { PostForm } from './components/PostForm';
import { PostItem } from './components/PostItem';
import { api } from './api';


  



const App = ()=> {

  const [posts , setPosts] = useState<Post[]>([]);
  const [loading , setLoading] = useState(false);


  useEffect(()=>{
    loadPosts();
  },[])


  const loadPosts = async ()=>{
    try{
      setLoading(true);
      let json = await api.getAllPosts();
      setLoading(false);
      setPosts(json);
    }catch(e){
      console.error(e);
    }
  }

  const handleAddPost = async (title:string , body:string)=>{
     try{ 
          let json = await api.addNeewPost(title , body , 1);     
          
          if(json.id){
            window.alert("Post Adicionado Com Sucesso!");
          } else  {
            window.alert("Algo deu Errado.");
          }
      
    }catch(e){
      console.error(e);
    }
  }

  


  return (
    <div className="p-5">
        {!loading && posts.length === 0 &&
          <div>Não há posts para exibir</div>
        }
       {loading &&
        <div>Carregando...</div>
        }

        <PostForm onAdd={handleAddPost}/>
        


        {!loading && posts.length > 0 &&

          <>
            <div>Total de Posts: {posts.length}</div>
            <div>
            
            {posts.map((item ,index)=>(

               <PostItem key={index} data={item} />

              ))}
          
            </div>
          
          </>
        }
        
    </div>
  )
}

export default App;
