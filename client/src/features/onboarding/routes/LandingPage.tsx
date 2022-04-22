import { Page, Button } from "@components";

type Props = {};

function LandingPage({}: Props) {
  return (
    <Page bg="brand.darkPurple">
      <h1>Landing Join</h1>
      <Button onClick={() => null}>Join Friends</Button>

      <Button variant="ghost" onClick={() => null}>
        Create Game
      </Button>
    </Page>
  );
}

export { LandingPage };
