import React from 'react'
import { useDispatch } from 'react-redux';
import './SidebarChannel.css';
import { setChannelInfo } from './appSlice';

function SidebarChannel({ id, channelName }) {
    const dispatch = useDispatch();
    
    return (
        <div onClick={() => dispatch(setChannelInfo({
            channelId: id,
            channelName: channelName,
        }))} className="sidebarChannel">
            {console.log(id)}
            <h4><span className='sidebarChannel__hash'>#</span>{channelName}</h4>
        </div>
    )
}

export default SidebarChannel
