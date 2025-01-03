import { langAcceptPattern } from "@/constants/pattern";

const useGetLangPrefix = (pathname: string) => {
  const match = pathname.match(langAcceptPattern);
  return match ? `/${match[1]}` : "";
};

export default useGetLangPrefix;
