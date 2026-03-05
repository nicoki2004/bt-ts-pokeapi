import { Cache } from "./pokecache.js";
import { test, expect } from "vitest";

test.concurrent.each([
  {
    key: "https://example.com",
    val: "testdata",
    interval: 500, // 1/2 second
  },
  {
    key: "https://example.com/path",
    val: "moretestdata",
    interval: 1000, // 1 second
  },
])("Test Caching $interval ms", async ({ key, val, interval }) => {
  const cache = new Cache(interval);

  cache.add(key, val);
  const cached = cache.get(key);
  expect(cached).toBe(val);

  await new Promise((resolve) => setTimeout(resolve, interval * 2));
  const reaped = cache.get(key);
  expect(reaped).toBe(undefined);

  cache.stopReapLoop();
});

test("Data remains before interval", async () => {
  const interval = 1000;
  const cache = new Cache(interval);
  cache.add("key", "val");

  await new Promise((r) => setTimeout(r, interval / 2)); // Solo la mitad del tiempo
  expect(cache.get("key")).toBe("val");

  cache.stopReapLoop();
});

test("Reap deletes old entries but keeps new ones", async () => {
  const interval = 1000;
  const cache = new Cache(interval);

  cache.add("old", "data1");

  await new Promise((r) => setTimeout(r, 600));
  cache.add("new", "data2");

  await new Promise((r) => setTimeout(r, 500));

  expect(cache.get("old")).toBeUndefined(); // Debería haber sido borrado
  expect(cache.get("new")).toBe("data2"); // Debería seguir ahí (tiene ~90ms de vida)

  cache.stopReapLoop();
});
