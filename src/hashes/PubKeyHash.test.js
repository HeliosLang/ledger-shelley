import { deepEqual, throws } from "node:assert"
import { describe, it } from "node:test"
import { PubKeyHash } from "./PubKeyHash.js"

describe(PubKeyHash.name, () => {
    it("dummy with default args returns all 0s", () => {
        deepEqual(PubKeyHash.dummy().bytes, new Array(28).fill(0))
    })

    it("dummy with default args doesn't return all 0s", () => {
        throws(() => {
            deepEqual(PubKeyHash.dummy(1).bytes, new Array(28).fill(0))
        })
    })
})
