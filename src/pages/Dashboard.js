import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from "./Box";
import Products from "../components/Products";
import SideBar from "../components/SideBar";
import "./dash.css";
import ClientList from "../components/ClientList";
import SalesStatistic from "../components/SalesStatistic";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [ShowProduct,setShowProducts] = useState(false);
  const [ShowClient,setShowClient] = useState(false);
  const [ShowCharts,setShowCharts] = useState(false);
 
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  });

  function CountSales() {
    let totalSales = 0;
    for (var product of products) {
      totalSales += parseInt(product.rating.count / 2);
    }
    return totalSales;
  }

  function countRevenue() {
    let TotalRevenue = 0;
    for (var product of products) {
      let revenue = parseInt(product.rating.count / 2) * product.price;
      TotalRevenue += revenue;
    }
    return TotalRevenue;
  }

  return (
    <div className="main">
      <SideBar setShowProducts = {setShowProducts} setShowClient={setShowClient} setShowCharts={setShowCharts}/>

      <div id="dashboard">
        <div className="infoBoxes">
          <Box count={products.length} text="Products" />
          <Box count={CountSales()} text="Total Sales" />
          <Box count={countRevenue()} text="Revenu Generated" />
          <Box count="234" text="Total Clients" />
        </div>

        {ShowProduct && <Products products={products} />}
        {ShowClient && <ClientList />}
        {ShowCharts && <SalesStatistic products={products}/>}
      </div>
    </div>
  );
};

export default Dashboard;
