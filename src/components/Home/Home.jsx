import { React } from 'react';
import style from "./Home.module.css"
import RecProducts from "../RecProuducts/RecProuducts"
import CategorySlider from '../CategorySlider/CategorySlider'
import MainSlider from "../MainSlider/MainSlider"

export default function Home(){
    return <>
    <MainSlider/>
    <CategorySlider/>
    <RecProducts />
    </>
} 