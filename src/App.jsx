import { useState } from "react";
import "./app.css";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";

function App() {
  const [queryType, setQueryType] = useState("general");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setQueryType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!firstName) newErrors.firstName = "First Name is required.";
    if (!lastName) newErrors.lastName = "Last Name is required.";
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!message) newErrors.message = "Message is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      // Here, you can handle form submission (e.g., send data to API)
    }
  };

  return (
    <>
      <Grid container spacing={4}>
        <Paper
          elevation={10}
          style={{
            backgroundColor: "white",
            width: "100%",
            maxWidth: "620px",
            height: "auto",
            margin: "20px auto",
            padding: "20px",
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className="label">
              <Typography>First Name *</Typography>
              <Typography>Last Name *</Typography>
            </div>
            <div className="inputs">
              <TextField
                variant="outlined"
                label="First Name"
                color="success"
                fullWidth
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
              <TextField
                variant="outlined"
                label="Last Name"
                color="success"
                fullWidth
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </div>
            <div className="EmailAdress">
              <Typography>Email *</Typography>
              <TextField
                variant="outlined"
                color="success"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
            </div>
            <div className="Query">
              <Typography>Query Type *</Typography>
              <div className="radio-group">
                <FormControl component="fieldset">
                  <RadioGroup row value={queryType} onChange={handleChange}>
                    <div className="radio-item">
                      <FormControlLabel
                        value="general"
                        control={<Radio color="success"/>}
                        label="General Inquiry"
                      />
                    </div>
                    <div className="radio-item">
                      <FormControlLabel
                        value="support"
                        control={<Radio color="success"/>}
                        label="Support Request"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className="EmailAdress">
              <Typography>Message *</Typography>
              <TextField
                variant="outlined"
                color="success"
                multiline
                rows={4}
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={!!errors.message}
                helperText={errors.message}
              />
            </div>
            <FormControlLabel
              control={<Checkbox required color="success" />}
              label="I consent to being contacted by the team"
            />
            <div>
              <button variant="contained" className="btn" type="submit" color="success">
                Submit
              </button>
            </div>
          </form>
        </Paper>
      </Grid>
    </>
  );
}

export default App;
