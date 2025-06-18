import { useEffect } from "react";
import { useRouter } from "next/router";

const faq = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
};

export default faq;
