import { useSelector } from "@/store/hooks";
import Link from "next/link";
import { styled } from '@mui/material/styles';
import { AppState } from "@/store/store";
import Image from "next/image";

export default function Logo() {
  const customizer = useSelector((state: AppState) => state.customizer);
  const LinkStyled = styled(Link)(() => ({
    height: customizer.TopbarHeight,
    width: customizer.isCollapse && !customizer.isSidebarHover ? "40px" : "180px",
    overflow: "hidden",
    display: "block",
  }));

  if (customizer.activeDir === "ltr") {
    return (
      <LinkStyled href="/">
        {customizer.activeMode === "dark" ? (
          <Image
            src="/images/logos/mainLogo.jpg"
            alt="logo"
            width={174}
            height={174}
            priority
          />
        ) : (
          <Image
            src={"/images/logos/mainLogo.jpg"}
            alt="logo"
            width={174}
            height={174}
            priority
          />
        )}
      </LinkStyled>
    );
  }

  return (
    <LinkStyled href="/">
      {customizer.activeMode === "dark" ? (
        <Image
          src="/images/logos/mainLogo.jpg"
          alt="logo"
          width={174}
          height={174}
          priority
        />
      ) : (
        <Image
          src="/images/logos/mainLogo.jpg"
          alt="logo"
          height={174}
          width={174}
          priority
        />
      )}
    </LinkStyled>
  );
}
