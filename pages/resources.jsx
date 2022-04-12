import { Typography, Link } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import React from 'react';
import styles from '../styles/Home.module.css';

export default function Resources() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Box flexGrow="1" padding={8} textAlign="left" width="100%">
          <Stack spacing={2}>
            <Typography variant="h4">Resources</Typography>
            <Typography variant="h5">ML Engineer</Typography>
            <Typography>
              Accuracy in facial recognition across races:
              <Stack>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://proceedings.mlr.press/v81/buolamwini18a.html"
                >
                  https://proceedings.mlr.press/v81/buolamwini18a.html
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.cs.toronto.edu/~bor/196f21/facial-recognition-nytimes.pdf"
                >
                  http://www.cs.toronto.edu/~bor/196f21/facial-recognition-nytimes.pdf
                </Link>
              </Stack>
            </Typography>
            <Typography>
              RAF-DB:
              <Stack>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.whdeng.cn/raf/model1.html"
                >
                  http://www.whdeng.cn/raf/model1.html
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://arxiv.org/abs/2103.08637"
                >
                  https://arxiv.org/abs/2103.08637
                </Link>
              </Stack>
            </Typography>
            <Typography>
              Perception of Facial Expressions Across Cultures:
              <br />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.apa.org/news/press/releases/2011/09/facial-expressions "
              >
                https://www.apa.org/news/press/releases/2011/09/facial-expressions
              </Link>
            </Typography>
            <Typography>
              Biases in speech recognition:
              <Stack>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://venturebeat.com/2021/04/01/study-finds-that-even-the-best-speech-recognition-systems-exhibit-bias/"
                >
                  https://venturebeat.com/2021/04/01/study-finds-that-even-the-best-speech-recognition-systems-exhibit-bias/
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.scientificamerican.com/article/speech-recognition-tech-is-yet-another-example-of-bias/"
                >
                  https://www.scientificamerican.com/article/speech-recognition-tech-is-yet-another-example-of-bias/
                </Link>
              </Stack>
            </Typography>
            <Typography>
              Frustrations with voice search:
              <br />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://themanifest.com/digital-marketing/resources/siri-alexa-fails-frustrations-with-voice-search"
              >
                https://themanifest.com/digital-marketing/resources/siri-alexa-fails-frustrations-with-voice-search
              </Link>
            </Typography>
            <Typography>
              Filtering sensitive words in names:
              <br />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://news.canningspurple.com.au/when-technology-says-no-to-your-dirty-name/"
              >
                https://news.canningspurple.com.au/when-technology-says-no-to-your-dirty-name/
              </Link>
            </Typography>
            <Typography>
              Context aware ML approach to filtering senstive language:
              <Stack>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://venturebeat.com/2019/02/01/valued-raises-1-7-million-for-slack-chatbot-that-helps-combat-workplace-harassment/"
                >
                  https://venturebeat.com/2019/02/01/valued-raises-1-7-million-for-slack-chatbot-that-helps-combat-workplace-harassment/
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.awarehq.com/blog/identifying-and-reducing-workplace-sexual-harassment-with-ai"
                >
                  https://www.awarehq.com/blog/identifying-and-reducing-workplace-sexual-harassment-with-ai
                </Link>
              </Stack>
            </Typography>

            <Typography variant="h5">Designer</Typography>
            <Typography>
              Inclusive UX research:
              <br />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://uxdesign.cc/designing-a-better-future-with-inclusive-user-research-fb6a2a1c7c73"
              >
                https://uxdesign.cc/designing-a-better-future-with-inclusive-user-research-fb6a2a1c7c73
              </Link>
            </Typography>
            <Typography>
              Diverse UX research groups:
              <br />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://uxinsight.org/resources-for-a-more-inclusive-ux-research-practice/"
              >
                https://uxinsight.org/resources-for-a-more-inclusive-ux-research-practice/
              </Link>
            </Typography>
            <Typography>
              Challenges with name validation:
              <Stack>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.theguardian.com/technology/2015/feb/16/facebook-real-name-policy-suspends-native-americans"
                >
                  https://www.theguardian.com/technology/2015/feb/16/facebook-real-name-policy-suspends-native-americans
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.bbc.com/future/article/20160325-the-names-that-break-computer-systems"
                >
                  https://www.bbc.com/future/article/20160325-the-names-that-break-computer-systems
                </Link>
              </Stack>
            </Typography>
            <Typography>
              Privacy and safety:
              <Stack>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.wired.co.uk/article/clubhouse-app-privacy-security"
                >
                  https://www.wired.co.uk/article/clubhouse-app-privacy-security
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.vice.com/en/article/y3vj3y/apple-airtags-police-reports-stalking-harassment"
                >
                  https://www.vice.com/en/article/y3vj3y/apple-airtags-police-reports-stalking-harassment
                </Link>
              </Stack>
            </Typography>

            <Typography>
              Colour contrast tool:
              <br />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://contrast-ratio.com/"
              >
                https://contrast-ratio.com/
              </Link>
            </Typography>
            <Typography>
              Accessible UI design:
              <br />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://help.shopify.com/en/manual/online-store/themes/customizing-themes/accessibility"
              >
                https://help.shopify.com/en/manual/online-store/themes/customizing-themes/accessibility
              </Link>
            </Typography>
            <Typography>
              Localization:
              <br />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.forbes.com/sites/forbesbusinesscouncil/2022/01/24/three-important-aspects-of-localization-often-overlooked-by-small-businesses/"
              >
                https://www.forbes.com/sites/forbesbusinesscouncil/2022/01/24/three-important-aspects-of-localization-often-overlooked-by-small-businesses/
              </Link>
            </Typography>
            <Typography variant="h5">PM</Typography>
            <Typography>
              Protected classes:
              <br />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://ca.practicallaw.thomsonreuters.com/5-501-5857"
              >
                https://ca.practicallaw.thomsonreuters.com/5-501-5857
              </Link>
            </Typography>
            <Typography>
              Coded bias:
              <br />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://ca.practicallaw.thomsonreuters.com/5-501-5857"
              >
                https://ca.practicallaw.thomsonreuters.com/5-501-5857
              </Link>
            </Typography>
            <Typography>
              Using protected classes to reduce discrimination:
              <br />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3719577"
              >
                https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3719577
              </Link>
            </Typography>
            <Typography>
              Consequences of selling user data:
              <Stack>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.vox.com/policy-and-politics/2018/3/23/17151916/facebook-cambridge-analytica-trump-diagram"
                >
                  https://www.vox.com/policy-and-politics/2018/3/23/17151916/facebook-cambridge-analytica-trump-diagram
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.ama.org/marketing-news/the-murky-ethics-of-data-gathering-in-a-post-cambridge-analytica-world/"
                >
                  https://www.ama.org/marketing-news/the-murky-ethics-of-data-gathering-in-a-post-cambridge-analytica-world/
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.ama.org/marketing-news/the-murky-ethics-of-data-gathering-in-a-post-cambridge-analytica-world/"
                >
                  https://www.ama.org/marketing-news/the-murky-ethics-of-data-gathering-in-a-post-cambridge-analytica-world/
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.washingtonpost.com/technology/2022/01/13/privacy-vr-metaverse/"
                >
                  https://www.washingtonpost.com/technology/2022/01/13/privacy-vr-metaverse/
                </Link>
              </Stack>
            </Typography>
            <Typography>
              Algorithmic censorship of POC and women:
              <Stack>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://12ft.io/proxy?q=https%3A%2F%2Fwww.washingtonpost.com%2Ftechnology%2F2021%2F11%2F21%2Ffacebook-algorithm-biased-race%2F "
                >
                  www.washingtonpost.com/technology/2021/11/21/facebook-algorithm-biased-race
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.refinery29.com/en-gb/2020/12/10150275/shadow-ban-instagram-censorship-women-of-colour "
                >
                  https://www.refinery29.com/en-gb/2020/12/10150275/shadow-ban-instagram-censorship-women-of-colour
                </Link>
              </Stack>
            </Typography>
            <Typography>
              Negative impacts of social media on mental health:
              <Stack>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://onlinelibrary.wiley.com/doi/full/10.1002/da.22466"
                >
                  https://onlinelibrary.wiley.com/doi/full/10.1002/da.22466
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://doi.org/10.1016/j.heliyon.2021.e06327"
                >
                  https://doi.org/10.1016/j.heliyon.2021.e06327
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.theverge.com/2021/9/15/22675130/facebook-instagram-teens-mental-health-damage-internal-research"
                >
                  https://www.theverge.com/2021/9/15/22675130/facebook-instagram-teens-mental-health-damage-internal-research
                </Link>
              </Stack>
            </Typography>
            <Typography>
              Take a break feature:
              <br />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.theverge.com/2021/11/10/22774827/instagram-take-a-break-feature-test-meta-facebook"
              >
                https://www.theverge.com/2021/11/10/22774827/instagram-take-a-break-feature-test-meta-facebook
              </Link>
            </Typography>
          </Stack>
        </Box>
      </main>
    </div>
  );
}
