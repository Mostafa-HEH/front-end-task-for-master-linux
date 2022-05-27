import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const Input = ({
  label,
  type,
  value,
  handleChanges,
  name,
  startAdormentIcon,
  endAdormentIcon,
  placeholder,
  validate,
}) => {
  return (
    <TextField
      required
      label={label}
      type={type}
      value={value}
      onChange={(e) => handleChanges(e, name)}
      InputProps={{
        startAdornment: startAdormentIcon ? (
          <InputAdornment position="start">{startAdormentIcon}</InputAdornment>
        ) : null,
        endAdornment: endAdormentIcon ? (
          <InputAdornment position="end">{endAdormentIcon}</InputAdornment>
        ) : null,
      }}
      variant="outlined"
      placeholder={placeholder}
      error={validate?.state}
      helperText={validate?.state ? validate.massage : null}
    />
  );
};

export default Input;
