import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  DelayUpdated,
  GracePeriodUpdated,
  Initialized,
  OwnerCanceled,
  OwnerPending,
  OwnerUpdated,
  TransactionCanceled,
  TransactionExecuted,
  TransactionScheduled,
  Upgraded
} from "../generated/Treasury/Treasury"

export function createDelayUpdatedEvent(
  prevDelay: BigInt,
  newDelay: BigInt
): DelayUpdated {
  let delayUpdatedEvent = changetype<DelayUpdated>(newMockEvent())

  delayUpdatedEvent.parameters = new Array()

  delayUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "prevDelay",
      ethereum.Value.fromUnsignedBigInt(prevDelay)
    )
  )
  delayUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newDelay",
      ethereum.Value.fromUnsignedBigInt(newDelay)
    )
  )

  return delayUpdatedEvent
}

export function createGracePeriodUpdatedEvent(
  prevGracePeriod: BigInt,
  newGracePeriod: BigInt
): GracePeriodUpdated {
  let gracePeriodUpdatedEvent = changetype<GracePeriodUpdated>(newMockEvent())

  gracePeriodUpdatedEvent.parameters = new Array()

  gracePeriodUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "prevGracePeriod",
      ethereum.Value.fromUnsignedBigInt(prevGracePeriod)
    )
  )
  gracePeriodUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newGracePeriod",
      ethereum.Value.fromUnsignedBigInt(newGracePeriod)
    )
  )

  return gracePeriodUpdatedEvent
}

export function createInitializedEvent(version: BigInt): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return initializedEvent
}

export function createOwnerCanceledEvent(
  owner: Address,
  canceledOwner: Address
): OwnerCanceled {
  let ownerCanceledEvent = changetype<OwnerCanceled>(newMockEvent())

  ownerCanceledEvent.parameters = new Array()

  ownerCanceledEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  ownerCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "canceledOwner",
      ethereum.Value.fromAddress(canceledOwner)
    )
  )

  return ownerCanceledEvent
}

export function createOwnerPendingEvent(
  owner: Address,
  pendingOwner: Address
): OwnerPending {
  let ownerPendingEvent = changetype<OwnerPending>(newMockEvent())

  ownerPendingEvent.parameters = new Array()

  ownerPendingEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  ownerPendingEvent.parameters.push(
    new ethereum.EventParam(
      "pendingOwner",
      ethereum.Value.fromAddress(pendingOwner)
    )
  )

  return ownerPendingEvent
}

export function createOwnerUpdatedEvent(
  prevOwner: Address,
  newOwner: Address
): OwnerUpdated {
  let ownerUpdatedEvent = changetype<OwnerUpdated>(newMockEvent())

  ownerUpdatedEvent.parameters = new Array()

  ownerUpdatedEvent.parameters.push(
    new ethereum.EventParam("prevOwner", ethereum.Value.fromAddress(prevOwner))
  )
  ownerUpdatedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownerUpdatedEvent
}

export function createTransactionCanceledEvent(
  proposalId: Bytes
): TransactionCanceled {
  let transactionCanceledEvent = changetype<TransactionCanceled>(newMockEvent())

  transactionCanceledEvent.parameters = new Array()

  transactionCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromFixedBytes(proposalId)
    )
  )

  return transactionCanceledEvent
}

export function createTransactionExecutedEvent(
  proposalId: Bytes,
  targets: Array<Address>,
  values: Array<BigInt>,
  payloads: Array<Bytes>
): TransactionExecuted {
  let transactionExecutedEvent = changetype<TransactionExecuted>(newMockEvent())

  transactionExecutedEvent.parameters = new Array()

  transactionExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromFixedBytes(proposalId)
    )
  )
  transactionExecutedEvent.parameters.push(
    new ethereum.EventParam("targets", ethereum.Value.fromAddressArray(targets))
  )
  transactionExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )
  transactionExecutedEvent.parameters.push(
    new ethereum.EventParam("payloads", ethereum.Value.fromBytesArray(payloads))
  )

  return transactionExecutedEvent
}

export function createTransactionScheduledEvent(
  proposalId: Bytes,
  timestamp: BigInt
): TransactionScheduled {
  let transactionScheduledEvent = changetype<TransactionScheduled>(
    newMockEvent()
  )

  transactionScheduledEvent.parameters = new Array()

  transactionScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromFixedBytes(proposalId)
    )
  )
  transactionScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return transactionScheduledEvent
}

export function createUpgradedEvent(impl: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam("impl", ethereum.Value.fromAddress(impl))
  )

  return upgradedEvent
}
