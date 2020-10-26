import React from "react";

export default (
  initialValue: string = ""
): {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
} => {
  const [value, setValue] = React.useState(initialValue);

  return {
    value,
    onChange: (event) => {
      setValue(event.target.value);
    },
    reset: () => setValue(""),
  };
};
