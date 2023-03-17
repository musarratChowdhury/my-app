import { IVocubulary } from './IVocubulary';
export class Vocubulary implements IVocubulary {
  word: string = '';
  meaning: string = '';
  sentence: string = '';
  type: string = '';
  creationDate: string = '';
  memoryLevel: number = 0;
}
