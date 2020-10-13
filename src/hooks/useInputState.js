import React from "react";

export default () => {
  const [value, setValue] = React.useState("");

  return {
    value,
    onChange: (event) => {
      setValue(event.target.value);
    },
    reset: () => setValue(""),
  };
};
