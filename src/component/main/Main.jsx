import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {

const {onSent,recentprompt,showresult,loading,resultdata,setinput,input}=useContext(Context)
  return (
    <div className='main'>
           <div className="nav">
            <p>Gemini</p>
           <img src={assets.user_icon} alt="" />
           </div>

       
           
           <div className="main-content">
                {!showresult
           ?<>
           
            
            <div className="greeting">
                <p><span>Hello ,dev</span></p>
                <p>How can I help you,today</p>
            </div>

            <div className="cards">
                <div className="card">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil neque magni itaque eaque!</p>
                    <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae cumque quasi vel!</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>

                <div className="card">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil neque magni itaque eaque!</p>
                    <img src={assets.message_icon} alt="" />
                </div>

                <div className="card">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil neque magni itaque eaque!</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            :<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentprompt}</p>
                </div>
                       <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading?
                        <div className="loader">
                            <hr />
                            <hr />
                            <hr />
                        </div>:
<p dangerouslySetInnerHTML={{__html:resultdata}}></p>
                        }
                        
                       </div>
            </div>
            }
            {/* bottom search bar creting  */}
             <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setinput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here..' />
               
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                   {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                </div>
             </div>
            <p className='bottom-info'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum magnam perspiciatis tempora iste quas quis, sapiente praesentium quos eveniet! Voluptates praesentium dolor corporis accusamus. Similique praesentium illo enim rem assumenda.
            </p>
           </div>
    </div>
    </div>
  )
}

export default Main