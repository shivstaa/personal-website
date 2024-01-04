import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton, Box, Grid } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { GoLinkExternal } from "react-icons/go";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import IconComponent from "./icons";
import Link from "next/link";
import YouTube from "react-youtube";
import ChipComponent from "./pill";

const ProjectCard = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % data?.images.length);
  };

  const toPreviousImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + data?.images.length) % data?.images.length,
    );
  };

  const renderVideo = () => {
    const opts = {
      height: isMobile ? "200" : "500",
      width: "100%",
      playerVars: {
        autoplay: 0,
      },
    };

    return <YouTube videoId={data?.videoLink} opts={opts} />;
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", p: 4, width: "100%" }}
    >
      <Card
        sx={{
          width: { xs: "100%", md: "80%" },
          maxWidth: "1200px",
          bgcolor: "rgb(17, 24, 39)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          transition: "0.3s",
        }}
      >
        <CardContent sx={{ paddingBottom: theme.spacing(4) }}>
          {isMobile && (
            <>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ textAlign: "left", paddingTop: 2 }}
              >
                {data?.title}
              </Typography>
              {data?.images && data?.images.length > 0 ? (
                <Box sx={{ position: "relative", width: "100%", mt: 2 }}>
                  <CardMedia
                    component="img"
                    image={data?.images[currentImage]}
                    alt="Project image"
                    sx={{
                      height: 200,
                      objectFit: "contain",
                      backgroundColor: "black",
                    }}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: 16,
                      transform: "translateY(-50%)",
                      color: "white",
                    }}
                    onClick={toPreviousImage}
                  >
                    <ArrowBackIosIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: "50%",
                      right: 16,
                      transform: "translateY(-50%)",
                      color: "white",
                    }}
                    onClick={toNextImage}
                  >
                    <ArrowForwardIosIcon />
                  </IconButton>
                </Box>
              ) : data?.videoLink ? (
                <Box sx={{ width: "100%", mt: 2 }}>{renderVideo()}</Box>
              ) : null}
            </>
          )}

          <Grid container spacing={4} sx={{ pt: { md: 2 } }}>
            {!isMobile && (
              <Grid item xs={12} md={4}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ textAlign: "left" }}
                >
                  {data?.title}
                </Typography>
                <ChipComponent
                  items={data?.languages || []}
                  colorScheme={{ background: "primary" }}
                />
                <ChipComponent
                  items={data?.frameworks || []}
                  colorScheme={{ background: "secondary" }}
                />
                <ChipComponent
                  items={data?.tools || []}
                  colorScheme={{ background: "error" }}
                />
              </Grid>
            )}

            <Grid item xs={12} md={8}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  lineHeight: 1.75,
                  mt: { xs: 2, md: 0 },
                }}
              >
                {data?.description}
              </Typography>

              <Box
                sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}
              >
                <Link
                  href={data?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:underline"
                >
                  GitHub <GoLinkExternal className="ml-1" />
                </Link>
                {data?.devpost && (
                  <Link
                    href={data?.devpost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center ml-4 hover:underline"
                  >
                    Devpost <GoLinkExternal className="ml-1" />
                  </Link>
                )}
              </Box>
            </Grid>
          </Grid>

          {!isMobile && (
            <>
              {data?.images && data?.images.length > 0 ? (
                <Box
                  sx={{ position: "relative", width: "80%", mt: 4, mx: "auto" }}
                >
                  <CardMedia
                    component="img"
                    image={data?.images[currentImage]}
                    alt="Project image"
                    sx={{
                      width: "100%",
                      height: 500,
                      objectFit: "contain",
                      backgroundColor: "black",
                    }}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: 16,
                      transform: "translateY(-50%)",
                      color: "white",
                    }}
                    onClick={toPreviousImage}
                  >
                    <ArrowBackIosIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: "50%",
                      right: 16,
                      transform: "translateY(-50%)",
                      color: "white",
                    }}
                    onClick={toNextImage}
                  >
                    <ArrowForwardIosIcon />
                  </IconButton>
                </Box>
              ) : data?.videoLink ? (
                <Box
                  sx={{ position: "relative", width: "80%", mt: 4, mx: "auto" }}
                >
                  {renderVideo()}
                </Box>
              ) : null}
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProjectCard;