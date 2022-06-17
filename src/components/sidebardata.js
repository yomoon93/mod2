import React, {useState} from 'react'
import * as AiIcons from 'react-icons/ai'
import * as FcIcons from 'react-icons/fc'



export const SidebarData = [
    {
        title:'Home',
        link:'/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
        },
        {
        title:'Weather',
        link:'/weather',
        icon: <FcIcons.FcAbout/>,
        cName: 'nav-text'
        },
        {
        title:'Saved',
        link:'/saved',
        icon: <AiIcons.AiFillContacts/>,
        cName: 'nav-text'
        },
        {
        title:'Contact',
        link:'/contact',
        icon: <AiIcons.AiFillContacts/>,
        cName: 'nav-text'
        },
        {
        title:'About',
        link:'/about',
        icon: <AiIcons.AiFillContacts/>,
        cName: 'nav-text'
        },
]