import React from "react";

const Keypad = () => {
  return (
    <div className="keypad">
      <div className="keypad-row">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
      <div className="keypad-row">
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </div>
      <div className="keypad-row">
        <button>7</button>
        <button>8</button>
        <button>9</button>
      </div>
      <div className="keypad-row">
        <button>0</button>
        <button>Qty</button>
        <button>Disc</button>
      </div>
    </div>
  );
};

export default Keypad;
