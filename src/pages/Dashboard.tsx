import { Stack, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import React, { useState, useRef } from "react";

interface Item {
  id: number;
  name: string;
}

const items: Item[] = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  // ... more items
];

const Dashboard = () => {
  const listRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollLeft += 100;
    }
  };
  useEffect(() => {
    console.log(test(12357887));
  }, []);

  const test: any = (num: any) => {
    if (num < 10) {
      return 1;
    } else {
      return 1 + test(Math.floor(num / 10));
    }
  };

  return (
    <div>
      <button onClick={scrollLeft}>Left</button>
      <div
        ref={listRef}
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <ul style={{ display: "flex" }}>
          {items.map((item) => (
            <li key={item.id} style={{ marginRight: "10px" }}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={scrollRight}>Right</button>
    </div>
  );
};

export default Dashboard;
