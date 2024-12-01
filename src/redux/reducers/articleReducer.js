const inisialState = {
    user:{id:1, username:"soukaina"},
    articles:[
        {id:1, designation:"Mouse", famille:"CONSOMMABLE"},
        {id:2, designation:"Keyborad", famille:"CONSOMMABLE"},

    ],
    categories:[],
    fournisseeurs:[]
}

function articleReducer(state=inisialState,action){
    switch(action.type){
        case"AJOUTER_ARTICLE":

        // ajouter le code de l'ajout
        return {...state,articles:[...state.articles,action.payload]}

        case"SUPPRIMER_ARTICLE":

        // supprimer le code de l'ajout
           const newArticles = state.articles.filter(function(item){
              return item.id !== action.payload
           })
            return {...state,articles:newArticles}


        

        // case "MODIFIER_ARTICLE":
        //     ///ajouter le code de la modification
        //     const articles = state.articles.map(function(article){
        //          if (article.id === parseInt(action.payload.id)){
        //              return action.payload
        //         }
        //         return article
        //     })
        //      return {...state, articles:articles}


        default:
            return state
    }
}
export default articleReducer