import { Link as L, LinkProps } from "react-router-dom";
import { PageListType } from "./constants";

type linkType<S extends string> = S extends `[:id]` ? number : S;

type linkTypes<S extends string> = S extends `${infer T}/${infer U}`
  ? `${linkType<T>}/${linkTypes<U>}`
  : linkType<S>;

interface CustomLinkProps extends Omit<LinkProps, "to"> {
  to: linkTypes<PageListType>;
  children: React.ReactNode;
}

export const Link = ({ children, ...props }: CustomLinkProps) => (
  <L {...props}>{children}</L>
);
