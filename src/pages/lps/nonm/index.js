import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import image0 from "../../../../public/lps/nosm/image0.jpg";

function Page() {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/lps/nonm/landing");
  }, []);

  return (
    <>
      <Image alt="" src={image0} layout="responsive" objectFit="none" />
    </>
  );
}

export default Page;
