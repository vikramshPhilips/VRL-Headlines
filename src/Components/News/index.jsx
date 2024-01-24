import React, { useEffect, useState} from 'react'
import './news.css'
import json_data from '../Assets/data.json'
import logo from '../Assets/Logo.png'
import default_image from '../Assets/defaultNews.jpg'

import { useNavigate } from 'react-router-dom'

const News = () => {

    const api_url="https://newsapi.org/v2/top-headlines?country=in&apiKey=3b43b3d789df44fcb15380e85f6175e5"; // News Apis
    //const response=useRef([]);
    const [response, setResponse] = useState();
    //const [resp,setResp]=useState([]);
    const Navigator = useNavigate();
    const redirect=(loc) => {
          Navigator(loc);
         }
    const fetchApi = () =>  {
        try{
            if(localStorage.getItem("API_News")==null)
            {
                      
                      //console.log(json_data); 
                      //response.current= json_data["articles"];
                      //const cvtresp = JSON.stringify(resp,null,2)
                      //console.log("Mock response: ");
                      
                      
                      //response = await (fetch(api_url)).json["articles"];
                      
                      //fetchApi(api_url).then( resp => resp.json).then( data => setResp(data["articles"]) );
                      if(response === undefined || response.length === 0 )  {
                        fetch(api_url)
                      .then( (res) => res.json())
                      .then( (result) => {
                        //table 
                        //alert(result["articles"][])
                        setResponse(result["articles"]);
                        console.log("result  : \n");
                        console.log(result["articles"]);
                      })
                      }else{
                        console.log("empty");        
                        }
                        console.log("inside Response: \n");
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


    useEffect( () => {
        fetchApi();
        console.log(response);
        
        
    } ,[response]);
    

    
    return (
    <div>
        <div className='Header'>
        <div className="TitleBar">
              <img src={logo} alt="Philips Logo" className='logo hovr' />
                  <div className='title_item'> <p onClick={(e) => redirect("/home")}>Home</p></div>
                  <div className='title_item'><p onClick= {(e) => { window.location.href="https://vikramsh2002.github.io/My-Portfolio/"}}>About Us</p></div>
                  <div className='title_item'><p onClick={(e) => redirect("/")}>Log Out</p> </div>
            </div>
        </div>
    <div className='Rows'>
    <div className='Row'>
            {/* (response === undefined)?alert("Loading") :alert(response)*/}
            
       { (response=== undefined)? (<h2>Loading....</h2>) : 
            response.slice(0,3).map((content,index) => (
            
          <div className='Column-card' key={index}>
                <table>

            <tr>
                {(content.urlToImage!== null && content.urlToImage!=="") ? (<td rowSpan="2" className='imageHeadline'> 
                       <img src={content.urlToImage} alt="image of Bulliten" className='imgArt' style={{
                        display: 'block',
                        width: "200px",
                        height: "200px",
                        }}/>
                 </td>) :  (<td rowSpan="2" className='imageHeadline'> 
                       <img src={default_image} alt="image of Bulliten" className='imgArt' style={{
                        display:'block',
                        width: "200px",
                        height: "200px",
                        }}/>
                 </td>)}
                 <td className='headline_title_cell'>
                         <h1 className='headline_title'>
                           {content.title} 
                           { 
                                  (content.author!==null && content.author!=="") &&
                                  (<div className='author'>  <p> -By {content.author} </p></div>)

                           }
                         </h1>

                  </td>
                  
               
            </tr>

            <tr>           
                  {(content.source.name!== null && content.source!=="") && (
                  <td className='source'>
                      <b> News Source:</b> {content.source.name} 
                                          
                  </td>)}
                                    
                                  
            </tr>

            <tr>
                  <td>
                      {(content.publishedAt!== null && content.publishedAt!=="") && (
                      <td className='publishtime'>
                          <b> Published On:</b> {content.publishedAt} 
                                          
                      </td>)}
                  </td>
            </tr>

            <tr>
                  {(content.description!== null && content.description!=="") && (
                  <td className='brief'>
                      <b> Brief:</b> {content.description} 
                                          
                  </td>
                                        )}
            </tr>            
                  { (content.url!== null && content.url!==null )&& (
            <tr>
                <td className='seeMore'colSpan="2">
                  <button onClick={ (e) => window.location.href=content.url}>Read More</button>
                </td>
                            
            </tr>)}

           
            </table>

      </div>
            
                          ) )   
                          
                          
                          
                          } 
                
                    
                
     </div>


     {/*  Row 2 ----------------------------------------------- */}

     <div className='Row'>
            {/* (response === undefined)?alert("Loading") :alert(response)*/}
            
            { (response=== undefined)? "" : 
            response.slice(3,6).map((content,index) => (
              <div className='Column-card' key={index}>
              <table>

          <tr>
          {(content.urlToImage!== null && content.urlToImage!=="") ? (<td rowSpan="2" className='imageHeadline'> 
                       <img src={content.urlToImage} alt="image of Bulliten" className='imgArt' style={{
                        display: 'block',
                        width: "200px",
                        height: "200px",
                        }}/>
                 </td>) :  (<td rowSpan="2" className='imageHeadline'> 
                       <img src={default_image} alt="image of Bulliten" className='imgArt' style={{
                        display:'block',
                        width: "200px",
                        height: "200px",
                        }}/>
                 </td>)}

               <td className='headline_title_cell'>
                       <h1 className='headline_title'>
                         {content.title} 
                         { 
                                (content.author!==null && content.author!=="" ) &&
                                (<div className='author'>  <p> -By {content.author} </p></div>)

                         }
                       </h1>

                </td>
                
             
          </tr>

          <tr>           
                {(content.source.name!== null && content.source.name!=="") && (
                <td className='source'>
                    <b> News Source:</b> {content.source.name} 
                                        
                </td>)}
                                  
                                
          </tr>

          <tr>
                <td>
                    {(content.publishedAt!== null && content.publishedAt!=="") && (
                    <td className='publishtime'>
                        <b> Published On:</b> {content.publishedAt} 
                                        
                    </td>)}
                </td>
          </tr>

          <tr>
                {(content.description!== null && content.description!=="") && (
                <td className='brief'>
                    <b> Brief:</b> {content.description} 
                                        
                </td>
                                      )}
          </tr>            
                { (content.url!== null && content.url!=="" )&& (
          <tr>
              <td className='seeMore'colSpan="2">
                <button onClick={ (e) => window.location.href=content.url}>Read More</button>
              </td>
                          
          </tr>)}

         
          </table>

    </div>
          
                        ) )   
                        
                        
                        
                        
            } 
                
                    
                
     </div>



 {/*  Row 3 ----------------------------------------------- */}

 <div className='Row'>
            {/* (response === undefined)?alert("Loading") :alert(response)*/}
            
            { (response=== undefined)? "" : 
            response.slice(6,9).map((content,index) => (
              <div className='Column-card' key={index}>
              <table>

          <tr>
          {(content.urlToImage!== null && content.urlToImage!=="") ? (<td rowSpan="2" className='imageHeadline'> 
                       <img src={content.urlToImage} alt="image of Bulliten" className='imgArt' style={{
                        display: 'block',
                        width: "200px",
                        height: "200px",
                        }}/>
                 </td>) :  (<td rowSpan="2" className='imageHeadline'> 
                       <img src={default_image} alt="image of Bulliten" className='imgArt' style={{
                        display:'block',
                        width: "200px",
                        height: "200px",
                        }}/>
                 </td>)}

               <td className='headline_title_cell'>
                       <h1 className='headline_title'>
                         {content.title} 
                         { 
                                (content.author!==null && content.author!=="") &&
                                (<div className='author'>  <p> -By {content.author} </p></div>)

                         }
                       </h1>

                </td>
                
             
          </tr>

          <tr>           
                {(content.source.name!== null && content.source.name!=="") && (
                <td className='source'>
                    <b> News Source:</b> {content.source.name} 
                                        
                </td>)}
                                  
                                
          </tr>

          <tr>
                <td>
                    {(content.publishedAt!== null && content.publishedAt!=="") && (
                    <td className='publishtime'>
                        <b> Published On:</b> {content.publishedAt} 
                                        
                    </td>)}
                </td>
          </tr>

          <tr>
                {(content.description!== null && content.description!=="") && (
                <td className='brief'>
                    <b> Brief:</b> {content.description} 
                                        
                </td>
                                      )}
          </tr>            
                { (content.url!== null && content.url!=="" )&& (
          <tr>
              <td className='seeMore'colSpan="2">
                <button onClick={ (e) => window.location.href=content.url}>Read More</button>
              </td>
                          
          </tr>)}

         
          </table>

    </div>
          
                        ) )   
                        
                        
                        
                        
            } 
                
                    
                
     </div>


{/*  Row 4 ----------------------------------------------- */}

<div className='Row'>
            {/* (response === undefined)?alert("Loading") :alert(response)*/}
            
            { (response=== undefined)? "" : 
            response.slice(9,12).map((content,index) => (
              <div className='Column-card' key={index}>
              <table>

          <tr>
          {(content.urlToImage!== null && content.urlToImage!=="") ? (<td rowSpan="2" className='imageHeadline'> 
                       <img src={content.urlToImage} alt="image of Bulliten" className='imgArt' style={{
                        display: 'block',
                        width: "200px",
                        height: "200px",
                        }}/>
                 </td>) :  (<td rowSpan="2" className='imageHeadline'> 
                       <img src={default_image} alt="image of Bulliten" className='imgArt' style={{
                        display:'block',
                        width: "200px",
                        height: "200px",
                        }}/>
                 </td>)}

               <td className='headline_title_cell'>
                       <h1 className='headline_title'>
                         {content.title} 
                         { 
                                (content.author!==null && content.author!=="") &&
                                (<div className='author'>  <p> -By {content.author} </p></div>)

                         }
                       </h1>

                </td>
                
             
          </tr>

          <tr>           
                {(content.source.name!== null && content.source.name!=="") && (
                <td className='source'>
                    <b> News Source:</b> {content.source.name} 
                                        
                </td>)}
                                  
                                
          </tr>

          <tr>
                <td>
                    {(content.publishedAt!== null && content.publishedAt!=="") && (
                    <td className='publishtime'>
                        <b> Published On:</b> {content.publishedAt} 
                                        
                    </td>)}
                </td>
          </tr>

          <tr>
                {(content.description!== null && content.description!=="") && (
                <td className='brief'>
                    <b> Brief:</b> {content.description} 
                                        
                </td>
                                      )}
          </tr>            
                { (content.url!== null && content.url!=="" )&& (
          <tr>
              <td className='seeMore'colSpan="2">
                <button onClick={ (e) => window.location.href=content.url}>Read More</button>
              </td>
                          
          </tr>)}

         
          </table>

    </div>
          
                        )
              )   
                        
                        
                        
                        
            } 
                
                    
                
     </div>







            
            
     </div>     
    </div>
  )
}

export default News;
