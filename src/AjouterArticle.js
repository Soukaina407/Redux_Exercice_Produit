import { useState } from "react"
import { useDispatch } from "react-redux"
import { addArticleAction } from "./redux/actions/articleActions"


function AjouterArticle(){
    const [article,setArticle] = useState({
        id:null, 
        designation:"",
        famille:""
    })
    

    const dispatch = useDispatch()

    function save(e){
        e.preventDefault()
        dispatch({type:"AJOUTER_ARTICLE", payload: article})
        
        console.log(article)
    }
   

    return(
        <>
        <form action="">
             <input type="text" name="id" id="" placeholder="entrer id" onChange={(e)=>{setArticle({...article,id:e.target.value})}}/>
             <input type="text" name="designation" id="" placeholder="entrer designation" onChange={(e)=>{setArticle({...article,designation:e.target.value})}}/>
             <input type="text" name="famille" id="" placeholder="entrer famille" onChange={(e)=>{setArticle({...article,famille:e.target.value})}}/>
             <button onClick={save}>Ajouter</button>
    
        </form>
        
        </>
    )
}
export default AjouterArticle