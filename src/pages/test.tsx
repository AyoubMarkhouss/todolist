import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";

import React, { useState, useEffect } from "react";

// const test = () => {
//      const [task, setTask] = useState("");
//   const [tab, setTab] = useState([]);

//   const addtask = () => {
//     setTab((prev) => {
//       return [...prev, { id: prev.length + 1, task: task }];
//     });
//     setTask("");

//     const deletetask = (id) => {
//       const newTab = tab.filter((item) => item.id != id);
//       setTab(newTab);
//     };

//     const change = (event: React.ChangeEvent<HTMLInputElement>) => {
//       setTask(event.target.value);
//     };
  return (

    <main className="bg-black h-screen text-slate-50 flex flex-col items-center">
      <div className="h-10 w-60 rounded-b-3xl py-10 text-4xl bg-slate-50/30  flex justify-center items-center">
        <h1>ToDoLista</h1>
      </div>
      <div className="py-10 flex space-x-6 ">
        <Input
          placeholder="Add task .."
          id="task"
          value={task}
          onChange={change}
        />
        {task && (
          <Button variant="outline" className="w-52" onClick={addtask}>
            Add Task
            <MdOutlineAddCircleOutline className="size-6" />
          </Button>
        )}
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[500px]">Tasks</TableHead>
              <TableHead>Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tab.map((item) => {
              return (
                <TableRow className="">
                  <TableCell className="font-medium" key={item.id}>
                    {item.task}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        deletetask(item.id);
                      }}
                    >
                      <MdOutlineDelete size={20} />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}}

export default test;
