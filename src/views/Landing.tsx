import React from "react";
import { withTheme } from "styled-components";
import copy from "copy-text-to-clipboard";
import Swal from "sweetalert2";
import ChangelogEntry from "../components/landing/ChangelogEntry";
import { Box } from "../components/shared/Box";
import { Link } from "../components/shared/Link";
import { Typography } from "../components/shared/Typography";
import { config } from "../config";

interface LandingProps {
  theme: any;
}

const Landing = ({ theme }: LandingProps) => {
  const handleCopyDiscord = () => {
    if (copy(config.discord)) {
      Swal.fire({
        title: "Success!",
        text: "My discord tag has been copied to your clipboard!",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        title: "Failed!",
        text: "Could not copy my discord tag to your clipboard!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      margin="30px auto"
      paddingX="30px"
      style={{ gap: "30px" }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Box>
            <Typography fontSize="25px">Charles Vien</Typography>
          </Box>
          <Box>
            <Typography fontSize="20px" color={theme.colors.subtext}>
              Software Engineer in Seattle
            </Typography>
          </Box>
        </Box>
        {/* <Box height="50px">
          <img width="100%" height="100%" src="/logo.png" alt="Logo" />
        </Box> */}
      </Box>
      <Box
        display="flex"
        style={{
          gap: "30px",
          textDecoration: "underline",
        }}
      >
        <Box>
          <Link
            color={theme.colors.text}
            target="_blank"
            href={config.links.twitter}
          >
            twitter
          </Link>
        </Box>
        <Box
          onClick={handleCopyDiscord}
          style={{
            cursor: "pointer",
          }}
        >
          discord
        </Box>
        <Box>
          <Link
            color={theme.colors.text}
            target="_blank"
            href={config.links.github}
          >
            github
          </Link>
        </Box>
        <Box>
          <Link
            color={theme.colors.text}
            target="_blank"
            href={config.links.blog}
          >
            blog
          </Link>
        </Box>
      </Box>
      <Box>
        <Typography>
          Hi,
          {
            // eslint-disable-next-line
            " i'm "
          }
          {
            // eslint-disable-next-line
            "Charles, and i'm a Software Engineer at "
          }
          <Link
            target="_blank"
            href={config.links.branch}
            color={theme.colors.yellow}
          >
            Branch
          </Link>{" "}
          in Seattle!
        </Typography>
      </Box>
      <Box>
        <Box>
          <Typography fontSize="20px">[+] Updates</Typography>
        </Box>
        <Box marginTop="10px">
          <Typography>
            To keep up with recent news follow me on{" "}
            <Link
              target="_blank"
              href={config.links.twitter}
              color={theme.colors.yellow}
            >
              Twitter
            </Link>
            .
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography fontSize="20px">[-] Changelog</Typography>
        </Box>
        <Box marginTop="10px">
          <Typography>
            {
              // eslint-disable-next-line
              "A lot has happened over the past few years. Here's some of the highlights."
            }
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          marginY="30px"
          style={{
            gap: "30px",
          }}
        >
          <ChangelogEntry color={theme.colors.green} date="November 69420">
            <span>
              Had <Typography color={theme.colors.green}>child</Typography>
            </span>
          </ChangelogEntry>
          <ChangelogEntry color={theme.colors.pink} date="November 42060">
            <span>
              Got{" "}
              <Typography color={theme.colors.pink}>
                reverse vasectomy
              </Typography>
            </span>
          </ChangelogEntry>
          <ChangelogEntry color={theme.colors.blue} date="November 2069">
            <span>
              Got <Typography color={theme.colors.blue}>married</Typography>
            </span>
          </ChangelogEntry>
          <ChangelogEntry color={theme.colors.green} date="November 420">
            <span>
              Got <Typography color={theme.colors.green}>vasectomy</Typography>
            </span>
          </ChangelogEntry>
          <Box marginTop="10px">
            <Typography>
              {
                // eslint-disable-next-line
                "If you're interested in more specific details on timelines, head over to my "
              }
              <Link
                target="_blank"
                href={config.links.linkedin}
                color={theme.colors.yellow}
              >
                LinkedIn
              </Link>
              .
            </Typography>
          </Box>
          <Box marginTop="10px">
            <Typography>
              Powered by web3 and{" "}
              <Link
                target="_blank"
                href={config.links.ipfs}
                color={theme.colors.yellow}
              >
                IPFS
              </Link>
              !
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default withTheme(Landing);
