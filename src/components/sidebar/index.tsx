// import movieIcon from "./icons/movie-icon";
// import tvSeriesIcon from "./icons/series-icon";
// import bookmarkIcon from "./icons/bookmark-icon";
import { Link, useLocation } from "react-router-dom";
import { Box, Hidden, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const navLinks = [
  {
    name: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    name: "Movies",
    icon: <HomeIcon />,
    link: "/movies",
  },
  {
    name: "Tv Series",
    icon: <HomeIcon />,
    link: "/tv-series",
  },
  {
    name: "Bookmarks",
    icon: <HomeIcon />,
    link: "/",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        backgroundColor: "#161d2f",
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          sm: "100%",
          lg: 200,
        },
        // height: "100vh"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          gap: 5,
          alignItems: {
            xs: "center",
            ls: "start",
          },
          width: "100%",
        }}
      >
        <Hidden smDown>
          <Typography
            variant="h5"
            component="h1"
            my={2}
            fontWeight={400}
            fontSize={18}
          >
            Movies App
          </Typography>
        </Hidden>
        <Box
          sx={{
            py: {
              xs: "0px",
              ls: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 4,
          }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              style={{ textDecoration: "none" }}
            >
                 
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                  textDecoration: "none",
                }}
              >
            

                <Hidden mdDown>
                  <Box style={{display:"flex",gap:3}}>
                  <Typography style={{color:"white"}}>{item.icon}</Typography>
                  <Typography>{item.name}</Typography>
                  </Box>
                 
                </Hidden>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
