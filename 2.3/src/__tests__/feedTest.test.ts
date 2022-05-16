import { Animal } from "../animal";
import { getAnimal } from "../zoo";

const alex: Animal = getAnimal("Alex");
const marty: Animal = getAnimal("Marty");
const melman: Animal = getAnimal("Melman");
const gloria: Animal = getAnimal("Gloria");

const lionFood = ["meat"];
const zebraFood = ["grass", "leaves", "shrubs", "bark"];
const giraffeFood = ["leaves", "hay", "carrots"];
const hippoFood = ["grass", "reeds", "shoots"];

const badFood = ["shrimp", "potatoes", "pizza", "icecream"];

describe("feeding animals", () => {
  //test("Alex likes the food we expect", () => {});
  test("Alex likes the food we expect", () => {
    /*
        Positive Tests
        Testing liked foods means iterating through the animals preferred foods.
        We have predifined `lion` food, as well as for each animal type here.
        We pass the foods to the animal's `feed()` method, and verify the
        returned string.
    */
    lionFood.forEach((food) => {
      expect(alex.feed(food)).toBe(`Alex the Lion likes ${food}!`);
    });
    /*
        Negative Tests
        For disliked foods we can do the same, and have a predefined array,
        `badFood` that NONE of our animals like.
    */
    badFood.forEach((food) => {
      expect(alex.feed(food)).toBe(`Alex the Lion does not like ${food}!`);
    });
  });
  test("Marty likes the food we expect", () => {
    // Positive Tests
    zebraFood.forEach((food) => {
      expect(marty.feed(food)).toBe(`Marty the Zebra likes ${food}!`);
    });
    // Negative Tests
    badFood.forEach((food) => {
      expect(marty.feed(food)).toBe(`Marty the Zebra does not like ${food}!`);
    });
  });
  test("Melman likes the food we expect", () => {
    // Positive Tests
    giraffeFood.forEach((food) => {
      expect(melman.feed(food)).toBe(`Melman the Giraffe likes ${food}!`);
    });
    // Negative Tests
    badFood.forEach((food) => {
      expect(melman.feed(food)).toBe(
        `Melman the Giraffe does not like ${food}!`
      );
    });
  });
  test("Gloria likes the food we expect", () => {
    // Positive Tests
    hippoFood.forEach((food) => {
      expect(gloria.feed(food)).toBe(`Gloria the Hippopotamus likes ${food}!`);
    });
    // Negative Tests
    badFood.forEach((food) => {
      expect(gloria.feed(food)).toBe(
        `Gloria the Hippopotamus does not like ${food}!`
      );
    });
  });
});

