
export class Book{
  id?: number;
  title?: string;
  description?: string;
  unitCost?: number;
  isbn?: string;
  publicationDate?: Date;
  nbOfPages?: number;
  imageURL?: string;
  language?: Book.LanguageEnum;

}

export namespace Book {

  export enum LanguageEnum {
    ENGLISH = <any> 'ENGLISH',
    FRENCH = <any> 'FRENCH',
    SPANISH = <any> 'SPANISH',
    PORTUGUESE = <any> 'PORTUGUESE',
    ITALIAN = <any> 'ITALIAN',
    FINISH = <any> 'FINISH',
    GERMAN = <any> 'GERMAN',
    DUTCH = <any> 'DUTCH',
    RUSSIAN = <any> 'RUSSIAN'
  }

}


