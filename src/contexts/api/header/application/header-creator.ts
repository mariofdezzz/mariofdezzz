import { SVGElement } from '@/api/element/domain/svg-element.ts'

export class HeaderCreator {
  create(): string {
    return new SVGElement(
      `
      <style>
        * {
          font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
          color: green;
        }
        header {
          display: grid;
          justify-content: space-between;
          grid-template-columns: repeat(3, auto);
          grid-gap: 1rem;
          width: 100%;
          font-weight: bold;
        }
      </style>
      <header>
        <span> Menu </span>
        <span> 1.2k Contributions </span>
        <span> readme.md </span>
      </header>
    `,
    ).toString()
  }
}
