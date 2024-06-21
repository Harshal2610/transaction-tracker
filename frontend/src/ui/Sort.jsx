import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Sort() {
  const [selectOption, setSelectOption] = useState("date-asc");

  return (
    <div>
      Sort
      <select
        value={selectOption}
        onChange={(e) => setSelectOption(e.target.value)}
      >
        <option value="date-asc"></option>
        <option value="date-dsc"></option>
        <option value="amount-asc"></option>
        <option value="amount-dsc"></option>
      </select>
    </div>
  );
}

export default Sort;
