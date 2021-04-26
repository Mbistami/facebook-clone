import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src='https://avatars3.githubusercontent.com/u/42296438?s=460&u=a9ac37e30d64d5ef3f823d7caeb5153cd3ecdbbe&v=4' title='Moussa Bistami' />
            <SidebarRow 
                Icon={LocalHospitalIcon} 
                title="COVID-19 Information Center"
            />
            <SidebarRow 
                Icon={EmojiFlagsIcon}
                title="Pages"
            />
            <SidebarRow 
                Icon={PeopleIcon}
                title="Friends"
            />
            <SidebarRow 
                Icon={EmojiFlagsIcon}
                title="Pages"
            />
            <SidebarRow 
                Icon={ChatIcon}
                title="Messenger"
            />
            <SidebarRow 
                Icon={StorefrontIcon}
                title="Marketplace"
            />
            <SidebarRow 
                Icon={VideoLibraryIcon}
                title="Videos"
            />
            <SidebarRow 
                Icon={ExpandMoreOutlinedIcon}
                title="Videos"
            />
        </div>
    )
}


export default Sidebar
