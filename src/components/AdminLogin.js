import React from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Avatar,
  Box,
  Card,
  InputAdornment,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login({ setCompanyData }) {
  const { signIn, currentUser } = useAuth();
  // const { signUp } = useAuth();
  const [username, setUsername] = React.useState("");
  const [userNameError, setUserNameError] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [show, setShow] = React.useState(window.innerWidth < 500);

  React.useEffect(() => {
    window.addEventListener("resize", updateShow);
    return () => window.removeEventListener("resize", updateShow);
  });

  const updateShow = () => {
    setShow(window.innerWidth < 500);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onLogin = async (e) => {
    e.preventDefault();

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

    if (username !== "" && password !== "") {
      try {
        var res = await signIn(username, password);
        if (!res._tokenResponse) window.alert(res);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (currentUser ) {
    // return <Navigate to="/user-home" />;
    window.location.href = "/";
  }  else {
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
              background: "none",
              padding: 5,
              minHeight: "100vh",
              color: "white",
              alignItems: "center",
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
              WELCOME BACK TO
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              color="#e1b0f7"
              fontWeight={700}
            >
              FLIPKART GRID
            </Typography>

            <Typography
              component="h4"
              variant="h5"
              color="#e1b0f7"
              fontWeight={500}
            >
              <br />
              It's great to have you back!
            </Typography>

            <Box component="form" sx={{ mt: 3, color: "white", width: "100%" }}>
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
                    name="username"
                    required
                    // fullWidth
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
                    type="password"
                    name="password"
                    required
                    //fullWidth
                    label="Password"
                    variant="filled"
                    value={password}
                    onChange={handlePasswordChange}
                    style={{ background: "#edd7f7" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          style={{
                            ...(show && { display: "none" }),
                            width: "40%",
                          }}
                        >
                          
                        </InputAdornment>
                      ),
                    }}
                  />
                  {passwordError !== "" && (
                    <Grid
                      item
                      xs={12}
                      sx={{ color: "error.main", justifySelf: "left" }}
                    >
                      {" "}
                      {passwordError}{" "}
                    </Grid>
                  )}
                </Grid>
              </Grid>

              <br />

              <Button
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
                onClick={onLogin}
                size="large"
              >
                LOGIN
              </Button>

              <Grid container>
                <Grid
                  item
                  xs={show ? 4 : 0}
                  display={!show ? "none" : "block"}
                  textAlign="left"
                >
                  <Link to="/forgot-pass" style={{ color: "#5454d4" }}>
                    Forgot password?
                  </Link>
                </Grid>

                <Grid
                  item
                  xs={show ? 8 : 12}
                  style={{ textAlign: "end", textAlignLast: "center" }}
                >
                  Don't have an account?
                  <Link
                    to="/register"
                    variant="body2"
                    style={{ marginLeft: "4px", color: "#5454d4" }}
                  >
                    Create For Free
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grid>

        <Grid
          item
          xs={4}
          md={5}
          sx={{
            color: "white",
            minHeight: "100vh",
            backgroundImage:
              "url(https://akm-img-a-in.tosshub.com/businesstoday/images/story/202204/nfts-sixteen_nine-sixteen_nine.jpeg?size=948:533)",
          }}
          display={{ xs: "none", md: "block" }}
        />
      </Grid>
    );
  }
}
