import { FC, Fragment, ReactNode } from "react";
import Link from "next/link";

import { useAppSetting } from "@/context/AppContext";

interface LinkPrefixProps {
  path: string;
  children: ReactNode;
}

const LinkPrefix: FC<LinkPrefixProps> = ({ path, children }) => {
  const { settings } = useAppSetting();

  return (
    <Fragment>
      <Link href={`${settings.langPrefix}/${path}`}>{children}</Link>
    </Fragment>
  );
};

export default LinkPrefix;
