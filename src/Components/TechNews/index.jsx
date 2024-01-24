import React, { useEffect, useRef, useState } from 'react'
import json_data from '../Assets/data.json'
import './technews.css';
const Index = () => {
    

  const api_url='https://newsapi.org/v2/top-headlines?' +'country=in&' +'apiKey=3b43b3d789df44fcb15380e85f6175e5'; // News Apis
  // const default_data={
  //   "source":"",
  //   "author": "",
  //     "title": "",
  //     "description": "",
  //     "url": "",
  //     "urlToImage": "",
  //     "publishedAt": "",
  //     "content": ""
  // };
 const default_data={}
  //const [content, setContent]= useState(default_data);
  const [extra, setExtra]=useState("none");
  
  let content=default_data;
  
  let response=null,resp={};
  
  const fetchApi = async (url) =>  {
        try{
            if(localStorage.getItem("API_News")==null)
            {
                      
                      response = json_data["articles"];
                      //const cvtresp = JSON.stringify(resp,null,2)
                      console.log("Mock response: ");
                      
                      
                      //response = await (fetch(url)).json["articles"];
                      
                      
                      console.log("Data Set : \n");
                      console.log(response);

                    // show data
                    //console.log("Api Response");
                    //console.log(data);
                    //localStorage.setItem("API_News",data);
            }
            else{
              console.log("From Local");
             // setResp(localStorage.getItem("API_News"));
            }
        //Loader=false;
        }
        catch(error){
            console.log(error);
        }
      
    }

   const show = () =>{
    var s = JSON.parse(resp)
    console.log(s);
    console.log(getArticleInfo(0,"author"));
    console.log(getArticleInfo(0,"urlToImage"));
    
   }

   const getArticleInfo = (article_No,key) => {
                if(resp === undefined || resp=== null){
                  return "";
                
              }
              else{
                //console.log(" data is there in Ainfo")
                  const jresp=JSON.parse(resp);
                  //console.log("jresp ",jresp);
                  if(key!=="source")
                    return jresp["articles"][article_No][key];
                  else
                  return jresp["articles"][article_No][key]["name"];
              }
   }


// Download JSON
const saveToFile = (jsonData) => {
  if (jsonData) {
    const jsonBlob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(jsonBlob);

    // Create a temporary anchor element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    a.click();

    // Clean up
    URL.revokeObjectURL(url);
  }
};
const SetData_Article_No = (article_No) => {
  
  console.log("Setting contenet " + String(article_No));
  console.log(getArticleInfo(article_No,"author"));

  //setContent( prevContent => ({...prevContent,author: getArticleInfo(article_No,"author")}));
  //setContent({...content, "author": getArticleInfo(article_No,"author")});
   
   console.log(content);
  //console.log(content);
//   setContent({...content,"urlToImage":getArticleInfo(article_No,"urlToImage") , 
//   "source":getArticleInfo(article_No,"source"),
//     "author":getArticleInfo(article_No,"author"),
//    "title":getArticleInfo(article_No,"title"),
//    "content":getArticleInfo(article_No,"content"),
//     "description":getArticleInfo(article_No,"description"),
//    "publishedAt":getArticleInfo(article_No,"publishedAt"),
//    "url":getArticleInfo(article_No,"url")
//  }); 


  // old way
  Object.entries(content).forEach(([key, value]) => {
    content[key] = getArticleInfo(article_No, key);
  });
 
}




// {...register, [name]:value}

//  Check If Image is null then don't show the image box
const imageStyle = {
  display: content.urlToImage!==null ? 'block' : 'none',
  width: "100px",
  height: "50px",
};
const flipMore =() => {
  console.log(extra);
     if(extra === "none"){
      
      setExtra("block");
     }
     else{
      setExtra("none");
     }
     console.log(extra);
}

// Construct Column Card for a article
const getColumnCard = (row,col,article_No) => {

   // set the data of article
   SetData_Article_No(article_No);

   // construct column card
   return (
    
    <div className='Column-card' key={String(row) + String(col)}>
    <table>
       {/* <tr>
         <td rowSpan="2">
            <button onClick={() => show()}> Show Data</button>

         </td>
         <td>
            <button onClick={() => saveToFile(JSON.parse(data))}> Save Response</button>
            
         </td> */}
       <tr>
                 <td rowSpan="4" className='imageHeadline'> 
                       <img src={content.urlToImage} alt="image of Bulliten" className='imgArt' style={imageStyle}/>
                 </td>
                 <td className='headline_title_cell'>
                         <h1 className='headline_title'>
                           {content.title} 
                           { 
                                  (content.author!==null) &&
                                  (<div className='author'>  <p> -By {content.author} </p></div>)

                           }
                         </h1>

                  </td>
                  
               
        </tr>
        <tr>
                     
                         {(content.source!== null) && (
                           <td className='source'>
                           <b> News Source:</b> {content.source} 
                           
                           </td>
                         )}
                     
                   
        </tr>

     <tr>
         <td>
                    {(content.publishedAt!== null) && (
                           <td className='publishtime'>
                           <b> Published On:</b> {content.publishedAt} 
                           
                           </td>
                         )}
         </td>
       </tr>
     <tr>
                {(content.description!== null) && (
                           <td className='brief'>
                           <b> Brief:</b> {content.description} 
                           
                           </td>
                         )}
     </tr>            
    { (content.url!== null )&& (
     <tr>
            <td className='seeMore'colSpan="2">
            <button onClick={ (e) => window.location.href=content.url}>Read More</button>
            </td>
            
     </tr>)
     }

               
   </table>
   </div>
    
    
    
   );

}
// create grid for headlines
const grid=[];




const createGrid = () => {
  const nrows=5;
  const ncolumns=4;
  let key_col="",key_row="";
  for(let row=0,art=0; row<nrows; ++row){

    const rowsCells=[];
    for(let col=0; col<ncolumns;++col){
        
      key_col = "Cell_"+String(row)+"_"+String(col);
      // Create row with different cols as cards
      rowsCells.push(<div key={key_col}>{getColumnCard(row,col,art)} </div>);
      art+=1;
    }
    key_row="row_"+String(row);
    grid.push(<div key={key_row} className='Container-row'>{rowsCells}</div>);

  }
  
}
// Run the fetch api as soon as page is loaded

useEffect( () => { 
  //console.log(resp);
  fetchApi(api_url);    
  //console.log("********************After set data \n" +resp);
  //console.log("******************** "+ getArticleInfo(0,"author"));
  //SetData_Article_No(0);
  //createGrid();
  
  //console.log(content);
  //console.log(grid);
  //console.log(content);




},[api_url] );

const row=0,col=0,art=0;
//console.log(JSON.stringify(grid));
console.log(resp);
  return (
    <div className='Container-column'>
    {/*localStorage.clear()*/}
    {/* <div onClick={ () => fetchApi(api_url)}>
         Click To Get Latest News
    </div> */}
    
    <h1> Top 20 Headlines</h1>
    <button onClick={(e)=>console.log(content)}>
      check
    </button>
    
       <div>

         {
             response.map((item,index) => (<> {item.author} </>))
         }

       </div>
    </ div>
  

  );
};

export default Index
