import { Interface } from '@ethersproject/abi'
import IMulticallABI from './abis/xswap-interface-multicall.json'

export abstract class Multicall {
  public static INTERFACE: Interface = new Interface(IMulticallABI)

  /**
   * Cannot be constructed.
   */
  private constructor() {}

  public static encodeMulticall(calldatas: string | string[]): string {
    if (!Array.isArray(calldatas)) {
      calldatas = [calldatas]
    }

    return calldatas.length === 1 ? calldatas[0] : Multicall.INTERFACE.encodeFunctionData('multicall', [calldatas])
  }
}
