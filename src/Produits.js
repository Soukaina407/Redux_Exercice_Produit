import { useDispatch, useSelector } from "react-redux"
import store from "./redux/store"
import { deleteArticleAction } from "./redux/actions/articleActions"
import './index.css'



function Produits(){

     const productState = useSelector((state)=>state.articles)
     console.log(productState)

     const dispatch = useDispatch();

      function supprimer(id){
        dispatch (deleteArticleAction(id));
      }

    //   function modifier(){
    //      dispatch (updateArticleAction())


          
    //   }

    return(
        <>

          <div>


            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>designation</th>
                        <th>famille</th>
                    </tr>
                </thead>

                <tbody>
                    {productState.map(function(item,index){
                        return(
                            <>
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.designation}</td>
                                    <td>{item.famille}</td>
                                     <td>
                                    <button onClick={()=>supprimer(item.id)}>supprimer</button></td>
                                    <td> 
                                    <button >modifier</button></td>
                                </tr>
                            </>
                        )
                    })}
                   
                </tbody>
            </table>

          </div>

        </>
    )

    
}
export default Produits