import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Divider,
  Box,
  Avatar,
  Card,
  CardContent
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import SettingsIcon from "@material-ui/icons/Settings";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CreditCardIcon from "@material-ui/icons/CreditCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  heading: {
    flexGrow: 1
  },
  sectionHeading: {
    marginBottom: theme.spacing(2)
  },
  addIcon: {
    marginRight: theme.spacing(1)
  },
  whatsappIcon: {
    marginRight: theme.spacing(1)
  },
  settingsIcon: {
    marginLeft: theme.spacing(1)
  },
  emailLink: {
    textDecoration: "none",
    color: theme.palette.primary.main
  },
  creditLimitLink: {
    textDecoration: "none",
    color: theme.palette.primary.main
  },
  card: {
    marginBottom: theme.spacing(2)
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    marginRight: theme.spacing(2)
  }
}));

const App = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.heading}>
            Search Transaction
          </Typography>
          <IconButton color="inherit">
            <AddIcon />
            Add Sale
          </IconButton>
          <IconButton color="inherit">
            <AddIcon />
            Add Purchase
          </IconButton>
          <IconButton color="inherit">
            <AddIcon />
            Add More
          </IconButton>
          <IconButton
            color="inherit"
            className={classes.whatsappIcon}
            href="https://api.whatsapp.com/send?phone=1234567890"
            target="_blank"
          >
            <WhatsAppIcon />
          </IconButton>
          <IconButton color="inherit" className={classes.settingsIcon}>
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon />
          </IconButton>
        </div>
        <List>
          {[
            "Home",
            "Parties",
            "Items",
            "Sale",
            "Purchase",
            "Expenses",
            "Cash & Banks",
            "My Online Store",
            "Reports",
            "Apply For Loan"
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} className={classes.card}>
                <CardContent>
                  <Typography variant="h6" className={classes.sectionHeading}>
                    Import Parties
                  </Typography>
                  <div>
                    <TextField label="Add Party" fullWidth />
                    <TextField label="Party" fullWidth />
                    <TextField label="Amount" fullWidth />
                  </div>
                </CardContent>
              </Paper>
              <Paper elevation={3} className={classes.card}>
                <CardContent>
                  <Typography variant="h6" className={classes.sectionHeading}>
                    KPS SANHULA
                  </Typography>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar className={classes.avatar}>
                      <MailOutlineIcon />
                    </Avatar>
                    <Typography variant="body1">Phone: 7330669826</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Avatar className={classes.avatar}>
                      <MailOutlineIcon />
                    </Avatar>
                    <Typography variant="body1">
                      Email:
                      <a
                        href="mailto:example@example.com"
                        className={classes.emailLink}
                      >
                        Add Email ID
                      </a>
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Avatar className={classes.avatar}>
                      <CreditCardIcon />
                    </Avatar>
                    <Typography variant="body1">
                      Credit limit set:
                      <a href="#" className={classes.creditLimitLink}>
                        set credit limit
                      </a>
                    </Typography>
                  </Box>
                </CardContent>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} className={classes.card}>
                <CardContent>
                  <Typography variant="h6" className={classes.sectionHeading}>
                    Transactions
                  </Typography>
                  <Divider />
                  <Box mt={2}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Type" fullWidth />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Number" fullWidth />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Date" fullWidth />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Total" fullWidth />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Balance" fullWidth />
                      </Grid>
                      <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth>
                          Add Transaction
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default App;
