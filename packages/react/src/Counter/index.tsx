import React from "react";
import { createComponent } from "@lit/react";
import { CounterElement, TAG_NAME } from "@atlz253/lit/lit-counter";

export const Counter = createComponent({
  tagName: TAG_NAME,
  elementClass: CounterElement,
  react: React,
});
