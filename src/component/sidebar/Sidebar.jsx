import React, { useContext, useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';
const Sidebar = () => {

    //for adding an expand funtionality of side bar 
    const [extend, setextend] = useState(false);
    const { onSent, prevpromp, setrecentprompt,newchat} = useContext(Context)
    
    const loadprompt = async(prompt)=>{
        setrecentprompt(prompt)
       await onSent(prompt)
    }
    
    return (
        <div className='sidebar'>
            <div className='top'>
                <img onClick={() => setextend(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />

                <div onClick={()=>newchat()} className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extend ? <p>New Chat</p> : null}
                </div>

                {extend ? <div className="recent">

                    <p className='title'>Recent</p>
                    {prevpromp.map((item, index) => {
                        return (
                            <div onClick={()=>loadprompt(item)} className="recent-entry">
                                <img src={assets.message_icon} alt="" />
                                <p>{item.slice(0,18)}</p>
                            </div>
                        )
                    })}

                </div> : null
}

            </div>


            <div className='bottom'>

                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extend ? <p>Help</p> : null}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extend ? <p>Activity</p> : null}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extend ? <p>Settings</p> : null}
                </div>

            </div>
        </div>
    )
}

export default Sidebar