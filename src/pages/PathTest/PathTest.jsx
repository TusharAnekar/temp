import { useState } from "react";

import { Modal } from "../../components/Modal";

export function PathTest() {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
  };

  return (
    <div>
      <div>
        <button onClick={handleOpen}>Open dialog</button>
        {isOpened && <Modal isOpened={isOpened} setIsOpened ={setIsOpened} />}
      </div>

      <p>
        Running from command line You can run Jest directly from the CLI (if
        it's globally available in your PATH, e.g. by yarn global add jest or
        npm install jest --global) with a variety of useful options. Here's how
        to run Jest on files matching my-test, using config.json as a
        configuration file and display a native OS notification after the run:
        jest my-test --notify --config=config.json If you'd like to learn more
        about running jest through the command line, take a look at the Jest CLI
        Options page.
      </p>

      <p>
        Running from command line You can run Jest directly from the CLI (if
        it's globally available in your PATH, e.g. by yarn global add jest or
        npm install jest --global) with a variety of useful options. Here's how
        to run Jest on files matching my-test, using config.json as a
        configuration file and display a native OS notification after the run:
        jest my-test --notify --config=config.json If you'd like to learn more
        about running jest through the command line, take a look at the Jest CLI
        Options page.
      </p>

      <p>
        Running from command line You can run Jest directly from the CLI (if
        it's globally available in your PATH, e.g. by yarn global add jest or
        npm install jest --global) with a variety of useful options. Here's how
        to run Jest on files matching my-test, using config.json as a
        configuration file and display a native OS notification after the run:
        jest my-test --notify --config=config.json If you'd like to learn more
        about running jest through the command line, take a look at the Jest CLI
        Options page.
      </p>

      <p>
        Running from command line You can run Jest directly from the CLI (if
        it's globally available in your PATH, e.g. by yarn global add jest or
        npm install jest --global) with a variety of useful options. Here's how
        to run Jest on files matching my-test, using config.json as a
        configuration file and display a native OS notification after the run:
        jest my-test --notify --config=config.json If you'd like to learn more
        about running jest through the command line, take a look at the Jest CLI
        Options page.
      </p>

      <p>
        Running from command line You can run Jest directly from the CLI (if
        it's globally available in your PATH, e.g. by yarn global add jest or
        npm install jest --global) with a variety of useful options. Here's how
        to run Jest on files matching my-test, using config.json as a
        configuration file and display a native OS notification after the run:
        jest my-test --notify --config=config.json If you'd like to learn more
        about running jest through the command line, take a look at the Jest CLI
        Options page.
      </p>

      <p>
        Running from command line You can run Jest directly from the CLI (if
        it's globally available in your PATH, e.g. by yarn global add jest or
        npm install jest --global) with a variety of useful options. Here's how
        to run Jest on files matching my-test, using config.json as a
        configuration file and display a native OS notification after the run:
        jest my-test --notify --config=config.json If you'd like to learn more
        about running jest through the command line, take a look at the Jest CLI
        Options page.
      </p>

      <p>
        Running from command line You can run Jest directly from the CLI (if
        it's globally available in your PATH, e.g. by yarn global add jest or
        npm install jest --global) with a variety of useful options. Here's how
        to run Jest on files matching my-test, using config.json as a
        configuration file and display a native OS notification after the run:
        jest my-test --notify --config=config.json If you'd like to learn more
        about running jest through the command line, take a look at the Jest CLI
        Options page.
      </p>

      <p>
        Running from command line You can run Jest directly from the CLI (if
        it's globally available in your PATH, e.g. by yarn global add jest or
        npm install jest --global) with a variety of useful options. Here's how
        to run Jest on files matching my-test, using config.json as a
        configuration file and display a native OS notification after the run:
        jest my-test --notify --config=config.json If you'd like to learn more
        about running jest through the command line, take a look at the Jest CLI
        Options page.
      </p>

      <p>
        Running from command line You can run Jest directly from the CLI (if
        it's globally available in your PATH, e.g. by yarn global add jest or
        npm install jest --global) with a variety of useful options. Here's how
        to run Jest on files matching my-test, using config.json as a
        configuration file and display a native OS notification after the run:
        jest my-test --notify --config=config.json If you'd like to learn more
        about running jest through the command line, take a look at the Jest CLI
        Options page.
      </p>

      <div id={"#projects"}>Projects</div>
    </div>
  );
}
