/** @jsx jsx */
import { jsx } from "theme-ui";

import { LandingPageLayout } from "../components/shared/layout";
import SEO from "../components/shared/seo";

const Success = () => (
  <LandingPageLayout>
    <SEO />
    <section sx={{ height: `100vh`, variant: `layout.main` }}>
      <h1
        sx={{
          color: `text2`,
          textShadow: `0px 10px 20px rgba(0, 0, 0, 0.25)`,
        }}
      >
        <span role="img" aria-labelledby="Thank you icon">
          🙏{" "}
        </span>
        Thank you for subscribing!
      </h1>
      <p>
        I’m really excited you’re here. There’s just one more thing left to do:
      </p>
      <p sx={{ fontWeight: `bold` }}>
        Please click the “confirm your email” button in the email I just sent.
      </p>
      <p>
        So head over to your inbox, click the confirm button. If you can't find
        the confirmation email please check your spam folder. Alternatively you
        can drop me a line at{" "}
        <span sx={{ fontWeight: `bold` }}>tiago@tiagofsanchez.com</span>.
      </p>
      <p>See you arround!</p>
    </section>
  </LandingPageLayout>
);

export default Success;
