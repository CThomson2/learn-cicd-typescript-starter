import { describe, expect, test } from "vitest";
import { getAPIKey } from "../auth";

const person = {
    isActive: false,
    age: 32
};

describe("person", () => {
    test("person is defined", () => {
        expect(person).toBeDefined();
    });

    test("is active", () => {
        expect(person.isActive).toBeTruthy();
    })
})