import { DEFAULT_ICON_SIZE } from "@app/utils/constants";
import Image from "next/image";

export function SocialMediaContacts() {
  return (
    <ul className="social-media-contacts">
      <li>
        <a
          href="https://www.linkedin.com/in/thejfreitas/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="images/linkedin.svg"
            alt="LinkedIn"
            width={DEFAULT_ICON_SIZE}
            height={DEFAULT_ICON_SIZE}
          />
        </a>
      </li>

      <li>
        <a
          href="https://github.com/thejfreitas"
          aria-label="Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="images/github.svg"
            alt="Github"
            width={DEFAULT_ICON_SIZE}
            height={DEFAULT_ICON_SIZE}
          />
        </a>
      </li>
    </ul>
  );
}
