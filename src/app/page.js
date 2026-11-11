
"use client";

import { useState } from "react";

export default function Home() {
  const [display, setDisplay] = useState("0");
  const [previous, setPrevious] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waiting, setWaiting] = useState(false);

  const inputNumber = (num) => {
    if (waiting) {
      setDisplay(num);
      setWaiting(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const inputDecimal = () => {
    if (waiting) {
      setDisplay("0.");
      setWaiting(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setPrevious(null);
    setOperator(null);
    setWaiting(false);
  };

  const chooseOperator = (nextOperator) => {
    const value = Number(display);

    if (operator && !waiting) {
      const result = calculate(previous, value, operator);
      setDisplay(String(result));
      setPrevious(result);
    } else {
      setPrevious(value);
    }

    setOperator(nextOperator);
    setWaiting(true);
  };

  const calculate = (a, b, op) => {
    let result;

    switch (op) {
      case "+": result = a + b; break;
      case "−": result = a - b; break;
      case "×": result = a * b; break;
      case "÷":
        if (b === 0) return "Error";
        result = a / b;
        break;
      default: return b;
    }

    return Number(result.toPrecision(12));
  };

  const equals = () => {
    if (operator === null || previous === null || waiting) return;

    const result = calculate(previous, Number(display), operator);

    setDisplay(String(result));
    setPrevious(null);
    setOperator(null);
    setWaiting(true);
  };

  const backspace = () => {
    if (waiting) return;
    setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
  };

  const percentage = () => {
    setDisplay(String(Number(display) / 100));
    setWaiting(true);
  };

  const toggleSign = () => {
    if (display !== "0" && display !== "Error") {
      setDisplay(String(-Number(display)));
    }
  };

  const buttons = [
    { label: "AC", action: clear, type: "utility" },
    { label: "±", action: toggleSign, type: "utility" },
    { label: "%", action: percentage, type: "utility" },
    { label: "÷", action: () => chooseOperator("÷"), type: "operator" },
    { label: "7", action: () => inputNumber("7") },
    { label: "8", action: () => inputNumber("8") },
    { label: "9", action: () => inputNumber("9") },
    { label: "×", action: () => chooseOperator("×"), type: "operator" },
    { label: "4", action: () => inputNumber("4") },
    { label: "5", action: () => inputNumber("5") },
    { label: "6", action: () => inputNumber("6") },
    { label: "−", action: () => chooseOperator("−"), type: "operator" },
    { label: "1", action: () => inputNumber("1") },
    { label: "2", action: () => inputNumber("2") },
    { label: "3", action: () => inputNumber("3") },
    { label: "+", action: () => chooseOperator("+"), type: "operator" },
    { label: "⌫", action: backspace, type: "utility" },
    { label: "0", action: () => inputNumber("0") },
    { label: ".", action: inputDecimal },
    { label: "=", action: equals, type: "equal" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-7">
          <p className="text-indigo-300 text-sm font-semibold tracking-[0.3em] uppercase">
            Next.js Project
          </p>
          <h1 className="text-4xl font-bold text-white mt-2">
            Calculator
          </h1>
          <p className="text-slate-400 mt-2">
            Simple, fast and accurate calculations.
          </p>
        </div>

        <div className="bg-slate-900/90 border border-slate-700 rounded-3xl p-5 shadow-2xl">
          <div className="bg-slate-950 rounded-2xl p-5 mb-5 text-right min-h-28 flex flex-col justify-end">
            <p className="text-slate-400 text-sm mb-2">
              {operator ? `Previous: ${previous} ${operator}` : "Result"}
            </p>
            <div className="text-white text-4xl font-semibold break-all">
              {display}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {buttons.map((button) => (
              <button
                key={button.label}
                onClick={button.action}
                className={`h-16 rounded-2xl text-xl font-semibold transition active:scale-95
                  ${button.type === "equal"
                    ? "bg-indigo-500 hover:bg-indigo-400 text-white"
                    : button.type === "operator"
                      ? "bg-indigo-950 text-indigo-300 hover:bg-indigo-900"
                      : button.type === "utility"
                        ? "bg-slate-700 text-white hover:bg-slate-600"
                        : "bg-slate-800 text-white hover:bg-slate-700"
                  }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-slate-500 text-xs mt-6">
          Built with Next.js and React
        </p>
      </div>
    </main>
  );
}
