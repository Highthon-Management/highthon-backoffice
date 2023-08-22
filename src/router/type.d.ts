import React from "react";
import { LinkProps as LP } from "react-router-dom";
import { PageListType } from "./constants";

type linkType<S extends string> = S extends `[:id]` ? number : S;

type linkTypes<S extends string> = S extends `${infer T}/${infer U}`
  ? `${linkType<T>}/${linkTypes<U>}`
  : linkType<S>;

type paths = linkTypes<PageListType>;
