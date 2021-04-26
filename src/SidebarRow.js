import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarRow.css'

function SidebarRow({ title, src, Icon }) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
