"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import MainReport from "@/components/MainReport";
import RiskEntry from "@/components/RiskEntry";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRiskData } from "@/lib/riskSlice";

export default function Home() {
  const { items, loading, error, selected } = useSelector(
    (state) => state.risk
  );
  const selectedTopics = useSelector((state) => state.filters.topics);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRiskData());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="flex float-right justify-end h-[90.3vh] w-3/4 items-center overflow-y-hidden">
        <div
          className={`${
            selected ? "w-1/2 px-4" : "w-full pl-8"
          } h-[90.3vh] overflow-y-scroll pt-6 flex  flex-col`}
        >
          {selectedTopics.length > 0 && (
            <div>
              <p className="text-2xl font-primary font-semibold">
                Selected topics:
              </p>
              <p className="text-xl font-primary mb-4">
                {selectedTopics.join(", ")}
              </p>
            </div>
          )}
          <span className="font-primary font-semibold text-2xl">
            {loading
              ? "Loading..."
              : items
              ? items.length + " results found"
              : ""}
          </span>

          {!loading &&
            items &&
            items.map((risk, index) => <RiskEntry key={index} risk={risk} />)}
        </div>
        {selected && <MainReport />}
      </main>
    </div>
  );
}
