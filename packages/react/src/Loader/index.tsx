import React from "react";
import { createComponent } from "@lit/react";
import { TAG_NAME, LoaderElement } from "@atlz253/lit/lit-loader";

export const Loader = createComponent({
  tagName: TAG_NAME,
  elementClass: LoaderElement,
  react: React,
});
