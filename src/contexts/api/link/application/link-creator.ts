import { SVGElement } from '@/api/element/domain/svg-element.ts'
import { gobalStyles } from '~/container/styles/global.ts'

export class LinkCreator {
  constructor(private readonly label: string) {}

  create(): string {
    return new SVGElement(`
      <style>
        ${gobalStyles}
        a {
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 3px;
        }
        .link_arrow {
          font-size: 0.75em;
          animation-name: rotate;
          animation-duration: 5s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-delay: ${Math.random() * 5}s;
        }
        
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          10%,
          100% {
            transform: rotate(360deg);
          }
        }
      </style>
      <a>
        <span class="link_label">${this.label}</span>
        <span class="link_arrow">↗</span>
      </a>
    `).toString()
  }
}
