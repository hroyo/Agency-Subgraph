import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  Initialized,
  OwnerCanceled,
  OwnerPending,
  OwnerUpdated,
  ProposalCanceled,
  ProposalCreated,
  ProposalExecuted,
  ProposalQueued,
  ProposalThresholdBpsUpdated,
  ProposalVetoed,
  QuorumVotesBpsUpdated,
  Upgraded,
  VetoerUpdated,
  VoteCast,
  VotingDelayUpdated,
  VotingPeriodUpdated
} from "../generated/Governor/Governor"

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

export function createProposalCanceledEvent(
  proposalId: Bytes
): ProposalCanceled {
  let proposalCanceledEvent = changetype<ProposalCanceled>(newMockEvent())

  proposalCanceledEvent.parameters = new Array()

  proposalCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromFixedBytes(proposalId)
    )
  )

  return proposalCanceledEvent
}

export function createProposalCreatedEvent(
  proposalId: Bytes,
  targets: Array<Address>,
  values: Array<BigInt>,
  calldatas: Array<Bytes>,
  description: string,
  descriptionHash: Bytes,
  proposal: ethereum.Tuple
): ProposalCreated {
  let proposalCreatedEvent = changetype<ProposalCreated>(newMockEvent())

  proposalCreatedEvent.parameters = new Array()

  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromFixedBytes(proposalId)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam("targets", ethereum.Value.fromAddressArray(targets))
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "calldatas",
      ethereum.Value.fromBytesArray(calldatas)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "descriptionHash",
      ethereum.Value.fromFixedBytes(descriptionHash)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam("proposal", ethereum.Value.fromTuple(proposal))
  )

  return proposalCreatedEvent
}

export function createProposalExecutedEvent(
  proposalId: Bytes
): ProposalExecuted {
  let proposalExecutedEvent = changetype<ProposalExecuted>(newMockEvent())

  proposalExecutedEvent.parameters = new Array()

  proposalExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromFixedBytes(proposalId)
    )
  )

  return proposalExecutedEvent
}

export function createProposalQueuedEvent(
  proposalId: Bytes,
  eta: BigInt
): ProposalQueued {
  let proposalQueuedEvent = changetype<ProposalQueued>(newMockEvent())

  proposalQueuedEvent.parameters = new Array()

  proposalQueuedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromFixedBytes(proposalId)
    )
  )
  proposalQueuedEvent.parameters.push(
    new ethereum.EventParam("eta", ethereum.Value.fromUnsignedBigInt(eta))
  )

  return proposalQueuedEvent
}

export function createProposalThresholdBpsUpdatedEvent(
  prevBps: BigInt,
  newBps: BigInt
): ProposalThresholdBpsUpdated {
  let proposalThresholdBpsUpdatedEvent = changetype<
    ProposalThresholdBpsUpdated
  >(newMockEvent())

  proposalThresholdBpsUpdatedEvent.parameters = new Array()

  proposalThresholdBpsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "prevBps",
      ethereum.Value.fromUnsignedBigInt(prevBps)
    )
  )
  proposalThresholdBpsUpdatedEvent.parameters.push(
    new ethereum.EventParam("newBps", ethereum.Value.fromUnsignedBigInt(newBps))
  )

  return proposalThresholdBpsUpdatedEvent
}

export function createProposalVetoedEvent(proposalId: Bytes): ProposalVetoed {
  let proposalVetoedEvent = changetype<ProposalVetoed>(newMockEvent())

  proposalVetoedEvent.parameters = new Array()

  proposalVetoedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromFixedBytes(proposalId)
    )
  )

  return proposalVetoedEvent
}

export function createQuorumVotesBpsUpdatedEvent(
  prevBps: BigInt,
  newBps: BigInt
): QuorumVotesBpsUpdated {
  let quorumVotesBpsUpdatedEvent = changetype<QuorumVotesBpsUpdated>(
    newMockEvent()
  )

  quorumVotesBpsUpdatedEvent.parameters = new Array()

  quorumVotesBpsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "prevBps",
      ethereum.Value.fromUnsignedBigInt(prevBps)
    )
  )
  quorumVotesBpsUpdatedEvent.parameters.push(
    new ethereum.EventParam("newBps", ethereum.Value.fromUnsignedBigInt(newBps))
  )

  return quorumVotesBpsUpdatedEvent
}

export function createUpgradedEvent(impl: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam("impl", ethereum.Value.fromAddress(impl))
  )

  return upgradedEvent
}

export function createVetoerUpdatedEvent(
  prevVetoer: Address,
  newVetoer: Address
): VetoerUpdated {
  let vetoerUpdatedEvent = changetype<VetoerUpdated>(newMockEvent())

  vetoerUpdatedEvent.parameters = new Array()

  vetoerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "prevVetoer",
      ethereum.Value.fromAddress(prevVetoer)
    )
  )
  vetoerUpdatedEvent.parameters.push(
    new ethereum.EventParam("newVetoer", ethereum.Value.fromAddress(newVetoer))
  )

  return vetoerUpdatedEvent
}

export function createVoteCastEvent(
  voter: Address,
  proposalId: Bytes,
  support: BigInt,
  weight: BigInt,
  reason: string
): VoteCast {
  let voteCastEvent = changetype<VoteCast>(newMockEvent())

  voteCastEvent.parameters = new Array()

  voteCastEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )
  voteCastEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromFixedBytes(proposalId)
    )
  )
  voteCastEvent.parameters.push(
    new ethereum.EventParam(
      "support",
      ethereum.Value.fromUnsignedBigInt(support)
    )
  )
  voteCastEvent.parameters.push(
    new ethereum.EventParam("weight", ethereum.Value.fromUnsignedBigInt(weight))
  )
  voteCastEvent.parameters.push(
    new ethereum.EventParam("reason", ethereum.Value.fromString(reason))
  )

  return voteCastEvent
}

export function createVotingDelayUpdatedEvent(
  prevVotingDelay: BigInt,
  newVotingDelay: BigInt
): VotingDelayUpdated {
  let votingDelayUpdatedEvent = changetype<VotingDelayUpdated>(newMockEvent())

  votingDelayUpdatedEvent.parameters = new Array()

  votingDelayUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "prevVotingDelay",
      ethereum.Value.fromUnsignedBigInt(prevVotingDelay)
    )
  )
  votingDelayUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newVotingDelay",
      ethereum.Value.fromUnsignedBigInt(newVotingDelay)
    )
  )

  return votingDelayUpdatedEvent
}

export function createVotingPeriodUpdatedEvent(
  prevVotingPeriod: BigInt,
  newVotingPeriod: BigInt
): VotingPeriodUpdated {
  let votingPeriodUpdatedEvent = changetype<VotingPeriodUpdated>(newMockEvent())

  votingPeriodUpdatedEvent.parameters = new Array()

  votingPeriodUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "prevVotingPeriod",
      ethereum.Value.fromUnsignedBigInt(prevVotingPeriod)
    )
  )
  votingPeriodUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newVotingPeriod",
      ethereum.Value.fromUnsignedBigInt(newVotingPeriod)
    )
  )

  return votingPeriodUpdatedEvent
}
