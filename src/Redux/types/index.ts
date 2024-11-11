type EmptyCB = () => void;
export type ParamsCB<T extends (...args: any) => any = any> = (
  ...args: Parameters<T>
) => void;
export type ParamsCBType<T extends (...args: any) => any = any> = (
  ...args: Parameters<T>
) => void;
export const EmptyCB = () => {};
export const ParamsCB = (e?: any) => {
  e;
};
export interface AnyObject<T = any> {
  [key: string]: T;
}
declare global {
  interface Window {
    MSStream: any;
  }
}