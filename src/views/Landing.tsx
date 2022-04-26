import React from "react";
import { withTheme } from "styled-components";
import copy from "copy-text-to-clipboard";
import Swal from "sweetalert2";
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
              Founder in Seattle
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        style={{
          gap: "30px",
        }}
      >
        <Box>
          <Link
            color={theme.colors.blue}
            target="_blank"
            href={config.links.twitter}
          >
            twitter
          </Link>
        </Box>
        <Box
          onClick={handleCopyDiscord}
          color={theme.colors.yellow}
          style={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          <Typography color={theme.colors.yellow}>discord</Typography>
        </Box>
        <Box>
          <Link
            color={theme.colors.pink}
            target="_blank"
            href={config.links.github}
          >
            github
          </Link>
        </Box>
        <Box>
          <Link
            color={theme.colors.green}
            target="_blank"
            href={config.links.wallet}
          >
            wallet
          </Link>
        </Box>
      </Box>
      <Box maxWidth="700px">
        <Typography>
          Hi,
          {
            // eslint-disable-next-line
            " I'm "
          }
          {
            // eslint-disable-next-line
            "Charles, and I'm a Founder at "
          }
          <Link
            target="_blank"
            href={config.links.branch}
            color={theme.colors.yellow}
          >
            Branch
          </Link>{" "}
          in Seattle! I enjoy building and investing in the crypto space,
          playing video games and meeting new friends in my free time!
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
        <Box marginTop="20px">
          <Typography>
            Where do all of these bird avatars come from?{" "}
            <Link
              target="_blank"
              href={config.links.berbs}
              color={theme.colors.yellow}
            >
              I make (some of) them
            </Link>
            !
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
              "A lot has happened over the past few years."
              // Here's some of the highlights.
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
          <Box>
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
