const Footer = () => {
  const date = new Date();
  return (
    <footer className="w-full mt-10 py-5 flex flex-col  gap-2 bg-[#252525] ">
      <div
        className="absolute  "
        style={{
          backgroundImage: "url('/images/background-header.webp')",
        }}
      />
      <div className=" flex justify-center items-center gap-1">
        <svg
          className="w-3 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
          <path d="M15.536,8.464A1,1,0,0,0,16.95,7.05a7,7,0,1,0,0,9.9,1,1,0,0,0-1.414-1.414,5,5,0,1,1,0-7.072Z" />
        </svg>

        <span>{date.getFullYear()} All rights reserved</span>
      </div>
      <ul className="flex justify-center items-center gap-4">
        <li>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/Icons/discord.svg" alt="discord"></img>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/Icons/youtube.svg" alt="youtube"></img>
          </a>
        </li>
        <li>
          <a
            href="https://twitch.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/Icons/twitch.svg" alt="twitch"></img>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
