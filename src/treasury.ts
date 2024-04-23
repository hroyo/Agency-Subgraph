import {
  DelayUpdated as DelayUpdatedEvent,
  GracePeriodUpdated as GracePeriodUpdatedEvent,
  Initialized as InitializedEvent,
  OwnerCanceled as OwnerCanceledEvent,
  OwnerPending as OwnerPendingEvent,
  OwnerUpdated as OwnerUpdatedEvent,
  TransactionCanceled as TransactionCanceledEvent,
  TransactionExecuted as TransactionExecutedEvent,
  TransactionScheduled as TransactionScheduledEvent,
  Upgraded as UpgradedEvent
} from "../generated/Treasury/Treasury"
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
} from "../generated/schema"

export function handleDelayUpdated(event: DelayUpdatedEvent): void {
  let entity = new DelayUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prevDelay = event.params.prevDelay
  entity.newDelay = event.params.newDelay

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGracePeriodUpdated(event: GracePeriodUpdatedEvent): void {
  let entity = new GracePeriodUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prevGracePeriod = event.params.prevGracePeriod
  entity.newGracePeriod = event.params.newGracePeriod

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerCanceled(event: OwnerCanceledEvent): void {
  let entity = new OwnerCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.canceledOwner = event.params.canceledOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerPending(event: OwnerPendingEvent): void {
  let entity = new OwnerPending(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.pendingOwner = event.params.pendingOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerUpdated(event: OwnerUpdatedEvent): void {
  let entity = new OwnerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prevOwner = event.params.prevOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransactionCanceled(
  event: TransactionCanceledEvent
): void {
  let entity = new TransactionCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransactionExecuted(
  event: TransactionExecutedEvent
): void {
  let entity = new TransactionExecuted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  //entity.targets = event.params.targets
  entity.values = event.params.values
  entity.payloads = event.params.payloads

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransactionScheduled(
  event: TransactionScheduledEvent
): void {
  let entity = new TransactionScheduled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.impl = event.params.impl

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
