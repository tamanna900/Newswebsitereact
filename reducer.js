const reducer = (state, action) => {
     switch (action.type) {
         case "SET LOADING": return { ...state, isLoading: true, };
         case "GET STORIES": return { ...state, isLoading: false, hits: action.payload.hits,
             nbPages: action.payload.nbPages, 
             };
         case "REMOVE POST": return { ...state, hits: state.hits.filter( (curElem) => 
            curElem.objectlD !== action.payload 
           ), 
          }; 
         case "SEARCH QUERY": return { ...state, query: action.payload,};
         case "NEXT PAGE": 
         let pageNumInc = state.page + 1; 
         if (pageNumInc >= state.nbPages)  {pageNumInc = 0;}
          return { ...state,
             page: pageNumInc, }; 

        case "PREY PAGE": 
        let pageNum = state.page - 1; 
        if (pageNum <= 0) { pageNum = 0; }
        return { ...state, page: pageNum, };
          }

// you can add the default case too 
        };
        export default reducer;