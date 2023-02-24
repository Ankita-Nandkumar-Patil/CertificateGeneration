import React from 'react';
// import Login from './Login'
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Protected(props) {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!login){
            navigate('/Login')
        }
    });
  return (
    <div>
        <Component />
    </div>
  )
}
