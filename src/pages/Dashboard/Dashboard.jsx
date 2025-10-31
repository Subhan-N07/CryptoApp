import React from "react";
import Dashboardlayout from "../../components/Dashboardlayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import TransactionSection from "./components/TransactionSection";
import InfroCrad from "./components/InfroCrad";

const Dashboard = () => {
  return (
    <Dashboardlayout title="Dashboard">
      <PortfolioSection></PortfolioSection>
      <div className="flex">
        <PriceSection />
        <TransactionSection />
      </div>
      <InfroCrad />
    </Dashboardlayout>
  );
};

export default Dashboard;
