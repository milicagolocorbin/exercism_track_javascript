import { expect, test } from "vitest";
import { hello } from "./hello_world";

test("returns correct greeting", () => {
  expect(hello()).toBe("Hello, World!");
});
