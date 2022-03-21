import { useRouter } from "next/router";
import React from "react";

function Page() {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/lps/nosm/landing");
  }, []);

  return (
    <>
      <p>carregando...</p>
    </>
  );
}

export default Page;
