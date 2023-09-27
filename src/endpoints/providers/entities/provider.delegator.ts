export class ProviderDelegator {
  constructor(init?: Partial<ProviderDelegator>) {
    Object.assign(this, init);
  }

  address: string = '';
  stake: string = '';
}
