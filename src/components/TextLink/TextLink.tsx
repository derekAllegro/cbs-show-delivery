import { Button } from "antd";
import React from "react";

interface Props {
  href: string;
  children: string;
}
export const TextLink = ({ href, children }: Props): React.JSX.Element => {
  return (
    <Button type="link" href={href} style={{ paddingTop: 0, paddingBottom: 0, height: "auto", border: 0 }}>
      {children}
    </Button>
  );
};
