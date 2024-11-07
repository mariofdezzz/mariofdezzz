import { SVGElement } from '@/api/element/domain/svg-element.ts'
import { gobalStyles } from '~/container/styles/global.ts'

export class HeaderCreator {
  create(): string {
    return new SVGElement(
      `
      <style>
        ${gobalStyles}
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
