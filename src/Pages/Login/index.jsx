import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { connect } from "react-redux";

import { loggedUser } from "../../Services/Actions";
import { resetStudentScore } from "../../Services/Actions";
import Input from "./Input";
import FormHead from "./FormHead";

import { useStyles } from "./styles";

// Design Inspiration
//  https://dribbble.com/shots/14981045-Login-Sign-in

const Login = ({ loggedUser, resetStudentScore }) => {
  // Styles classes from ./styles.js
  const classes = useStyles();

  // change route hock
  const navigate = useNavigate();

  //   Password visability
  const [passVisability, setPassVisability] = useState(false);

  //   Values thats comes from on changes function
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  // validations
  const [nameValidate, setNameValidate] = useState({
    state: false,
    massage: "",
  });

  const [passwordValidate, setPasswordValidate] = useState({
    state: false,
    massage: "",
  });

  // simulate students external API  authenticate
  const [loading, setLoading] = useState(false);

  // inputs validation
  const validateInputs = (name = "submit") => {
    // validation
    switch (name) {
      case "name":
        // validate name
        if (values.name.length < 3) {
          setNameValidate({
            state: true,
            massage: "name must be more than 3 char",
          });
        } else if (values.name.length > 32) {
          setNameValidate({
            state: true,
            massage: "name must be less than 32 char",
          });
        } else {
          setNameValidate({
            state: false,
            massage: "",
          });
        }
        break;

      case "password":
        // validate password
        if (values.password.length < 7) {
          setPasswordValidate({
            state: true,
            massage: "password must be more than 8 char",
          });
        } else if (values.password.length > 32) {
          setPasswordValidate({
            state: true,
            massage: "password must be less than 32 char",
          });
        } else {
          setPasswordValidate({
            state: false,
            massage: "",
          });
        }
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    // Reset students score because it add previous to new score if page not refresh becuse of redux
    resetStudentScore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   Handle fields changes and assign theme into new state
  const handleChanges = (e, name) => {
    setValues((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));

    // validate on change
    validateInputs(name);
  };

  //   Handle form submit
  const handleSubmit = (e) => {
    // Prevent Default submition
    e.preventDefault();

    // if inputs are empty for any reason
    if (!(values.name && values.email && values.password)) return;

    // active loader
    setLoading(true);

    //add user Data with this action  to Redux store
    loggedUser(values);

    // semulate api request with external api
    setTimeout(() => {
      navigate("/exam");
      setLoading(false);
    }, 3000);
  };

  return (
    <Box className={classes.container}>
      <Typography component="h1" className={classes.logo}>
        Master Linux Test
      </Typography>
      <Paper
        component="form"
        elevation={2}
        onSubmit={(e) => handleSubmit(e)}
        className={classes.form}
      >
        {loading ? (
          <Box className={classes.loader}>
            <CircularProgress color="primary" className={classes.progress} />
          </Box>
        ) : null}
        <Box className={classes.formwrapper}>
          <FormHead />
          <Input
            label="Name"
            type="text"
            name="name"
            value={values.name}
            handleChanges={handleChanges}
            startAdormentIcon={<PersonIcon color="primary" />}
            placeholder="Jhon Doo"
            validate={nameValidate}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={values.email}
            handleChanges={handleChanges}
            startAdormentIcon={<EmailIcon color="primary" />}
            placeholder="user@masterlinux.com"
          />
          <Input
            label="Password"
            type={passVisability ? "text" : "password"}
            name="password"
            value={values.password}
            handleChanges={handleChanges}
            startAdormentIcon={<HttpsIcon color="primary" />}
            endAdormentIcon={
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setPassVisability((prev) => !prev)}
                edge="end"
              >
                {passVisability ? (
                  <VisibilityOff color="primary" />
                ) : (
                  <Visibility color="primary" />
                )}
              </IconButton>
            }
            placeholder="xxxxxxxx"
            validate={passwordValidate}
          />
          <Button
            variant="contained"
            size="large"
            type="submit"
            disabled={nameValidate.state || passwordValidate.state}
          >
            Enroll Now
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default connect(null, {
  loggedUser,
  resetStudentScore,
})(Login);
