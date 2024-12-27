import { encodeInt, encodeTuple } from "@helios-lang/cbor"
import { makePubKeyHash } from "../hashes/index.js"

/**
 * @import { NativeContext, NativeSigScript, PubKeyHash, PubKeyHashLike } from "src/index.js"
 */

/**
 * @param {PubKeyHashLike} hash 
 */
export function makeNativeSigScript(hash) {
    return 
}

/**
 * @template {NativeContext} [C=NativeContext]
 * @implements {NativeSigScript<C>}
 */
class NativeSigScriptImpl {
    /**
     * @readonly
     * @type {PubKeyHash}
     */
    hash

    /**
     * @param {PubKeyHashLike} hash 
     */
    constructor(hash) {
        this.hash = makePubKeyHash(hash)
    }

    /**
     * @param {C} ctx 
     * @returns {boolean}
     */
    eval(ctx) {
        return ctx.isSignedBy(this.hash)
    }

    /**
     * @returns {number[]}
     */
    toCbor() {
        return encodeTuple([encodeInt(0), this.hash.toCbor()])
    }

    /**
     * @returns {object}
     */
    toJson() {
        return {
            type: "sig",
            keyHash: this.hash.toHex()
        }
    }
}