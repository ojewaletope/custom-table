export interface ColumnSetting {
  primaryKey: string;
  header?: string;
  format?: PipeFormat;
}

export enum PipeFormat {
  DEFAULT, // 0
  CURRENCY, // 1
  DATE, // 2
  PERCENTAGE, // 3
}
