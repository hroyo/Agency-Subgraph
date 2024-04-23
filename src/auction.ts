import {
  AuctionBid as AuctionBidEvent,
  AuctionCreated as AuctionCreatedEvent,
  AuctionSettled as AuctionSettledEvent,
  DurationUpdated as DurationUpdatedEvent,
  Initialized as InitializedEvent,
  MinBidIncrementPercentageUpdated as MinBidIncrementPercentageUpdatedEvent,
  OwnerCanceled as OwnerCanceledEvent,
  OwnerPending as OwnerPendingEvent,
  OwnerUpdated as OwnerUpdatedEvent,
  Paused as PausedEvent,
  ReservePriceUpdated as ReservePriceUpdatedEvent,
  TimeBufferUpdated as TimeBufferUpdatedEvent,
  Unpaused as UnpausedEvent,
  Upgraded as UpgradedEvent
} from "../generated/Auction/Auction"
import { BigDecimal } from '@graphprotocol/graph-ts';
import { log } from "@graphprotocol/graph-ts";
import {
  AuctionConfig,
  Auction,
  AuctionBid,
  AuctionCreated,
  AuctionSettled,
  DurationUpdated,
  Initialized,
  MinBidIncrementPercentageUpdated,
  OwnerCanceled,
  OwnerPending,
  OwnerUpdated,
  Paused,
  ReservePriceUpdated,
  TimeBufferUpdated,
  Unpaused,
  Upgraded
} from "../generated/schema"


export function handleAuctionBid(event: AuctionBidEvent): void {

  let entity = new AuctionBid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.bidder = event.params.bidder
  entity.amount = event.params.amount
  entity.extended = event.params.extended
  entity.endTime = event.params.endTime


  entity.bidTime = event.block.timestamp;
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.auction = event.params.tokenId.toString()
  entity.save()

  let auction = Auction.load(event.params.tokenId.toString());
  if (auction !== null) {
    if (auction.bidCount === 0) {
      auction.firstBidTime = event.block.timestamp;
    }
    auction.bidCount = auction.bidCount + 1
    auction.highestBid = entity.id
    auction.extended = event.params.extended
    auction.endTime = event.params.endTime

    auction.save()

  }
}

export function handleAuctionCreated(event: AuctionCreatedEvent): void {
  let entity = new AuctionCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.startTime = event.params.startTime
  entity.endTime = event.params.endTime
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  // new added Auciton query

  let auction = new Auction(event.params.tokenId.toString())
  auction.startTime = event.params.startTime
  auction.endTime = event.params.endTime
  auction.extended = false
  auction.settled = false
  auction.bidCount = 0
  auction.tokenId = event.params.tokenId
  auction.save()
}

export function handleAuctionSettled(event: AuctionSettledEvent): void {


  // new added Auciton query
  let auction = new Auction(event.params.tokenId.toString())
  auction.settled = true
  auction.winningBid = auction.highestBid
  auction.save()


  let entity = new AuctionSettled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.winner = event.params.winner
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDurationUpdated(event: DurationUpdatedEvent): void {
  let auctionConfig = AuctionConfig.load(event.params.duration.toString())!
  auctionConfig.duration = event.params.duration
  auctionConfig.save()

  let entity = new DurationUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.duration = event.params.duration

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

export function handleMinBidIncrementPercentageUpdated(
  event: MinBidIncrementPercentageUpdatedEvent
): void {
  let auctionConfig = AuctionConfig.load(event.params.minBidIncrementPercentage.toString())!
  auctionConfig.duration = event.params.minBidIncrementPercentage
  auctionConfig.save()



  let entity = new MinBidIncrementPercentageUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.minBidIncrementPercentage = event.params.minBidIncrementPercentage

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

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReservePriceUpdated(
  event: ReservePriceUpdatedEvent
): void {

  let auctionConfig = AuctionConfig.load(event.params.reservePrice.toString())!
  auctionConfig.duration = event.params.reservePrice
  auctionConfig.save()


  let entity = new ReservePriceUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.reservePrice = event.params.reservePrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTimeBufferUpdated(event: TimeBufferUpdatedEvent): void {
  let auctionConfig = AuctionConfig.load(event.params.timeBuffer.toString())!
  auctionConfig.duration = event.params.timeBuffer
  auctionConfig.save()




  let entity = new TimeBufferUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.timeBuffer = event.params.timeBuffer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user

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
