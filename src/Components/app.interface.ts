export interface ITypeCar {
  type: string;
}
export interface ICar {
  mark: string;
  model: string;
  year: number;
  type: ITypeCar;
}
