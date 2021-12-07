import React from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import style from './styles.module.scss'
import CategoryContext from '../../context/categoryContext';
import categoriesObject from '../../context/categoriesObject';

export default function WeatherNow() {
    //const [categorySelected, setCategorySelected] = useState("swimming");
    //const categoryObject = categoriesObject;
	//wrap in categorycontext.provider
    
    return (
        <div>
          <div className={style.grid}>
            <h1>Weather Today</h1>
            <Dropdown />
        	</div> 
        </div>
    )
}