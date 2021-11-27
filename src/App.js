import { useState, useRef } from "react";
import "./App.css";

// ['MOUSE_TRACK']
const FEATURES = [];

// row builder
const rowBuilder = ({ columnAmount = 10, rowIdx = 0 }) => {
  return Array(columnAmount)
    .fill()
    .map((_, idx) => ({ rowIndex: rowIdx, idx, active: false }));
};

// TODO: move to separate file
const BoxCell = ({ cellData, ...rest }) => {
  const { active } = cellData;
  const cellStyle = active ? { background: "#04D4F0" } : {};
  return <div style={cellStyle} {...rest}></div>;
};

export default function App() {
  const GRID_CELL_CLASS_NAME = "Grid-row-cell";
  const defaultCellState = { rowIndex: 0, idx: 0, active: false };
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const [startPoint, setStartPoint] = useState(defaultCellState);
  const [isArrowVisible, setIsArrowVisible] = useState(false);
  const [grid, setGrid] = useState(
    weekDays.map((day, rowIdx) => rowBuilder({ columnAmount: 12, rowIdx }))
  );
  const arrowRef = useRef();
  const gridRef = useRef();

  const onSelectionStart = (e, { rowIndex, idx, active }) => {
    const gridClone = [...grid];
    const activeRow = gridClone[rowIndex];
    const targetCell = activeRow[idx];
    targetCell.active = !targetCell.active;
    gridClone.splice(rowIndex, 1, activeRow);

    setStartPoint({ rowIndex, idx, active: !active });
    setGrid(gridClone);
    if (FEATURES.includes("MOUSE_TRACK")) {
      setIsArrowVisible(true);
    }
  };

  const handleMouseMove = (e) => {
    if (!isArrowVisible || !FEATURES.includes("MOUSE_TRACK")) {
      return;
    }
    function lineDraw(ax, ay, bx, by) {
      if (ax > bx) {
        bx = ax + bx;
        ax = bx - ax;
        bx = bx - ax;

        by = ay + by;
        ay = by - ay;
        by = by - ay;
      }

      let distance = Math.sqrt(Math.pow(bx - ax, 2) + Math.pow(by - ay, 2));
      let calc = Math.atan((by - ay) / (bx - ax));
      let degree = (calc * 180) / Math.PI;

      arrowRef.current.style.top = ay + "px";
      arrowRef.current.style.left = ax + "px";
      arrowRef.current.style.transform = `rotate(${degree}deg)`;
      arrowRef.current.style.width = `${distance}px`;
    }

    // TODO: track cursor
    lineDraw(
      startPoint.idx * 30,
      startPoint.rowIndex * 30,
      e.clientX - 10,
      e.clientY - 100
    );
  };

  const onSelectionEnd = (e, endPoint) => {
    const { target } = e;
    // prevent selection
    if (target.className !== GRID_CELL_CLASS_NAME) {
      return;
    }
    // do this shit!
    const booleanOperation = startPoint.active ? true : false;
    const gridClone = [...grid];
    // positive - bottom, negative - top
    const rowDifference = endPoint.rowIndex - startPoint.rowIndex;
    // positive - right, negative - left
    // const columnDifference = endPoint.idx - startPoint.idx;

    // fill cell logic depending on direction
    gridClone.forEach((row, rowIndex) => {
      row.forEach((cell) => {
        if (rowDifference >= 0) {
          if (
            // right => left && left => right
            (rowIndex >= startPoint.rowIndex &&
              rowIndex <= endPoint.rowIndex &&
              cell.idx >= startPoint.idx &&
              cell.idx <= endPoint.idx) ||
            (startPoint.rowIndex <= rowIndex &&
              endPoint.rowIndex >= rowIndex &&
              startPoint.idx >= cell.idx &&
              endPoint.idx <= cell.idx)
          ) {
            cell.active = booleanOperation;
          }
        }
        if (rowDifference < 0) {
          if (
            // left => right && right => left
            (rowIndex >= endPoint.rowIndex &&
              rowIndex <= startPoint.rowIndex &&
              cell.idx >= endPoint.idx &&
              cell.idx <= startPoint.idx) ||
            (startPoint.rowIndex >= rowIndex &&
              endPoint.rowIndex <= rowIndex &&
              startPoint.idx <= cell.idx &&
              endPoint.idx >= cell.idx)
          ) {
            cell.active = booleanOperation;
          }
        }
      });
    });

    // update structure && draw
    setGrid(gridClone);

    //
    setIsArrowVisible(false);
  };

  return (
    <div className="App">
      <div className="Grid" ref={gridRef} onMouseMove={handleMouseMove}>
        <div
          className="Grid-cursor-straight"
          style={{ display: isArrowVisible ? "block" : "none" }}
          ref={arrowRef}
        ></div>
        {/* FIXME: redo */}
        <header className="Grid-header">
          <div className="Grid-header-weekdayBlank"></div>
          {Array(12)
            .fill()
            .map((_, idx) => (
              <div key={`timeslot-${idx}`} className="Grid-header-timecell">
                {idx + 1}
              </div>
            ))}
        </header>
        {grid.map((row, idx) => {
          return (
            <div className="Grid-row" key={idx}>
              <div className="Grid-row-weekday">{weekDays[idx]}</div>
              {row.map((cell) => {
                return (
                  // TODO: top line... time slots
                  <BoxCell
                    key={`${cell.rowIndex}_${cell.idx}`}
                    className={GRID_CELL_CLASS_NAME}
                    cellData={cell}
                    onMouseDown={(e) => onSelectionStart(e, cell)}
                    onMouseUp={(e) => onSelectionEnd(e, cell)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <footer className="Grid-footer">
        <a rel="noreferrer" href="https://github.com/vadvoice" target="_blank">
          <img alt="github profile" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
        </a>
      </footer>
    </div>
  );
}
