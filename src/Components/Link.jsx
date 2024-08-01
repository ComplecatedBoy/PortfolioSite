import { Button } from "@mui/material";

function Link() {
  return (
    <>
      <div className="text-white flex flex-row justify-center md:justify-start rounded-full p-2 bg-transparent">
        <Button href="https://www.linkedin.com/in/satyamkumarshah/">
          <img src="./linkedin.png" alt="" className="w-8 md:w-10 " />
        </Button>
        <Button href="https://github.com/ComplecatedBoy">
          <img src="./github.png" alt="" className="w-8 md:w-10" />
        </Button>
        <Button href="mailto:satyamshah1234567890@gmail.com">
          <img src="./gmail.png" alt="" className="w-8 md:w-10" />
        </Button>
      </div>
    </>
  );
}

export default Link;
