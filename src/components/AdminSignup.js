import React from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Box,
  Avatar,
  Card,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Primary() {
  const { signUpWithName, currentUser } = useAuth();
  const [username, setUsername] = React.useState("");
  const [userNameError, setUserNameError] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [conPassword, setConPassword] = React.useState("");
  const [conPasswordError, setConPasswordError] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [firstNameError, setFirstNameError] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [lastNameError, setLastNameError] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConPasswordChange = (event) => {
    setConPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log("Name: " + name);
    // console.log("Username: " + username);
    // console.log("Password: " + password);

    if (username === "") {
      setUserNameError("Username is required");
    } else {
      setUserNameError("");
    }

    if (password === "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }

    if (conPassword === "") {
      setConPasswordError("Confirm Password is required");
    } else {
      setConPasswordError("");
    }

    if (password !== conPassword) {
      setConPasswordError("The passwords entered don't match");
    }

    if (firstName === "") {
      setFirstNameError("First Name is required");
    } else {
      setFirstNameError("");
    }

    if (lastName === "") {
      setLastNameError("Last Name is required");
    } else {
      setLastNameError("");
    }

    if (
      username !== "" &&
      password !== "" &&
      conPassword !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      password === conPassword
    ) {
      try {
        console.log(firstName, lastName);
        var res = await signUpWithName(
          username,
          password,
          firstName + " " + lastName
        );
        // console.log(res);
        if (!res.tokenResponse) window.alert(res);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (currentUser) {
    // return <Navigate to="/verify-email" />;
    window.location.href = "/";
  } else {
    return (
      <Grid
        container
        sx={{
          background:
            "radial-gradient(90% 100% at 50% 0%, #2d685a 0%, #050606 100%), radial-gradient(90% 100% at 50% 0%, #a86487 0%, #827878 100%), radial-gradient(110% 215% at 100% 0%, #000AFF 0%, #3A5525 100%), linear-gradient(230deg, #000 0%, #09FF04 100%), linear-gradient(130deg, #2D2929 0%, #C4B6FB 100%)",
          backgroundBlendMode:
            "overlay, difference, difference, exclusion, normal",
        }}
      >
        <Grid item xs={12} md={7}>
          <CssBaseline />
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 5,
              minHeight: "100vh",
              background: "none",
              color: "white",
              justifyContent: "center",
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <Avatar
                src="https://cdn2.vectorstock.com/i/1000x1000/67/86/mobile-stock-market-business-logo-icon-design-vector-22926786.jpg"
                alt="logo"
                sx={{ width: 112, height: 112, m: 1, alignSelf: "center" }}
              />
            </Link>
            <Typography
              component="h1"
              variant="h5"
              color="#e1b0f7"
              fontWeight={700}
            >
              SIGN UP
            </Typography>

            <Box component="form" sx={{ mt: 3, color: "white" }}>
              <Grid
                container
                spacing={2}
                sx={{
                  width: "80%",
                  marginLeft: "10%",
                  marginRight: "10%",
                }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{ display: "grid", alignContent: "center" }}
                >
                  <TextField
                    name="firstName"
                    required
                    label="First Name"
                    variant="filled"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    style={{ background: "#edd7f7" }}
                  />
                  {firstNameError !== "" && (
                    <Grid
                      item
                      xs={12}
                      sx={{ color: "error.main", justifySelf: "left" }}
                    >
                      {" "}
                      {firstNameError}{" "}
                    </Grid>
                  )}
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{ display: "grid", alignContent: "center" }}
                >
                  <TextField
                    name="lastName"
                    required
                    label="Last Name"
                    variant="filled"
                    value={lastName}
                    onChange={handleLastNameChange}
                    style={{ background: "#edd7f7" }}
                  />
                  {lastNameError !== "" && (
                    <Grid
                      item
                      xs={12}
                      sx={{ color: "error.main", justifySelf: "left" }}
                    >
                      {" "}
                      {lastNameError}{" "}
                    </Grid>
                  )}
                </Grid>

                <Grid item xs={12} sx={{ display: "grid" }}>
                  <TextField
                    name="username"
                    required
                    fullWidth
                    label="Email"
                    variant="filled"
                    value={username}
                    onChange={handleUsernameChange}
                    style={{ background: "#edd7f7" }}
                  />
                  {userNameError !== "" && (
                    <Grid
                      item
                      xs={12}
                      sx={{ color: "error.main", justifySelf: "left" }}
                    >
                      {" "}
                      {userNameError}{" "}
                    </Grid>
                  )}
                </Grid>

                <Grid item xs={12} sx={{ display: "grid" }}>
                  <TextField
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    fullWidth
                    label="Password"
                    variant="filled"
                    value={password}
                    onChange={handlePasswordChange}
                    style={{ background: "#edd7f7" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  {passwordError !== "" && (
                    <Grid
                      item
                      xs={12}
                      sx={{ color: "red", justifySelf: "left" }}
                    >
                      {" "}
                      {passwordError}{" "}
                    </Grid>
                  )}
                </Grid>

                <Grid item xs={12} sx={{ display: "grid" }}>
                  <TextField
                    type={showConfirmPassword ? "text" : "password"}
                    name="con-password"
                    required
                    fullWidth
                    label="Confirm Password"
                    variant="filled"
                    value={conPassword}
                    onChange={handleConPasswordChange}
                    style={{ background: "#edd7f7" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            {showConfirmPassword ? (
                              <VisibilityOff />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  {conPasswordError !== "" && (
                    <Grid
                      item
                      xs={12}
                      sx={{ color: "red", justifySelf: "left" }}
                    >
                      {" "}
                      {conPasswordError}{" "}
                    </Grid>
                  )}
                </Grid>
              </Grid>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  mr: "5%",
                  width: "60%",
                  ml: "5%",
                  fontSize: "1rem",
                  backgroundImage:
                    "linear-gradient( 111.6deg, rgba(174,68,223,1) 27.3%, rgba(246,135,135,1) 112.7% )",
                }}
                onClick={onSubmit}
              >
                CREATE ACCOUNT
              </Button>

              <Grid item>
                Existing account?
                <Link
                  to="/login"
                  variant="body2"
                  style={{ marginLeft: "4px", color: "#5454d4" }}
                >
                  Login
                </Link>
              </Grid>
            </Box>
          </Card>
        </Grid>

        <Grid
          item
          md={5}
          display={{ xs: "none", md: "block" }}
          sx={{
            color: "white",
            minHeight: "100vh",
            backgroundImage:
              "url(https://akm-img-a-in.tosshub.com/businesstoday/images/story/202204/nfts-sixteen_nine-sixteen_nine.jpeg?size=948:533)",
            backgroundSize: "cover",
          }}
        />
      </Grid>
    );
  }
}
