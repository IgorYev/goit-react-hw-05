import { useState } from "react";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  return (
    <div className={css.searchFormContainer}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          value={value}
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
