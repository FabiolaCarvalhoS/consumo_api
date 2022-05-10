import React, { useState, useEffect } from "react";
import axios from "axios";
import ListaProdutos from "../components/ListaProdutos";

const [produtos, setProdutos] = useState([])

useEffect(() => {
    axios.get('http://localhost:3001/produtos/')
        .then((response) => {
            setProdutos(response.data)
        })
        .catch((err) => {
            console.error("Ops! ocorreu um erro" + err)
        })
}, [])

    .then((response) => {
        setProdutos(response.data)
    })

    .catch((err) => {
        console.error("Ops! ocorreu um erro" + err)
    })