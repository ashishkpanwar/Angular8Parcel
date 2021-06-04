import { personInfo } from './PersonInfo'

export interface Parcel {
  id: number;
  Sender: personInfo;
  Receipient: personInfo;
  Weight: number;
  Value: number;
  Signed: boolean;
  departments: string;
}
