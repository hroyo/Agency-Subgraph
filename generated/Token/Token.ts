// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class DelegateChanged extends ethereum.Event {
  get params(): DelegateChanged__Params {
    return new DelegateChanged__Params(this);
  }
}

export class DelegateChanged__Params {
  _event: DelegateChanged;

  constructor(event: DelegateChanged) {
    this._event = event;
  }

  get delegator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class DelegateVotesChanged extends ethereum.Event {
  get params(): DelegateVotesChanged__Params {
    return new DelegateVotesChanged__Params(this);
  }
}

export class DelegateVotesChanged__Params {
  _event: DelegateVotesChanged;

  constructor(event: DelegateVotesChanged) {
    this._event = event;
  }

  get delegate(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get prevTotalVotes(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newTotalVotes(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class MinterUpdated extends ethereum.Event {
  get params(): MinterUpdated__Params {
    return new MinterUpdated__Params(this);
  }
}

export class MinterUpdated__Params {
  _event: MinterUpdated;

  constructor(event: MinterUpdated) {
    this._event = event;
  }

  get minter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get allowed(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class OwnerCanceled extends ethereum.Event {
  get params(): OwnerCanceled__Params {
    return new OwnerCanceled__Params(this);
  }
}

export class OwnerCanceled__Params {
  _event: OwnerCanceled;

  constructor(event: OwnerCanceled) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get canceledOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnerPending extends ethereum.Event {
  get params(): OwnerPending__Params {
    return new OwnerPending__Params(this);
  }
}

export class OwnerPending__Params {
  _event: OwnerPending;

  constructor(event: OwnerPending) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pendingOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnerUpdated extends ethereum.Event {
  get params(): OwnerUpdated__Params {
    return new OwnerUpdated__Params(this);
  }
}

export class OwnerUpdated__Params {
  _event: OwnerUpdated;

  constructor(event: OwnerUpdated) {
    this._event = event;
  }

  get prevOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get impl(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Token extends ethereum.SmartContract {
  static bind(address: Address): Token {
    return new Token("Token", address);
  }

  DOMAIN_SEPARATOR(): Bytes {
    let result = super.call(
      "DOMAIN_SEPARATOR",
      "DOMAIN_SEPARATOR():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_DOMAIN_SEPARATOR(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DOMAIN_SEPARATOR",
      "DOMAIN_SEPARATOR():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  airDrop(recipient: Address, _uri: string): BigInt {
    let result = super.call("airDrop", "airDrop(address,string):(uint256)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromString(_uri),
    ]);

    return result[0].toBigInt();
  }

  try_airDrop(recipient: Address, _uri: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall("airDrop", "airDrop(address,string):(uint256)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromString(_uri),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  auction(): Address {
    let result = super.call("auction", "auction():(address)", []);

    return result[0].toAddress();
  }

  try_auction(): ethereum.CallResult<Address> {
    let result = super.tryCall("auction", "auction():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  balanceOf(_owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_owner),
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(_owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_owner),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  contractVersion(): string {
    let result = super.call(
      "contractVersion",
      "contractVersion():(string)",
      [],
    );

    return result[0].toString();
  }

  try_contractVersion(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "contractVersion",
      "contractVersion():(string)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  delegates(_account: Address): Address {
    let result = super.call("delegates", "delegates(address):(address)", [
      ethereum.Value.fromAddress(_account),
    ]);

    return result[0].toAddress();
  }

  try_delegates(_account: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("delegates", "delegates(address):(address)", [
      ethereum.Value.fromAddress(_account),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getApproved(_tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId),
    ]);

    return result[0].toAddress();
  }

  try_getApproved(_tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getMultiSig(): Address {
    let result = super.call("getMultiSig", "getMultiSig():(address)", []);

    return result[0].toAddress();
  }

  try_getMultiSig(): ethereum.CallResult<Address> {
    let result = super.tryCall("getMultiSig", "getMultiSig():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPastVotes(_account: Address, _timestamp: BigInt): BigInt {
    let result = super.call(
      "getPastVotes",
      "getPastVotes(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_account),
        ethereum.Value.fromUnsignedBigInt(_timestamp),
      ],
    );

    return result[0].toBigInt();
  }

  try_getPastVotes(
    _account: Address,
    _timestamp: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPastVotes",
      "getPastVotes(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_account),
        ethereum.Value.fromUnsignedBigInt(_timestamp),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getVotes(_account: Address): BigInt {
    let result = super.call("getVotes", "getVotes(address):(uint256)", [
      ethereum.Value.fromAddress(_account),
    ]);

    return result[0].toBigInt();
  }

  try_getVotes(_account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getVotes", "getVotes(address):(uint256)", [
      ethereum.Value.fromAddress(_account),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isApprovedForAll(_owner: Address, _operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_operator),
      ],
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    _owner: Address,
    _operator: Address,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_operator),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isMinter(_minter: Address): boolean {
    let result = super.call("isMinter", "isMinter(address):(bool)", [
      ethereum.Value.fromAddress(_minter),
    ]);

    return result[0].toBoolean();
  }

  try_isMinter(_minter: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isMinter", "isMinter(address):(bool)", [
      ethereum.Value.fromAddress(_minter),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  mint(_uri: string): BigInt {
    let result = super.call("mint", "mint(string):(uint256)", [
      ethereum.Value.fromString(_uri),
    ]);

    return result[0].toBigInt();
  }

  try_mint(_uri: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall("mint", "mint(string):(uint256)", [
      ethereum.Value.fromString(_uri),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  mintBatchTo(
    amount: BigInt,
    recipient: Address,
    uriList: Array<string>,
  ): Array<BigInt> {
    let result = super.call(
      "mintBatchTo",
      "mintBatchTo(uint256,address,string[]):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromStringArray(uriList),
      ],
    );

    return result[0].toBigIntArray();
  }

  try_mintBatchTo(
    amount: BigInt,
    recipient: Address,
    uriList: Array<string>,
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "mintBatchTo",
      "mintBatchTo(uint256,address,string[]):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromStringArray(uriList),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  mintTo(recipient: Address, _uri: string): BigInt {
    let result = super.call("mintTo", "mintTo(address,string):(uint256)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromString(_uri),
    ]);

    return result[0].toBigInt();
  }

  try_mintTo(recipient: Address, _uri: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall("mintTo", "mintTo(address,string):(uint256)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromString(_uri),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minter(param0: Address): boolean {
    let result = super.call("minter", "minter(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);

    return result[0].toBoolean();
  }

  try_minter(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("minter", "minter(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  nonce(_account: Address): BigInt {
    let result = super.call("nonce", "nonce(address):(uint256)", [
      ethereum.Value.fromAddress(_account),
    ]);

    return result[0].toBigInt();
  }

  try_nonce(_account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nonce", "nonce(address):(uint256)", [
      ethereum.Value.fromAddress(_account),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(_tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId),
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(_tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingOwner(): Address {
    let result = super.call("pendingOwner", "pendingOwner():(address)", []);

    return result[0].toAddress();
  }

  try_pendingOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("pendingOwner", "pendingOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  proxiableUUID(): Bytes {
    let result = super.call("proxiableUUID", "proxiableUUID():(bytes32)", []);

    return result[0].toBytes();
  }

  try_proxiableUUID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "proxiableUUID",
      "proxiableUUID():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  supportsInterface(_interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(_interfaceId)],
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(_interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(_interfaceId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(_tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId),
    ]);

    return result[0].toString();
  }

  try_tokenURI(_tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _manager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall extends ethereum.Call {
  get inputs(): AcceptOwnershipCall__Inputs {
    return new AcceptOwnershipCall__Inputs(this);
  }

  get outputs(): AcceptOwnershipCall__Outputs {
    return new AcceptOwnershipCall__Outputs(this);
  }
}

export class AcceptOwnershipCall__Inputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall__Outputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class AirDropCall extends ethereum.Call {
  get inputs(): AirDropCall__Inputs {
    return new AirDropCall__Inputs(this);
  }

  get outputs(): AirDropCall__Outputs {
    return new AirDropCall__Outputs(this);
  }
}

export class AirDropCall__Inputs {
  _call: AirDropCall;

  constructor(call: AirDropCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _uri(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class AirDropCall__Outputs {
  _call: AirDropCall;

  constructor(call: AirDropCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}

export class CancelOwnershipTransferCall extends ethereum.Call {
  get inputs(): CancelOwnershipTransferCall__Inputs {
    return new CancelOwnershipTransferCall__Inputs(this);
  }

  get outputs(): CancelOwnershipTransferCall__Outputs {
    return new CancelOwnershipTransferCall__Outputs(this);
  }
}

export class CancelOwnershipTransferCall__Inputs {
  _call: CancelOwnershipTransferCall;

  constructor(call: CancelOwnershipTransferCall) {
    this._call = call;
  }
}

export class CancelOwnershipTransferCall__Outputs {
  _call: CancelOwnershipTransferCall;

  constructor(call: CancelOwnershipTransferCall) {
    this._call = call;
  }
}

export class DelegateCall extends ethereum.Call {
  get inputs(): DelegateCall__Inputs {
    return new DelegateCall__Inputs(this);
  }

  get outputs(): DelegateCall__Outputs {
    return new DelegateCall__Outputs(this);
  }
}

export class DelegateCall__Inputs {
  _call: DelegateCall;

  constructor(call: DelegateCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DelegateCall__Outputs {
  _call: DelegateCall;

  constructor(call: DelegateCall) {
    this._call = call;
  }
}

export class DelegateBySigCall extends ethereum.Call {
  get inputs(): DelegateBySigCall__Inputs {
    return new DelegateBySigCall__Inputs(this);
  }

  get outputs(): DelegateBySigCall__Outputs {
    return new DelegateBySigCall__Outputs(this);
  }
}

export class DelegateBySigCall__Inputs {
  _call: DelegateBySigCall;

  constructor(call: DelegateBySigCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _deadline(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _v(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get _r(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get _s(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class DelegateBySigCall__Outputs {
  _call: DelegateBySigCall;

  constructor(call: DelegateBySigCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _multiSig(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _initStrings(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _auction(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _initialOwner(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get _uri(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class MintBatchToCall extends ethereum.Call {
  get inputs(): MintBatchToCall__Inputs {
    return new MintBatchToCall__Inputs(this);
  }

  get outputs(): MintBatchToCall__Outputs {
    return new MintBatchToCall__Outputs(this);
  }
}

export class MintBatchToCall__Inputs {
  _call: MintBatchToCall;

  constructor(call: MintBatchToCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get uriList(): Array<string> {
    return this._call.inputValues[2].value.toStringArray();
  }
}

export class MintBatchToCall__Outputs {
  _call: MintBatchToCall;

  constructor(call: MintBatchToCall) {
    this._call = call;
  }

  get tokenIds(): Array<BigInt> {
    return this._call.outputValues[0].value.toBigIntArray();
  }
}

export class MintToCall extends ethereum.Call {
  get inputs(): MintToCall__Inputs {
    return new MintToCall__Inputs(this);
  }

  get outputs(): MintToCall__Outputs {
    return new MintToCall__Outputs(this);
  }
}

export class MintToCall__Inputs {
  _call: MintToCall;

  constructor(call: MintToCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _uri(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class MintToCall__Outputs {
  _call: MintToCall;

  constructor(call: MintToCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class OnFirstAuctionStartedCall extends ethereum.Call {
  get inputs(): OnFirstAuctionStartedCall__Inputs {
    return new OnFirstAuctionStartedCall__Inputs(this);
  }

  get outputs(): OnFirstAuctionStartedCall__Outputs {
    return new OnFirstAuctionStartedCall__Outputs(this);
  }
}

export class OnFirstAuctionStartedCall__Inputs {
  _call: OnFirstAuctionStartedCall;

  constructor(call: OnFirstAuctionStartedCall) {
    this._call = call;
  }
}

export class OnFirstAuctionStartedCall__Outputs {
  _call: OnFirstAuctionStartedCall;

  constructor(call: OnFirstAuctionStartedCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SafeTransferOwnershipCall extends ethereum.Call {
  get inputs(): SafeTransferOwnershipCall__Inputs {
    return new SafeTransferOwnershipCall__Inputs(this);
  }

  get outputs(): SafeTransferOwnershipCall__Outputs {
    return new SafeTransferOwnershipCall__Outputs(this);
  }
}

export class SafeTransferOwnershipCall__Inputs {
  _call: SafeTransferOwnershipCall;

  constructor(call: SafeTransferOwnershipCall) {
    this._call = call;
  }

  get _newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SafeTransferOwnershipCall__Outputs {
  _call: SafeTransferOwnershipCall;

  constructor(call: SafeTransferOwnershipCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get _operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get _newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateMintersCall extends ethereum.Call {
  get inputs(): UpdateMintersCall__Inputs {
    return new UpdateMintersCall__Inputs(this);
  }

  get outputs(): UpdateMintersCall__Outputs {
    return new UpdateMintersCall__Outputs(this);
  }
}

export class UpdateMintersCall__Inputs {
  _call: UpdateMintersCall;

  constructor(call: UpdateMintersCall) {
    this._call = call;
  }

  get _minters(): Array<UpdateMintersCall_mintersStruct> {
    return this._call.inputValues[0].value.toTupleArray<UpdateMintersCall_mintersStruct>();
  }
}

export class UpdateMintersCall__Outputs {
  _call: UpdateMintersCall;

  constructor(call: UpdateMintersCall) {
    this._call = call;
  }
}

export class UpdateMintersCall_mintersStruct extends ethereum.Tuple {
  get minter(): Address {
    return this[0].toAddress();
  }

  get allowed(): boolean {
    return this[1].toBoolean();
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get _newImpl(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get _newImpl(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}
