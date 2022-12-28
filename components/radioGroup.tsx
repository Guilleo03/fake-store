import { FC } from "react";

import Radio from "@mui/material/Radio";
import RadioGroupMUI from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

type Props = {
  options: any[];
  title: string;
};

const RadioGroup: FC<Props> = ({ options, title }) => {
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">{title}</FormLabel>
        <RadioGroupMUI
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          {options &&
            options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
        </RadioGroupMUI>
      </FormControl>
    </div>
  );
};

export default RadioGroup;
