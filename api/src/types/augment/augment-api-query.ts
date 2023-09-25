import '@polkadot/api-base/types/storage';

import type { AccountId32, H256 } from '@polkadot/types/interfaces/runtime';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { ApiTypes, AugmentedQuery, QueryableStorageEntry } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, U8aFixed, Vec, bool, u128, u32, u64 } from '@polkadot/types-codec';
import {
  GearCommonCodeMetadata,
  GearCommonGasProviderNodeGasNode,
  GearCommonGasProviderNodeGasNodeId,
  GearCommonPausedProgramStorageResumeSession,
  GearCommonProgram,
  GearCommonSchedulerTaskScheduledTask,
  GearCommonStorageComplicatedDequeueLinkedNode,
  GearCommonStoragePrimitivesInterval,
  GearCoreCodeInstrumentedCode,
  GearCoreIdsCodeId,
  GearCoreIdsMessageId,
  GearCoreIdsProgramId,
  GearCoreMessageStoredStoredDispatch,
  GearCoreMessageUserUserStoredMessage,
  PalletGearBankBankAccount,
} from '../lookup';
import type { Observable } from '@polkadot/types/types';

declare module '@polkadot/api-base/types/storage' {
  interface AugmentedQueries<ApiType extends ApiTypes> {
    gear: {
      /**
       * The current block number being processed.
       *
       * It shows block number in which queue is processed.
       * May be less than system pallet block number if panic occurred previously.
       **/
      blockNumber: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A flag indicating whether the message queue should be processed at the end of a block
       *
       * If not set, the inherent extrinsic that processes the queue will keep throwing an error
       * thereby making the block builder exclude it from the block.
       **/
      executeInherent: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A guard to prohibit all but the first execution of `pallet_gear::run()` call in a block.
       *
       * Set to `Some(())` if the extrinsic is executed for the first time in a block.
       * All subsequent attempts would fail with `Error::<T>::GearRunAlreadyInBlock` error.
       * Set back to `None` in the `on_finalize()` hook at the end of the block.
       **/
      gearRunInBlock: AugmentedQuery<ApiType, () => Observable<Option<Null>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    gearBank: {
      bank: AugmentedQuery<
        ApiType,
        (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletGearBankBankAccount>>,
        [AccountId32]
      > &
        QueryableStorageEntry<ApiType, [AccountId32]>;
      unusedValue: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    gearGas: {
      allowance: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      gasNodes: AugmentedQuery<
        ApiType,
        (
          arg: GearCommonGasProviderNodeGasNodeId | { Node: any } | { Reservation: any } | string | Uint8Array,
        ) => Observable<Option<GearCommonGasProviderNodeGasNode>>,
        [GearCommonGasProviderNodeGasNodeId]
      > &
        QueryableStorageEntry<ApiType, [GearCommonGasProviderNodeGasNodeId]>;
      totalIssuance: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    gearMessenger: {
      /**
       * Counter for the related counted storage map
       **/
      counterForDispatches: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      dequeued: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      dispatches: AugmentedQuery<
        ApiType,
        (
          arg: GearCoreIdsMessageId | string | Uint8Array,
        ) => Observable<Option<GearCommonStorageComplicatedDequeueLinkedNode>>,
        [GearCoreIdsMessageId]
      > &
        QueryableStorageEntry<ApiType, [GearCoreIdsMessageId]>;
      dispatchStash: AugmentedQuery<
        ApiType,
        (
          arg: GearCoreIdsMessageId | string | Uint8Array,
        ) => Observable<Option<ITuple<[GearCoreMessageStoredStoredDispatch, GearCommonStoragePrimitivesInterval]>>>,
        [GearCoreIdsMessageId]
      > &
        QueryableStorageEntry<ApiType, [GearCoreIdsMessageId]>;
      head: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []> & QueryableStorageEntry<ApiType, []>;
      mailbox: AugmentedQuery<
        ApiType,
        (
          arg1: AccountId32 | string | Uint8Array,
          arg2: GearCoreIdsMessageId | string | Uint8Array,
        ) => Observable<Option<ITuple<[GearCoreMessageUserUserStoredMessage, GearCommonStoragePrimitivesInterval]>>>,
        [AccountId32, GearCoreIdsMessageId]
      > &
        QueryableStorageEntry<ApiType, [AccountId32, GearCoreIdsMessageId]>;
      queueProcessing: AugmentedQuery<ApiType, () => Observable<Option<bool>>, []> & QueryableStorageEntry<ApiType, []>;
      sent: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      tail: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []> & QueryableStorageEntry<ApiType, []>;
      waitlist: AugmentedQuery<
        ApiType,
        (
          arg1: GearCoreIdsProgramId | string | Uint8Array,
          arg2: GearCoreIdsMessageId | string | Uint8Array,
        ) => Observable<Option<ITuple<[GearCoreMessageStoredStoredDispatch, GearCommonStoragePrimitivesInterval]>>>,
        [GearCoreIdsProgramId, GearCoreIdsMessageId]
      > &
        QueryableStorageEntry<ApiType, [GearCoreIdsProgramId, GearCoreIdsMessageId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    gearProgram: {
      codeLenStorage: AugmentedQuery<
        ApiType,
        (arg: GearCoreIdsCodeId | string | Uint8Array) => Observable<Option<u32>>,
        [GearCoreIdsCodeId]
      > &
        QueryableStorageEntry<ApiType, [GearCoreIdsCodeId]>;
      codeStorage: AugmentedQuery<
        ApiType,
        (arg: GearCoreIdsCodeId | string | Uint8Array) => Observable<Option<GearCoreCodeInstrumentedCode>>,
        [GearCoreIdsCodeId]
      > &
        QueryableStorageEntry<ApiType, [GearCoreIdsCodeId]>;
      memoryPageStorage: AugmentedQuery<
        ApiType,
        (
          arg1: GearCoreIdsProgramId | string | Uint8Array,
          arg2: u32 | AnyNumber | Uint8Array,
        ) => Observable<Option<Bytes>>,
        [GearCoreIdsProgramId, u32]
      > &
        QueryableStorageEntry<ApiType, [GearCoreIdsProgramId, u32]>;
      metadataStorage: AugmentedQuery<
        ApiType,
        (arg: GearCoreIdsCodeId | string | Uint8Array) => Observable<Option<GearCommonCodeMetadata>>,
        [GearCoreIdsCodeId]
      > &
        QueryableStorageEntry<ApiType, [GearCoreIdsCodeId]>;
      originalCodeStorage: AugmentedQuery<
        ApiType,
        (arg: GearCoreIdsCodeId | string | Uint8Array) => Observable<Option<Bytes>>,
        [GearCoreIdsCodeId]
      > &
        QueryableStorageEntry<ApiType, [GearCoreIdsCodeId]>;
      pausedProgramStorage: AugmentedQuery<
        ApiType,
        (arg: GearCoreIdsProgramId | string | Uint8Array) => Observable<Option<ITuple<[u32, H256]>>>,
        [GearCoreIdsProgramId]
      > &
        QueryableStorageEntry<ApiType, [GearCoreIdsProgramId]>;
      programStorage: AugmentedQuery<
        ApiType,
        (arg: GearCoreIdsProgramId | string | Uint8Array) => Observable<Option<GearCommonProgram>>,
        [GearCoreIdsProgramId]
      > &
        QueryableStorageEntry<ApiType, [GearCoreIdsProgramId]>;
      resumeSessions: AugmentedQuery<
        ApiType,
        (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<GearCommonPausedProgramStorageResumeSession>>,
        [u128]
      > &
        QueryableStorageEntry<ApiType, [u128]>;
      resumeSessionsNonce: AugmentedQuery<ApiType, () => Observable<Option<u128>>, []> &
        QueryableStorageEntry<ApiType, []>;
      sessionMemoryPages: AugmentedQuery<
        ApiType,
        (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<Vec<ITuple<[u32, Bytes]>>>>,
        [u128]
      > &
        QueryableStorageEntry<ApiType, [u128]>;
      waitingInitStorage: AugmentedQuery<
        ApiType,
        (arg: GearCoreIdsProgramId | string | Uint8Array) => Observable<Option<Vec<GearCoreIdsMessageId>>>,
        [GearCoreIdsProgramId]
      > &
        QueryableStorageEntry<ApiType, [GearCoreIdsProgramId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    gearScheduler: {
      firstIncompleteTasksBlock: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> &
        QueryableStorageEntry<ApiType, []>;
      taskPool: AugmentedQuery<
        ApiType,
        (
          arg1: u32 | AnyNumber | Uint8Array,
          arg2:
            | GearCommonSchedulerTaskScheduledTask
            | { PauseProgram: any }
            | { RemoveCode: any }
            | { RemoveFromMailbox: any }
            | { RemoveFromWaitlist: any }
            | { RemovePausedProgram: any }
            | { WakeMessage: any }
            | { SendDispatch: any }
            | { SendUserMessage: any }
            | { RemoveGasReservation: any }
            | { RemoveResumeSession: any }
            | string
            | Uint8Array,
        ) => Observable<Option<Null>>,
        [u32, GearCommonSchedulerTaskScheduledTask]
      > &
        QueryableStorageEntry<ApiType, [u32, GearCommonSchedulerTaskScheduledTask]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
  }
}