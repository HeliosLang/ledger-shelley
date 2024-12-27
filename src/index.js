export { 
    decodePubKeyHash, 
    makeDummyPubKeyHash, 
    makePubKeyHash
} from "./hashes/index.js"
export { 
    decodeNativeScript,
    makeNativeSigScript, 
    makeNativeAllScript, 
    makeNativeAnyScript, 
    makeNativeAtLeastScript
} from "./native/index.js"
export { 
    SHELLEY_GENESIS_PARAMS,
    SHELLEY_GENESIS_PROTOCOL_PARAMS
} from "./params/index.js"

/**
 * @import { BytesLike } from "@helios-lang/codec-utils"
 * @import { AssertExtends } from "@helios-lang/type-utils"
 * @import { ByteArrayData, UplcData } from "@helios-lang/uplc"
 */

/**
 * @typedef {object} Hash
 * @prop {number[]} bytes
 * @prop {() => number[]} toCbor
 * @prop {() => string} toHex
 * @prop {() => string} toString
 * @prop {() => UplcData} toUplcData
 */

/**
 * @typedef {{
 *   activeSlotsCoeff: number
 *   protocolParams: {
 *     protocolVersion: {
 *       minor: number
 *       major: number
 *     }
 *     decentralisationParam: number
 *     eMax: number
 *     extraEntropy: {
 *       tag: string
 *     }
 *     maxTxSize: number
 *     maxBlockBodySize: number
 *     maxBlockHeaderSize: number
 *     minFeeA: number
 *     minFeeB: number
 *     minUTxOValue: number
 *     poolDeposit: number
 *     minPoolCost: number
 *     keyDeposit: number
 *     nOpt: number
 *     rho: number
 *     tau: number
 *     a0: number
 *   }
 *   genDelegs: {
 *     [key: string]: {
 *       delegate: string
 *       vrf: string
 *     }
 *   }
 *   updateQuorum: number
 *   networkId: string
 *   initialFunds: {}
 *   maxLovelaceSupply: number
 *   networkMagic: number
 *   epochLength: number
 *   systemStart: string
 *   slotsPerKESPeriod: number
 *   slotLength: number
 *   maxKESEvolutions: number
 *   securityParam: number
 * }} ShelleyGenesisParams
 */

/**
 * @typedef {object} PubKeyHash
 * @prop {"PubKeyHash"} kind
 * @prop {number[]} bytes
 * @prop {() => string} dump
 * @prop {(other: PubKeyHash) => boolean} isEqual
 * @prop {() => number[]} toCbor
 * @prop {() => string} toHex
 * @prop {() => string} toString
 * @prop {() => ByteArrayData} toUplcData
 */

/**
 * @typedef {AssertExtends<Hash, PubKeyHash>}
 */

/**
 * @typedef {PubKeyHash | BytesLike} PubKeyHashLike
 */

/**
 * @typedef {{
*   isSignedBy: (hash: PubKeyHash) => boolean
* }} NativeContext
*/

/**
 * @template {NativeContext} [C=NativeContext]
 * @typedef {(NativeSigScript<C>
 *   | NativeAllScript<C>
 *   | NativeAnyScript<C>
 *   | NativeAtLeastScript<C>
 * )} NativeScript
 */

/**
 * @template {NativeContext} [C=NativeContext]
 * @typedef {object} NativeSigScript
 * @prop {"Sig"} kind
 * @prop {PubKeyHash} hash
 * @prop {(ctx: C) => boolean} eval
 * @prop {() => number[]} toCbor
 * @prop {() => object} toJson
 */

/**
 * @template {NativeContext} [C=NativeContext]
 * @typedef {object} NativeAllScript
 * @prop {"All"} kind
 * @prop {NativeScript<C>} scripts
 * @prop {(ctx: C) => boolean} eval
 * @prop {() => number[]} toCbor
 * @prop {() => object} toJson
 */

/**
 * @template {NativeContext} [C=NativeContext]
 * @typedef {object} NativeAnyScript
 * @prop {"Any"} kind
 * @prop {NativeScript<C>} scripts
 * @prop {(ctx: C) => boolean} eval
 * @prop {() => number[]} toCbor
 * @prop {() => object} toJson
 */

/**
 * @template {NativeContext} [C=NativeContext]
 * @typedef {object} NativeAtLeastScript
 * @prop {"AtLeast"} kind
 * @prop {number} nRequired
 * @prop {NativeScript<C>} scripts
 * @prop {(ctx: C) => boolean} eval
 * @prop {() => number[]} toCbor
 * @prop {() => object} toJson
 */