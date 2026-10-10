import { test } from "node:test";
import assert from "node:assert/strict";
import { brand, derivePalettes } from "@/brand";

test("the accepted brand sheet is written into the brand slots", () => {
  assert.equal(brand.productName, "Patronly");
  assert.equal(brand.logo, null);
  assert.equal(brand.primaryColor, "#b4442e");
  assert.equal(brand.tone, "warm, direct, no jargon");
});

test("the brand colour derives the accepted light and dark shades", () => {
  const { light, dark } = derivePalettes(brand.primaryColor);
  assert.equal(light.primary, "10 59% 44%");
  assert.equal(dark.primary, "10 59% 59%");
});
